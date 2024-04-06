import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const AvatarWithContent = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Avatar With Content</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>avatar-xxs, avatar-xs,avatar-sm,avatar-md,avatar-lg,avatar-xl</code> class to set different avatar content.</p>
                            <Row className="g-3">
                                <Col xxl={2} md={4} className="col-6">
                                    <div className="avatar-xxs mt-3">
                                        <div className="avatar-title rounded bg-primary-subtle text-primary fs-3xs">
                                            XXS
                                        </div>
                                    </div>
                                </Col>
                                <Col xxl={2} md={4} className="col-6">
                                    <div className="avatar-xs mt-3">
                                        <div className="avatar-title rounded bg-secondary-subtle text-secondary">
                                            XS
                                        </div>
                                    </div>
                                </Col>
                                <Col xxl={2} md={4} className="col-6">
                                    <div className="avatar-sm mt-3">
                                        <div className="avatar-title rounded bg-success-subtle text-success fs-md">
                                            SM
                                        </div>
                                    </div>
                                </Col>
                                <Col xxl={2} md={4} className="col-6">
                                    <div className="avatar-md mt-3">
                                        <div className="avatar-title rounded bg-info-subtle text-info fs-lg">
                                            MD
                                        </div>
                                    </div>
                                </Col>
                                <Col xxl={2} md={4} className="col-6">
                                    <div className="avatar-lg mt-3">
                                        <div className="avatar-title rounded bg-warning-subtle text-warning fs-2xl">
                                            LG
                                        </div>
                                    </div>
                                </Col>
                                <Col xxl={2} md={4} className="col-6">
                                    <div className="avatar-xl mt-3">
                                        <div className="avatar-title rounded bg-danger-subtle text-danger fs-4xl">
                                            XL
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>                        
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default AvatarWithContent