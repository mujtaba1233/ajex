import React from 'react'
import { Card, Col, Dropdown } from 'react-bootstrap'
import { StructureData } from './StructureData'

const Structure = () => {
  return (
    <React.Fragment>
        <Col xl={4}>
                            <Card>
                                <Card.Body>
                                    <div className="d-flex align-items-start">
                                        <div className="flex-grow-1 overflow-hidden">
                                            <h5 className="card-title mb-2 text-truncate">Structure</h5>
                                        </div>
                                        <div className="flex-shrink-0 ms-2">
                                            <Dropdown>
                                            <Dropdown.Toggle as="a" className="text-reset arrow-none">
                                                    <span className="fw-semibold text-uppercase fs-14">Sort By:</span> <span
                                                        className="text-muted">Weekly<i className="las la-angle-down fs-12 ms-2"></i></span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu-end">
                                                    <Dropdown.Item>Yearly</Dropdown.Item>
                                                    <Dropdown.Item >Monthly</Dropdown.Item>
                                                    <Dropdown.Item >Weekly</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>

                                    <StructureData dataColors='["--in-primary", "--in-primary-rgb, 0.7", "--in-light"]' className="apex-charts"/>

                                    <div className="px-2">
                                        <div className="structure-list d-flex justify-content-between border-bottom">
                                            <p className="mb-0"><i className="las la-dot-circle fs-18 text-primary me-2"></i>Invoiced</p>
                                            <div>
                                                <span className="pe-2 pe-sm-5">$56,236</span>
                                                <span className="badge bg-primary"> + 0.2% </span>
                                            </div>
                                        </div>
                                        <div className="structure-list d-flex justify-content-between border-bottom">
                                            <p className="mb-0"><i className="las la-dot-circle fs-18 text-primary me-2"></i>Collected</p>
                                            <div>
                                                <span className="pe-2 pe-sm-5">$12,596</span>
                                                <span className="badge bg-primary"> - 0.7% </span>
                                            </div>
                                        </div>
                                        <div className="structure-list d-flex justify-content-between pb-0">
                                            <p className="mb-0"><i className="las la-dot-circle fs-18 text-primary me-2"></i>Outstanding</p>
                                            <div>
                                                <span className="pe-2 pe-sm-5">$1,568</span>
                                                <span className="badge bg-primary"> + 0.4% </span>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
            </Col>
    </React.Fragment>
  )
}

export default Structure
