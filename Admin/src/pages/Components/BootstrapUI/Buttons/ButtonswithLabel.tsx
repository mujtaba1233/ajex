import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ButtonswithLabel = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Buttons with Label</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>btn-label </code>class to create a button with the label.</p>
                            <Row>
                                <Col lg={4}>
                                    <div className="d-flex flex-wrap gap-2 mb-3 mb-lg-0">
                                        <Link to="#" className="btn btn-primary btn-label">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <i className="ri-user-smile-line label-icon align-middle fs-lg me-2"></i>
                                                </div>
                                                <div className="flex-grow-1 ps-4">
                                                    Primary
                                                </div>
                                            </div>
                                        </Link>
                                        <Button variant='success' className="btn-label">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <i className="ri-user-smile-line label-icon align-middle fs-lg me-2"></i>
                                                </div>
                                                <div className="flex-grow-1 ps-4">
                                                    Success
                                                </div>
                                            </div>
                                        </Button>
                                        <Button variant='warning' className="btn-label">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <i className="ri-user-smile-line label-icon align-middle fs-lg me-2"></i>
                                                </div>
                                                <div className="flex-grow-1 ps-4">
                                                    Warning
                                                </div>
                                            </div>
                                        </Button>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="d-flex flex-wrap gap-2 mb-3 mb-lg-0">
                                        <Button variant='primary' className="btn-label rounded-pill">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <i className="ri-user-smile-line label-icon align-middle fs-lg me-2"></i>
                                                </div>
                                                <div className="flex-grow-1 ps-4">
                                                    Primary
                                                </div>
                                            </div>
                                        </Button>
                                        <Button variant='success' className="btn-label rounded-pill">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <i className="ri-user-smile-line label-icon align-middle fs-lg me-2"></i>
                                                </div>
                                                <div className="flex-grow-1 ps-4">
                                                    Success
                                                </div>
                                            </div>
                                        </Button>
                                        <Button variant='warning' className="btn-label rounded-pill">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0">
                                                    <i className="ri-user-smile-line label-icon align-middle fs-lg me-2"></i>
                                                </div>
                                                <div className="flex-grow-1 ps-4">
                                                    Warning
                                                </div>
                                            </div>
                                        </Button>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="d-flex flex-wrap gap-2">
                                        <Button variant='primary' className="btn-label right"><i className="ri-user-smile-line label-icon align-middle fs-lg ms-2"></i> Primary</Button>
                                        <Button variant='success' className="btn-label right rounded-pill"><i className="ri-check-double-line label-icon align-middle rounded-pill fs-lg ms-2"></i> Success</Button>
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

export default ButtonswithLabel;