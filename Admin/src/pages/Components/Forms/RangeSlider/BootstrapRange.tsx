import React from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'

const BootstrapRange = () => {
  return (
    <React.Fragment>
         <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Header className="align-items-center d-flex">
                                <h4 className="card-title mb-0 flex-grow-1">Bootstrap Range</h4>
                            </Card.Header>

                            <Card.Body>
                                <div className="live-preview">
                                    <div>
                                        <div>
                                            <h5 className="fs-md">Default Range</h5>
                                            <p className="text-muted">Use <code>form-range</code> class to create a deafult range.</p>

                                            <Form.Range className="form-range" id="customRange1" />
                                        </div>

                                        <div className="mt-4">
                                            <h5 className="fs-md">Disabled</h5>
                                            <p className="text-muted">Use <code>disabled</code> attribute on an input to give it a grayed out appearance and remove pointer events.</p>

                                            <Form.Range className="form-range" id="disabledRange" disabled />
                                        </div>

                                        <div className="mt-4">
                                            <h5 className="fs-md">Min and Max</h5>
                                            <p className="text-muted">Use <code>min</code> and <code>max</code> attribute with specified range input respectively.</p>

                                            <Form.Range className="form-range" min="0" max="5" id="customRange2" />
                                        </div>

                                        <div className="mt-4">
                                            <h5 className="fs-md">Steps</h5>
                                            <p className="text-muted">By default, range inputs “snap” to integer values. To change this, you can specify a step value. In the example below, we double the number of steps by using <code>step=&quot;0.5&quot;</code> attribute.</p>

                                            <Form.Range className="form-range" min="0" max="5" step="0.5" id="customRange3" />
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
    </React.Fragment>
  )
}

export default BootstrapRange