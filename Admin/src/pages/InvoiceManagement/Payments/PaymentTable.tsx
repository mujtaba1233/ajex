import React, { useEffect, useMemo, useState, useCallback } from 'react'
import { Card, Col, Dropdown, Form, Nav, Row, Tab } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { createSelector } from 'reselect';
import {
    getPayments as onGetPayments,
    deletePayment as onDeletePayment
} from '../../../slices/thunk';
import TableContainer from '../../../Common/Tabledata/TableContainer';
import { DeleteModal } from '../../../Common/DeleteModal';
import { handleSearchData } from '../../../Common/Tabledata/SorttingData';
import EditPayment from '../../../Common/CrudModal/EditPayment';
import Addpayment from '../../../Common/CrudModal/Addpayment';
import NoSearchResult from '../../../Common/Tabledata/NoSearchResult';

interface paymentProps {
    isShow: any,
    hidePaymentModal: any
}

const PaymentTable = ({ isShow, hidePaymentModal }: paymentProps) => {

    const dispatch = useDispatch();

    const selectPaymentsList = createSelector(
        (state: any) => state.Invoice,
        (invoices: any) => ({
            paymentList: invoices.paymentList
        })
    );

    const { paymentList } = useSelector(selectPaymentsList)

    const [payments, setPayments] = useState<any>([])

    useEffect(() => {
        dispatch(onGetPayments())
    }, [dispatch]);

    useEffect(() => {
        setPayments(paymentList)
    }, [paymentList])

    // Delete modal

    const [delet, setDelet] = useState<boolean>(false);
    const [deletid, setDeletid] = useState<any>();

    const handleDeleteModal = useCallback((id: any) => {
        setDelet(!delet);
        setDeletid(id);
    }, [delet])

    const handleDeleteId = () => {
        dispatch(onDeletePayment(deletid.id))
        setDelet(false)
    }


    const toggleTab = (type: any) => {
        if (type !== "all") {
            setPayments(paymentList.filter((payment: any) => payment.status === type));
        } else {
            setPayments(paymentList)
        }
    };


    const [editPayment, setEditPayment] = useState<boolean>(false);
    const [edit, setEdit] = useState<any>();

    const handleCloseEdit = () => setEditPayment(false);
    const handleEditPayment = (item: any) => {

        setEditPayment(true)
        setEdit({
            id: item.id,
            member: item.member,
            date: item.date,
            paymentDetails: item.paymentDetails,
            paymentType: item.paymentType,
            amount: item.amount,
            status: item.status
        })
    }

    // search
    const handleSearch = (ele: any) => {
        let item = ele.value;

        if (item === "All Tasks") {
            setPayments([...paymentList]);
        } else {
            handleSearchData({ data: paymentList, item: item, setState: setPayments })
        }
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
                Header: "MEMBER",
                accessor: "member",
                Filter: false,
                isSortable: true
            },
            {
                Header: "DATE",
                accessor: "date",
                Filter: false,
                isSortable: true
            },
            {
                Header: "PAYMENT DETAILS",
                accessor: "paymentDetails",
                Filter: false,
                isSortable: true,
            },
            {
                Header: "PAYMENT TYPE",
                accessor: "paymentType",
                Filter: false,
                isSortable: true,
                Cell: (cell) => {
                    switch (cell.row.original.paymentType) {
                        case "Credit Card":
                            return <div>{cell.row.original.paymentType}</div>
                        case "Google Pay":
                            return <div>{cell.row.original.paymentType}</div>
                        case "Cash":
                            return <div>{cell.row.original.paymentType}</div>
                        case "Bank Transfer":
                            return <div>{cell.row.original.paymentType}</div>
                    }

                }
            },
            {
                Header: "AMOUNT",
                accessor: "amount",
                Filter: false,
                isSortable: true,
                Cell: (cell: any) => (
                    <>${cell.row.original.amount}</>
                ),
            },
            {
                Header: "Status",
                accessor: "status",
                key: "status",
                Filter: false,
                isSortable: true,
                Cell: (cell) => {
                    switch (cell.row.original.status) {
                        case "Paid":
                            return <span className="badge bg-success-subtle text-success p-2">{cell.row.original.status}</span>
                        case "Pending":
                            return <span className="badge bg-warning-subtle text-warning p-2">{cell.row.original.status}</span>
                        case "Failed":
                            return <span className="badge bg-danger-subtle text-danger p-2">{cell.row.original.status}</span>
                    }
                }
            },
            {
                Header: "Action",
                accessor: "action",
                Filter: false,
                style: { width: '12%' },

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
                                <Dropdown.Item onClick={() => { const item = cell.row.original; handleEditPayment(item); }}
                                ><i className="las la-pen fs-18 align-middle me-2 text-muted"></i>
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
                    <button className="btn btn-primary addPayment-modal" onClick={hidePaymentModal}><i className="las la-plus me-1"></i> Add Payment</button>
                </Col>

                <div className="col-sm-auto ms-auto">
                    <div className="d-flex gap-3">
                        <div className="search-box">
                            <Form.Control type="text" id="searchMemberList" placeholder="Search for Result" onChange={(e: any) => handleSearch(e.target)} />
                            <i className="las la-search search-icon"></i>
                        </div>
                        <Dropdown>
                            <Dropdown.Toggle as="button" className="btn btn-soft-info btn-icon fs-14 arrow-none"><i className="las la-ellipsis-v fs-18"></i></Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item to="#">All</Dropdown.Item>
                                <Dropdown.Item to="#">Last Week</Dropdown.Item>
                                <Dropdown.Item to="#">Last Month</Dropdown.Item>
                                <Dropdown.Item to="#">Last Year</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </Row>

            <Row>
                <Col xl={12}>
                    <Card>
                        <Card.Body>
                            <Tab.Container defaultActiveKey="all">
                                <Nav as="ul" variant="tabs" className="nav-tabs nav-tabs-custom nav-success mb-3" >
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="all"
                                            onClick={() => {
                                                toggleTab("all");
                                            }}>
                                            All
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="paid"
                                            onClick={() => {
                                                toggleTab("Paid");
                                            }}>
                                            Paid
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="pending"
                                            onClick={() => {
                                                toggleTab("Pending");
                                            }}>
                                            Pending
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Card>
                                    <Card.Body>
                                    {payments && payments.length > 0 ?           
                                        <TableContainer
                                            isPagination={true}
                                            columns={columns}
                                            data={payments || []}
                                            customPageSize={9}
                                            divClassName="table-card table-responsive"
                                            tableClass="table-hover table-nowrap align-middle mb-0"
                                            isBordered={false}
                                            theadClass="table-light"
                                            PaginationClass="align-items-center mt-4 gy-3"
                                        />
                                        : <NoSearchResult />
                             }
                                    </Card.Body>
                                </Card>


                            </Tab.Container>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Addpayment isShow={isShow} handleClose={hidePaymentModal} handleShow={isShow} />

            <EditPayment isShow={editPayment} handleClose={handleCloseEdit} edit={edit} />

            <DeleteModal show={delet} handleClose={handleDeleteModal} deleteModalFunction={handleDeleteId} />
            <ToastContainer />
        </React.Fragment>
    )
}

export default PaymentTable
