import React, { useEffect, useMemo, useState,useCallback } from 'react'
import { Card, Col, Dropdown, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useDispatch , useSelector} from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { createSelector } from 'reselect';
import { getUsers as onGetUsers ,
         deleteUsers as onDeleteUsers
        } from '../../../slices/thunk';
import TableContainer from '../../../Common/Tabledata/TableContainer';
import { DeleteModal } from '../../../Common/DeleteModal';
import { handleSearchData } from '../../../Common/Tabledata/SorttingData';
import EditUsers from '../../../Common/CrudModal/EditUsers';
import AddUsers from '../../../Common/CrudModal/AddUsers';
import NoSearchResult from '../../../Common/Tabledata/NoSearchResult';

interface userProps {
    isShow: any,
    hideUserModal: any
}

const UserTable = ({ isShow, hideUserModal }: userProps) => {

    const dispatch = useDispatch();

    const selectUsersList = createSelector(
        (state: any) => state.Invoice,
        (invoices:any) => ({
            usersList: invoices.usersList
        })
    );

    const {usersList} = useSelector(selectUsersList)

    const [users,setUsers] = useState<any>([])

    useEffect(() => {
        dispatch(onGetUsers())
    }, [dispatch]);

    useEffect(() => {
        setUsers(usersList)
    }, [usersList])

    // Delete modal

    const [delet, setDelet] = useState<boolean>(false);
    const [deletid, setDeletid] = useState<any>();

    const handleDeleteModal = useCallback((id: any) => {
        setDelet(!delet);
        setDeletid(id);
    }, [delet])

    const handleDeleteId = () => {
        dispatch(onDeleteUsers(deletid.id))
        setDelet(false)
    }

    // search
    const handleSearch = (ele: any) => {
        let item = ele.value;

        if (item === "All Tasks") {
            setUsers([...usersList]);
        } else {
            handleSearchData({ data: usersList, item: item, setState: setUsers })
        }
    }

    const [editUser, setEditUser] = useState<boolean>(false);
    const [edit, setEdit] = useState<any>();
    
    const handleCloseEdit = () => setEditUser(false);
    const handleEditUser = (item: any) => {
        setEditUser(true)
        setEdit({
            id: item.id,
            memberName: item.memberName,
            memberImage: item.memberImage,
            email: item.email,
            mobile: item.mobile,
            registeredOn: item.registeredOn,
            status: item.status
        })
        
    }
    

    interface columnsType {
        Header: any,
        accessor: string,
        key?: string,
        Filter: boolean,
        isSortable: boolean,
        Cell?: (cell: any) => any
      }

      const columns: columnsType[] = useMemo(
        () => [        
         
          {
            Header: "MEMBER NAME",
            accessor: "firstName",
            Filter: false,
            isSortable: true,
            Cell: (cell: any) => {
    
              return (     
                <div>
                    <Link to="#" className="text-body align-middle fw-medium">{cell.row.original.firstName + " " +cell.row.original.lastName }</Link>   
                </div>                           
              )
            }
          },          
          {
            Header: "EMAIL",
            accessor: "email",
            Filter: false,
            isSortable: true
          },
          {
            Header: "MOBILE",
            accessor: "phoneNumber",
            Filter: false,
            isSortable: true
          },
          {
            Header: "REGISTERED ON",
            accessor: "createdAt",
            Filter: false,
            isSortable: true,
          },          
          {
            Header: "ROLE",
            accessor: "role",
            Filter: false,
            isSortable: true,
            Cell: (cell) => {         
                return <span className="badge bg-success-subtle text-success p-2">{cell.row.original.role.name}</span>                         
            }
          },             
          {
            Header: "ACTION",
            accessor: "action",
            Filter: false,
            style: {width: '12%'},

            isSortable: false,
            Cell: (cell: any) => (                        
                        <ul className="list-inline hstack gap-2 mb-0">
                            <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="View" data-bs-original-title="View">
                                <Link to="#" className="btn btn-soft-info btn-sm d-inline-block">
                                    <i className="las la-eye fs-17 align-middle"></i>
                                </Link>
                            </li>
                            <li className="list-inline-item edit" onClick={() => { const item = cell.row.original; handleEditUser(item); }}>
                                <Link to="#" className="btn btn-soft-info btn-sm d-inline-block">
                                    <i className="las la-pen fs-17 align-middle"></i>
                                </Link>
                            </li>
                            <li className="list-inline-item" onClick={() => { const item = cell.row.original; handleDeleteModal(item); }}>
                                <Link to="#" className="btn btn-soft-danger btn-sm d-inline-block">
                                    <i className="las la-file-download fs-17 align-middle"></i>
                                </Link>
                            </li>
                        </ul>
            )
          },
        ], [handleDeleteModal])

  return (
    <React.Fragment>
                    <Row className="pb-4 gy-3">
                        <Col sm={4}>
                            <button className="btn btn-primary addPayment-modal" onClick={hideUserModal}><i className="las la-plus me-1"></i> Add New</button>
                        </Col>

                        <div className="col-sm-auto ms-auto">
                           <div className="d-flex gap-3">
                            <div className="search-box">
                                <Form.Control type="text" id="searchMemberList" placeholder="Search for Result" onChange={(e: any) => handleSearch(e.target)} />
                                <i className="las la-search search-icon"></i>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle as="button" variant="info" className="btn btn-soft-info btn-icon fs-14 arrow-none"><i className="las la-ellipsis-v fs-18"></i></Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>All</Dropdown.Item>
                                    <Dropdown.Item>Last Week</Dropdown.Item>
                                    <Dropdown.Item>Last Month</Dropdown.Item>
                                    <Dropdown.Item>Last Year</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                           </div>
                        </div>
                    </Row>

                    <Row>
                        <Col xl={12}>
                            <Card>
                                <Card.Body>
                                {users && users.length > 0 ?           
                                <TableContainer
                                    isPagination={true}
                                    columns={columns}
                                    data={users || []}
                                    customPageSize={9}
                                    divClassName="table-card table-responsive"
                                    tableClass="table-hover table-nowrap align-middle mb-0"
                                    isBordered={false}
                                    PaginationClass="align-items-center mt-4 gy-3"
                                />: <NoSearchResult />
                            }
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <AddUsers isShow={isShow} handleClose={hideUserModal} handleShow={isShow} />

                    <EditUsers isShow={editUser} handleClose={handleCloseEdit} edit={edit} />

                    <DeleteModal show={delet} handleClose={handleDeleteModal} deleteModalFunction={handleDeleteId} />
                    <ToastContainer />
    </React.Fragment>
  )
}

export default UserTable
