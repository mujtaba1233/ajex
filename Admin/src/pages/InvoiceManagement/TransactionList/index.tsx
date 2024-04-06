import React, { useMemo } from 'react'
import BreadCrumb from '../../../Common/BreadCrumb'
import { Card, Col, Container, Dropdown, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { transactionList } from '../../../Common/data';
import TableContainer from '../../../Common/Tabledata/TableContainer';


const TransactionList = () => {
    document.title="Transaction List | Invoika Admin & Dashboard Template";

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
            Header: "TRANSACTION ID",
            accessor: "invoiceID",
            Filter: false,
            isSortable: true
          },
          {
            Header: "DATE",
            accessor: "Date",
            Filter: false,
            isSortable: true
          },
          {
            Header: "DESCRIPTION",
            accessor: "Description",
            Filter: false,
            isSortable: true,
          },  
          {
            Header: "CREDIT / DEBIT",
            accessor: "status",
            Filter: false,            
            isSortable: true,
            Cell: (cell: any) => {     
                return (              
                <span className={`badge bg-${cell.row.original.color}-subtle text-${cell.row.original.color} p-2`}>{cell.row.original.status}</span>
                )
            }
          },
          {
            Header: "AMOUNT",
            accessor: "Amount",
            Filter: false,
            isSortable: true,
          },  
          {
            Header: "ATTACHMENT",
            accessor: "Attachment",
            Filter: false,
            isSortable: true,
            Cell: (cell: any) => {     
                return (           
                      cell.row.original.Attachment === true ?<button type="button" className="btn btn-soft-success btn-sm btn-icon fs-14">
                            <i className="las la-download fs-18"></i>
                     </button>:"N/A"
                  )
                        }
          }, 
        ], [])

  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <BreadCrumb pageTitle="User" title="Transaction List" />
                    <Row className="pb-4 gy-3">
                        <Col sm={4}>
                            <Link to="/transaction-new" className="btn btn-primary"><i className="las la-plus me-1"></i>Add Transaction</Link>
                        </Col>

                        <div className="col-sm-auto ms-auto">
                           <div className="d-flex gap-3">
                            <div className="search-box">
                                <Form.Control type="text" id="searchMemberList" placeholder="Search for result" />
                                <i className="las la-search search-icon"></i>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle as="button" id="dropdownMenuLink1" className="btn btn-soft-info btn-icon fs-14 arrow-none"><i className="las la-ellipsis-v fs-18"></i></Dropdown.Toggle>
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
                                <TableContainer
                                        isPagination={true}
                                        columns={columns}
                                        data={transactionList || []}
                                        customPageSize={9}
                                        divClassName="table-card table-responsive"
                                        tableClass="table-hover table-nowrap align-middle mb-0"
                                        isBordered={false}
                                        PaginationClass="align-items-center mt-4 gy-3"
                                    />     
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>                    
            </Container>         
        </div>           
    </React.Fragment>
  )
}

export default TransactionList
