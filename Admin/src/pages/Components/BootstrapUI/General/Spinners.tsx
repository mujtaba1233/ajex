import React from 'react'
import { Card, Col, Row, Spinner } from 'react-bootstrap'

const Spinners = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Spinners</h4>
                        </Card.Header>

                        <Card.Body>
                            <div>
                                <Row>
                                    <Col lg={6}>
                                        <div>
                                            <h5 className="fs-md">Border spinner</h5>
                                            <p className="text-muted">Use <code>spinner-border</code> class for a lightweight loading indicator.</p>
                                            <div className="d-flex flex-wrap gap-3 mb-2">
                                                <Spinner animation='border' variant="primary" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </Spinner>
                                                <Spinner animation='border' variant="secondary" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </Spinner>
                                                <Spinner animation='border' variant="success" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </Spinner>
                                                <Spinner animation='border' variant="info" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </Spinner>
                                                <Spinner animation='border' variant="warning" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </Spinner>
                                                <Spinner animation='border' variant="danger" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </Spinner>
                                                <Spinner animation='border' variant="dark" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </Spinner>
                                                <Spinner animation='border' variant="light" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </Spinner>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={6}>
                                        <div>
                                            <h5 className="fs-md">Growing spinner</h5>
                                            <p className="text-muted">Use <code>spinner-grow</code> class for a lightweight spinner with growing effect.</p>
                                            <div className="d-flex flex-wrap gap-3 mb-2">
                                                <Spinner animation='grow' variant="primary" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </Spinner>
                                                <Spinner animation='grow' variant="secondary" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </Spinner>
                                                <Spinner animation='grow' variant="success" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </Spinner>
                                                <Spinner animation='grow' variant="info" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </Spinner>
                                                <Spinner animation='grow' variant="warning" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </Spinner>
                                                <Spinner animation='grow' variant="danger" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </Spinner>
                                                <Spinner animation='grow' variant="dark" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </Spinner>
                                                <Spinner animation='grow' variant="light" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </Spinner>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Spinners