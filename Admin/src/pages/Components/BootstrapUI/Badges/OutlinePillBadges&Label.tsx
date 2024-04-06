import React from 'react';
import { Badge, Card, Col, Row } from 'react-bootstrap';

const OutlinePillBadges = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Outline Pill Badges</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">
                                Use the <code>rounded-pill badge-outline-</code> class with the below-mentioned
                                variation to create a outline Pill badge.
                            </p>
                            <div className="d-flex flex-wrap gap-2">
                                <span className="badge bg-body-secondary rounded-pill border border-primary text-primary">Primary</span>
                                <span className="badge bg-body-secondary rounded-pill border border-secondary text-secondary">Secondary</span>
                                <span className="badge bg-body-secondary rounded-pill border border-success text-success">Success</span>
                                <span className="badge bg-body-secondary rounded-pill border border-info text-info">Info</span>
                                <span className="badge bg-body-secondary rounded-pill border border-warning text-warning">Warning</span>
                                <span className="badge bg-body-secondary rounded-pill border border-danger text-danger">Danger</span>
                                <span className="badge bg-body-secondary rounded-pill border border-dark text-dark">Dark</span>
                                <span className="badge bg-body-secondary rounded-pill border border-light text-light text-body">Light</span>
                            </div>
                        </Card.Body>                        
                    </Card>
                </Col>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Label Badges</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">
                                Use the <code>badge-label</code> class to create a badge with the label.
                            </p>
                            <div className="d-flex flex-wrap gap-2">
                                <Badge bg='primary' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Primary</Badge>
                                <Badge bg='secondary' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Secondary</Badge>
                                <Badge bg='success' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Success</Badge>
                                <Badge bg='danger' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Danger</Badge>
                                <Badge bg='warning' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Warning</Badge>
                                <Badge bg='info' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Info</Badge>
                                <Badge bg='dark' className="badge-label"> <i className="mdi mdi-circle-medium"></i> Dark</Badge>
                                <Badge bg='light' className="badge-label text-dark"> <i className="mdi mdi-circle-medium"></i> Light</Badge>
                            </div>
                        </Card.Body>
                        
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default OutlinePillBadges;