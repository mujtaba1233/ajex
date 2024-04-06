import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';


const SizeStyling = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Sizes</h4>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xl={4} lg={6}>
                                    <div>
                                        <h5 className="fs-md">Large</h5>
                                        <p className="text-muted mb-4">Use <code>data-slider-size=&quot;lg&quot;</code> attribute to set large size rangeslider.</p>
                                        <div data-rangeslider data-slider-size="lg" data-slider-color="success">
                                            <Form.Range />
                                            </div>
                                    </div>
                                </Col>

                                <Col xl={4} lg={6}>
                                    <div className="mt-4 mt-lg-0">
                                        <h5 className="fs-md">Medium</h5>
                                        <p className="text-muted mb-4">Use <code>data-slider-size=&quot;md&quot;</code> attribute to set medium size data-rangeslider.</p>
                                        <div data-rangeslider data-slider-size="md"><Form.Range /></div>
                                    </div>
                                </Col>

                                <Col xl={4} lg={6}>
                                    <div className="mt-4 mt-xl-0">
                                        <h5 className="fs-md">Small</h5>
                                        <p className="text-muted mb-4">Use <code>data-slider-size=&quot;sm&quot;</code> attribute to set small size rangeslider.</p>
                                        <div data-rangeslider data-slider-size="sm"><Form.Range /></div>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Styling</h4>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col lg={6}>
                                    <div>
                                        <h5 className="fs-md">Line Rangeslider</h5>
                                        <p className="text-muted mb-4">Use <code>data-slider-style=&quot;line&quot;</code> attribute to set line rangeslider.</p>
                                        <div data-rangeslider data-slider-style="line"><Form.Range /></div>
                                    </div>
                                </Col>

                                <Col lg={6}>
                                    <div className="mt-4 mt-lg-0">
                                        <h5 className="fs-md">Circle Bordered Rangeslider</h5>
                                        <p className="text-muted mb-4">Use <code>data-slider-style=&quot;border&quot;</code> attribute to set circle bordered rangeslider.</p>
                                        <div data-rangeslider data-slider-style="border"><Form.Range /></div>
                                    </div>
                                </Col>

                                <Row className="mt-4">
                                    <Col lg={6}>
                                        <div className="mt-4">
                                            <h5 className="fs-md">Square Rangeslider</h5>
                                            <p className="text-muted mb-4">Use <code>data-slider-style=&quot;square&quot;</code> attribute to set square shape rangeslider.</p>
                                            <div data-rangeslider data-slider-style="square"><Form.Range /></div>
                                        </div>
                                    </Col>
                                </Row>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SizeStyling