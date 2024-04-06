import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { PaymentActivityData } from './PaymentActivitydata'
import Structure from './Structure'

const PaymentActivity = () => {
  return (
    <React.Fragment>
                    <Row>
                        <Col xl={8}>
                            <Card>
                                <Card.Header className="border-0 align-items-center d-flex">
                                    <h4 className="card-title mb-0 flex-grow-1">Payment Activity</h4>
                                    <div className="d-flex gap-1">
                                        <button type="button" className="btn btn-soft-info btn-sm">
                                            ALL
                                        </button>
                                        <button type="button" className="btn btn-soft-info btn-sm">
                                            1M
                                        </button>
                                        <button type="button" className="btn btn-soft-info btn-sm">
                                            6M
                                        </button>
                                        <button type="button" className="btn btn-info btn-sm">
                                            1Y
                                        </button>
                                    </div>
                                </Card.Header>
                                <Card.Body className="py-1">
                                    <Row className="gy-2">
                                        <Col md={4}>
                                            <h4 className="fs-22 mb-0">$23,590.00</h4>
                                        </Col>
                                        <Col md={8}>
                                            <div className="d-flex main-chart justify-content-end">
                                                <div className="px-4 border-end">
                                                    <h4 className="text-primary fs-22 mb-0">$584k <span className="text-muted d-inline-block fs-17 align-middle ms-0 ms-sm-2">Incomes</span></h4>
                                                </div>
                                                <div className="ps-4">
                                                    <h4 className="text-primary fs-22 mb-0">$324k <span className="text-muted d-inline-block fs-17 align-middle ms-0 ms-sm-2">Expenses</span></h4>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>

                                    <PaymentActivityData className="apex-charts" dataColors='["--in-primary", "--in-light"]'/>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Structure/>
                    </Row>
                    
    </React.Fragment>
  )
}

export default PaymentActivity
