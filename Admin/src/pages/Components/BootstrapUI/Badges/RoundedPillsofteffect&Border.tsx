import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const RoundedPillsofteffect = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Rounded Pill Badges with soft effect</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use the <code>rounded-pill badge-subtle-</code> class with the below-mentioned variation to create a badge more rounded with a soft background.</p>
                            <div className="d-flex flex-wrap gap-2">
                                <span className="badge rounded-pill bg-primary-subtle text-primary">Primary</span>
                                <span className="badge rounded-pill bg-secondary-subtle text-secondary">Secondary</span>
                                <span className="badge rounded-pill bg-success-subtle text-success">Success</span>
                                <span className="badge rounded-pill bg-info-subtle text-info">Info</span>
                                <span className="badge rounded-pill bg-warning-subtle text-warning">Warning</span>
                                <span className="badge rounded-pill bg-danger-subtle text-danger">Danger</span>
                                <span className="badge rounded-pill bg-dark-subtle text-dark">Dark</span>
                                <span className="badge rounded-pill bg-light-subtle text-body">Light</span>
                            </div>
                        </Card.Body>
                        
                    </Card>
                </Col>
                <Col xxl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Soft Border Badges</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">
                                Use the <code>badge-border</code> and <code>badge-soft-</code> with below
                                mentioned modifier classes to make badges with border & soft backgorund.
                            </p>
                            <div className="d-flex flex-wrap gap-2">
                                <span className="badge bg-primary-subtle text-primary badge-border">Primary</span>
                                <span className="badge bg-secondary-subtle text-secondary badge-border">Secondary</span>
                                <span className="badge bg-success-subtle text-success badge-border">Success</span>
                                <span className="badge bg-danger-subtle text-danger badge-border">Danger</span>
                                <span className="badge bg-warning-subtle text-warning badge-border">Warning</span>
                                <span className="badge bg-info-subtle text-info badge-border">Info</span>
                                <span className="badge bg-dark-subtle text-dark badge-border">Dark</span>
                                <span className="badge bg-light-subtle text-body badge-border">Light</span>
                            </div>
                        </Card.Body>                        
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default RoundedPillsofteffect