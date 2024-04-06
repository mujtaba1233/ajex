import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Card, Col, Dropdown, Form, Row } from 'react-bootstrap';
import TableContainer from '../../../../Common/Tabledata/TableContainer';
import { useDispatch,useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { ToastContainer } from 'react-toastify';
import { getPaymentSummary as onGetPaymentSummary,
        deletePaymentSummary as onDeletePaymentSummary } from '../../../../slices/thunk';
import NoSearchResult from '../../../../Common/Tabledata/NoSearchResult';
import { handleSearchData } from '../../../../Common/Tabledata/SorttingData';
import { DeleteModal } from '../../../../Common/DeleteModal';
import EditPaymentSummary from '../../../../Common/CrudModal/EditPaymentSummary';

const PaymentSummaryTable = () => {

    document.title="Payment Summary | Invoika Admin & Dashboard Template";


    const dispatch = useDispatch();

    const selectPaymentSummaryList = createSelector(
        (state: any) => state.Invoice,
        (invoices:any) => ({
          paymentSummaryList: invoices.paymentSummaryList
        })
    );

    const {paymentSummaryList} = useSelector(selectPaymentSummaryList);
    const [paymentSummary,setPaymentSummary] = useState<any>([]);

    useEffect(() => {
        dispatch(onGetPaymentSummary())
    }, [dispatch]);

    useEffect(() => {
        setPaymentSummary(paymentSummaryList)
    }, [paymentSummaryList])

    

      // search
      const handleSearch = (ele: any) => {
        let item = ele.value;

        if (item === "All Tasks") {
            setPaymentSummary([...paymentSummaryList]);
        } else {
            handleSearchData({ data: paymentSummaryList, item: item, setState: setPaymentSummary })
        }
    }

     // Delete modal

     const [delet, setDelet] = useState<boolean>(false);
     const [deletid, setDeletid] = useState<any>();

     const handleDeleteModal = useCallback((id: any) => {
         setDelet(!delet);
         setDeletid(id);
     }, [delet])
 
     const handleDeleteId = () => {
         dispatch(onDeletePaymentSummary(deletid.id))
         setDelet(false)
     }

    // edit data

    const [editPaymentSummary, setEditPaymentSummary] = useState<boolean>(false);
    const [edit, setEdit] = useState<any>();

    const handleCloseEdit = () => setEditPaymentSummary(false);
    const handleEditPaymentSummary = (item: any) => {
        setEditPaymentSummary(true)
        setEdit({
            id: item.id,
            invoiceID: item.invoiceID,
            date: item.date,
            client: item.client,
            billed: item.billed,
            paymentType: item.paymentType
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
                Header: "DATE",
                accessor: "date",
                Filter: false,
                isSortable: true,
            },      
          {
            Header: "INVOICE ID",
            accessor: "invoiceID",
            Filter: false,
            isSortable: true,           
            
          },
          {
            Header: "CLIENT",
            accessor: "client",
            Filter: false,
            isSortable: true,            
          },         
          {
            Header: "BILLED",
            accessor: "billed",
            Filter: false,
            isSortable: true,
            Cell: (cell: any) => (
                <>${cell.row.original.billed}</>
            ),
          },
          {
            Header: "PAYMENT TYPE",
            accessor: "paymentType",
            Filter: false,
            isSortable: true,
            Cell: (cell) => {         
                switch (cell.row.original.paymentType) {
                    case "Google Pay":
                        return <span className="badge bg-success-subtle text-success p-2">{cell.row.original.paymentType}</span>
                    case "Cash":
                        return <span className="badge bg-warning-subtle text-warning p-2">{cell.row.original.paymentType}</span>          
                    case "Credit Card":
                        return <span className="badge bg-danger-subtle text-danger p-2">{cell.row.original.paymentType}</span> 
                    default:
                        return <span className="badge bg-success-subtle text-success p-2">{cell.row.original.paymentType}</span>
                }                
            }
          },        
          {
            Header: "Action",
            accessor: "action",
            Filter: false,
            isSortable: false,
            Cell: (cell: any) => (
                        <Dropdown>
                            <Dropdown.Toggle as="button" className="btn btn-soft-secondary btn-sm arrow-none">
                                <i className="las la-ellipsis-h align-middle fs-18"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu-end">
                                <li>
                                    <Dropdown.Item to="#"><i className="las la-eye fs-18 align-middle me-2 text-muted"></i>
                                        View</Dropdown.Item>
                                </li>
                                <li>
                                    <Dropdown.Item onClick={() => { const item = cell.row.original; handleEditPaymentSummary(item); }}
                                    ><i className="las la-pen fs-18 align-middle me-2 text-muted"
                                    ></i>
                                        Edit</Dropdown.Item>
                                </li>
                                <li>
                                    <Dropdown.Item to="#"><i className="las la-file-download fs-18 align-middle me-2 text-muted"></i>
                                        Download</Dropdown.Item>
                                </li>
                                <li className="dropdown-divider"></li>
                                <li>
                                    <Dropdown.Item className="remove-item-btn" to="#"
                                        onClick={() => { const item = cell.row.original; handleDeleteModal(item); }}>
                                        <i className="las la-trash-alt fs-18 align-middle me-2 text-muted"></i>
                                        Delete
                                    </Dropdown.Item>
                                </li>
                            </Dropdown.Menu>
                        </Dropdown>
            )
          },
        ], [handleDeleteModal])

        
  return (
    <React.Fragment>
                <Row className="pb-4 gy-3">
                    <Col sm={4}>
                        <div className="d-flex">
                            <div className="search-box">
                                <Form.Control type="text" className="form-control" placeholder="Search for Result" onChange={(e: any) => handleSearch(e.target)}/>
                                <i className="las la-search search-icon"></i>
                            </div>
                        </div>
                    </Col>

                    <div className="col-sm-auto ms-auto">
                        <Dropdown className="d-flex gap-2">
                            <button type="button" className="btn btn-soft-primary fs-14"><i className="las la-filter fs-16 align-middle me-2"></i>Filter</button>
                            <Dropdown.Toggle as="button" id="dropdownMenuLink1" className="btn btn-soft-info btn-icon fs-14 arrow-none"><i className="las la-ellipsis-v fs-18"></i></Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item to="#">Print</Dropdown.Item>
                                <Dropdown.Item to="#">Export to Excel</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Row>  
                <Row>            
                    <Col xl={12}>
                        <Card>
                            <Card.Body>
                            {paymentSummary && paymentSummary.length > 0 ?                
                              <TableContainer
                                    isPagination={true}
                                    columns={columns}
                                    data={paymentSummary || []}
                                    customPageSize={9}
                                    divClassName="table-card table-responsive"
                                    tableClass="table-hover table-nowrap align-middle mb-0"
                                    isBordered={false}
                                    PaginationClass="align-items-center mt-4 gy-3"
                                />
                                : <NoSearchResult />
                             }
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
      {/* Delete */}

      <EditPaymentSummary isShow={editPaymentSummary} handleClose={handleCloseEdit} edit={edit} />

      <DeleteModal show={delet} handleClose={handleDeleteModal} deleteModalFunction={handleDeleteId} />
      <ToastContainer />
    </React.Fragment>
  )
}

export default PaymentSummaryTable
