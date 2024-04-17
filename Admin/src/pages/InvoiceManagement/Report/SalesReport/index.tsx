import React, { useMemo } from 'react'
import BreadCrumb from '../../../../Common/BreadCrumb';
import { Card, Col, Container, Dropdown, Row } from 'react-bootstrap';
import { salesReport } from '../../../../Common/data/index';
import TableContainer from '../../../../Common/Tabledata/TableContainer';

const SalesReport = () => {
    document.title="Sales Report | Ajex Admin & Dashboard Template";

    interface columnsType {
        Header: any,
        accessor: string,
        key?: string,
        Filter: boolean,
        isSortable: boolean,
        Cell?: (cell: any) => JSX.Element
      }

      const columns: columnsType[] = useMemo(
        () => [        
         
                
          {
            Header: "INVOICE ID",
            accessor: "invoiceId",
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
            Header: "CATEGORY",
            accessor: "category",
            Filter: false,
            isSortable: true,
          },  
          {
            Header: "PRICE",
            accessor: "price",
            Filter: false,
            isSortable: true,
          },
          {
            Header: "DISCOUNTS",
            accessor: "discount",
            Filter: false,
            isSortable: true,
          },  
          {
            Header: "AMOUNT",
            accessor: "amount",
            Filter: false,
            isSortable: true,
          },
               
             
          
        ], [])
    return (
        <React.Fragment>
        <div className="page-content">
                <Container fluid>
                    <BreadCrumb pageTitle="Report" title="Sales Report" />
                    <Row className="pb-4 gy-3">
                        <Col sm={4}>
                            <div className="d-flex">
                                <div className="search-box">
                                    <input type="text" className="form-control" placeholder="Search for Result" />
                                    <i className="las la-search search-icon"></i>
                                </div>
                           </div>
                        </Col>

                        <div className="col-sm-auto ms-auto">
                            <Dropdown className="d-flex gap-2">
                                <button type="button" className="btn btn-soft-primary fs-14"><i className="las la-filter fs-16 align-middle me-2"></i>Filter</button>
                                <Dropdown.Toggle as="button" id="dropdownMenuLink1" className="btn btn-soft-info btn-icon fs-14 arrow-none"><i className="las la-ellipsis-v fs-18"></i></Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Print</Dropdown.Item>
                                    <Dropdown.Item>Export to Excel</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Row>

                    <Row>
                        <Col xl={12}>
                            <Card>
                                <Card.Body>
                                    <TableContainer
                                        isPagination={true}
                                        columns={columns}
                                        data={salesReport || []}
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

export default SalesReport
