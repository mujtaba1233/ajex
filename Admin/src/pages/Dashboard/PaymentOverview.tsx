import React from 'react'
import { Card, Col, Dropdown, Row } from 'react-bootstrap'
import { PaymentOverviewData } from './PaymentOverviewData'

const PaymentOverview = () => {
  return (
    <React.Fragment>
        <Col xl={12}>
            <Card>
                <Card.Header className="border-0 align-items-center d-flex pb-2">
                    <h4 className="card-title mb-0 flex-grow-1">Payment Overview</h4>
                    <div>
                        {/* <Dropdown>
                            <Dropdown.Toggle as="a" className="text-reset arrow-none">
                                <span className="fw-semibold text-uppercase fs-14">Sort By: </span> <span className="text-muted">Monthly<i className="las la-angle-down fs-12 ms-2"></i></span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuYear">
                                <Dropdown.Item>Monthly</Dropdown.Item>
                                <Dropdown.Item>Yearly</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> */}
                    </div>
                </Card.Header>
                <Card.Body className="pt-0">
                    <PaymentOverviewData dataColors='["--in-primary", "--in-light"]' />
                    <Row className="mt-3 text-center">
                        <div className="col-6 border-end">
                            <div className="my-1">
                                <p className="text-muted text-truncate mb-2">Received Amount</p>
                                <h4 className="mt-2 mb-0 fs-20">$45,070.00</h4>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="my-1">
                                <p className="text-muted text-truncate mb-2">Due Amount</p>
                                <h4 className="mt-2 mb-0 fs-20">$32,400.00</h4>
                            </div>
                        </div>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    </React.Fragment>
  )
}

export default PaymentOverview
