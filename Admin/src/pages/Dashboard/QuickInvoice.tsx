import React from 'react'
import { Card, Col, Form, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PaymentOverview from './PaymentOverview'
import RecentTransaction from './RecentTransaction'

const QuickInvoice = () => {
  return (
    <React.Fragment>
                <Row>
                        <Col xl={5}>
                            <Card>
                                <Card.Header className="border-0 align-items-center d-flex">
                                    <h4 className="card-title mb-0 flex-grow-1">Quick Invoice</h4>
                                    <div>
                                        <button type="button" className="btn btn-soft-secondary btn-sm">
                                        <i className="las la-plus fs-18 align-middle"></i>
                                        </button>
                                     
                                    </div>
                                </Card.Header>

                                <Card.Body className="pt-0">
                                    <Form>
                                       <Row>
                                            <Col xl={6}>
                                                <div className="mb-3">
                                                    <label>Customer Name</label>
                                                    <input type="text" placeholder="Enter name" className="form-control" />
                                                </div>
                                            </Col>

                                            <Col xl={6}>
                                                <div className="mb-3">
                                                    <label>Customer Email</label>
                                                    <input type="text" placeholder="Enter email" className="form-control" />
                                                </div>
                                            </Col>

                                            <Col xl={12}>
                                                <div className="mb-3">
                                                    <label htmlFor="companyAddress">Customer Address</label>
                                                    <textarea className="form-control" id="companyAddress" rows={2} placeholder="Company Address" required></textarea>
                                                </div>
                                            </Col>
                                       </Row>

                                        <Table className="table-sm table-borderless table-nowrap align-middle mb-0">
                                            <tbody>
                                                <tr>
                                                    <td>Sub Total</td>
                                                    <td className="text-end">$699.96</td>
                                                </tr>
                                                <tr>
                                                    <td>Estimated Tax (12.5%)</td>
                                                    <td className="text-end">$44.99</td>
                                                </tr>
                                                <tr>
                                                    <td>Discount <small className="text-muted">(Ajex15)</small></td>
                                                    <td className="text-end">- $53.99</td>
                                                </tr>
                                                <tr>
                                                    <td>Shipping Charge</td>
                                                    <td className="text-end">$65.00</td>
                                                </tr>
                                                <tr className="border-top border-top-dashed fs-15">
                                                    <th scope="row">Total Amount</th>
                                                    <th className="text-end">$755.96</th>
                                                </tr>
                                            </tbody>
                                        </Table>

                                       <Row className="mt-2">
                                            <div className="col-6">
                                                <Link to="#" className="btn btn-light w-100">Add More Details</Link>
                                            </div>
                                            <div className="col-6">
                                                <Link to="#" className="btn btn-primary w-100">Send Money</Link>
                                            </div>
                                       </Row>

                                      
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>

                        
                           
                        
                        <RecentTransaction/>                    
                    </Row>
                    
    </React.Fragment>
  )
}

export default QuickInvoice
