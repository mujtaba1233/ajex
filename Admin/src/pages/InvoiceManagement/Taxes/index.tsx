import React, { useMemo, useState } from 'react'
import { Card, Col, Container, Dropdown, Form, Row, Modal, Button} from 'react-bootstrap'
import BreadCrumb from '../../../Common/BreadCrumb';
import { taxesList } from '../../../Common/data/index';
import TableContainer from '../../../Common/Tabledata/TableContainer';

const Taxes = () => {
    document.title="Taxes | Ajex Admin & Dashboard Template";

    const [modal_standard, setmodal_standard] = useState<boolean>(false);
    function tog_standard() {
        setmodal_standard(!modal_standard);
    }

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
            Header: "TAX NAME",
            accessor: "taxName",
            Filter: false,
            isSortable: true
          },
          {
            Header: "COUNTRY",
            accessor: "country",
            Filter: false,
            isSortable: true
          },
          {
            Header: "REGION",
            accessor: "description",
            Filter: false,
            isSortable: true,
          },  
          {
            Header: "TAX RATE(%)",
            accessor: "taxRate",
            Filter: false,
            isSortable: true,
          },
          {
            Header: "STATUS",
            accessor: "status",
            Filter: false,
            style: {width: '16%'},
            isSortable: true,
            Cell: (cell: any) => {     
                return (              
                <span className={`badge bg-${cell.row.original.color}-subtle text-${cell.row.original.color} p-2`}>{cell.row.original.status}</span>
                )
            }
          },      
          {
            Header:"",
            accessor: "id",
            key: "id",
            Filter: false,
            isSortable: false,
            width:50,
            Cell: () => (             
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="switch1" />
                <label className="form-check-label" htmlFor="switch1"></label>
            </div>
            ),
          },          
             
          
        ], [])

  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <BreadCrumb pageTitle="Taxes" title="Taxes" />
                    <Row className="pb-4 gy-3">
                        <div className="col-sm-4">
                            <Button variant="primary" className="addtax-modal" onClick={() => tog_standard()}><i className="las la-plus me-1"></i> Add Taxes</Button>
                        </div>
                        <div className="col-sm-auto ms-auto">
                           <div className="d-flex gap-3">
                            <div className="search-box">
                                <Form.Control type="text" id="searchMemberList" placeholder="Search for Result" />
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
                        <Col xl="12">
                            <Card>
                                <Card.Body>
                                <TableContainer
                                    isPagination={true}
                                    columns={columns}
                                    data={taxesList || []}
                                    customPageSize={9}
                                    divClassName="table-card table-responsive"
                                    tableClass="table-hover table-nowrap align-middle mb-0"
                                    isBordered={false}
                                    PaginationClass="align-items-center mt-4 gy-3"
                                />
                                </Card.Body>
                            </Card>

                                                     
                                <Modal id="addtaxModal" show={modal_standard} onHide={() => { tog_standard(); }} tabIndex={-1} centered>                                    
                                        <div className="modal-content border-0">
                                            <Modal.Header className="p-4 pb-0">
                                                <h5 className="modal-title" id="createMemberLabel">Add Payment</h5>
                                                {/* <button type="button" className="btn-close" id="createMemberBtn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                                                <Button variant="light" className="btn-close" onClick={() => tog_standard()}></Button>

                                            </Modal.Header>
                                            <Modal.Body className="p-4">
                                                <Form>
                                                    <Row>
                                                        <Col lg={12}>
                                                            <div className="mb-3">
                                                                <Form.Label htmlFor="Name">Tax Name</Form.Label>
                                                                <Form.Control type="text" id="Name" placeholder="Enter Name" />
                                                            </div>

                                                            <Row>
                                                                <div className="col-6">
                                                                    <div className="mb-4">
                                                                        <Form.Label htmlFor="country" className="form-label">Country</Form.Label>
                                                                        <Form.Select>
                                                                            <option>Select Country</option>
                                                                            <option value="1">United States</option>
                                                                            <option value="2">Australia	</option>
                                                                            <option value="3">New Zealand</option>
                                                                            <option value="4">Italy</option>
                                                                        </Form.Select>
                                                                    </div>
                                                                </div>

                                                                <div className="col-6">
                                                                    <div className="mb-4">
                                                                        <Form.Label htmlFor="region">Region</Form.Label>
                                                                        <Form.Select>
                                                                            <option>Select Region</option>
                                                                            <option value="1">(any)</option>
                                                                        </Form.Select>
                                                                    </div>
                                                                </div>
                                                            </Row>

                                                            <div className="mb-3">
                                                                <Form.Label htmlFor="Name" className="form-label">Tax Rate</Form.Label>
                                                                <Form.Control type="text" id="Name" placeholder="Enter Text Rate" />
                                                            </div>

                                                            <div className="hstack gap-2 justify-content-end">
                                                                <Button variant="light" onClick={() => tog_standard()}>Close</Button>
                                                                <Button type="submit" className="btn btn-success" id="addNewMember">Add Taxes</Button>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </Modal.Body>
                                        </div>             
                                </Modal>
                        </Col>
                    </Row>
            </Container>
        </div>                        
    </React.Fragment>
  )
}

export default Taxes
