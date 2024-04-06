import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const OutlineButtons = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Outline Buttons</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>btn-outline-</code> class with the below-mentioned variation to create a button with the outline.</p>
                            <div className="d-flex flex-wrap gap-2">
                                <Button variant="outline-primary">Primary</Button>
                                <Button variant="outline-secondary">Secondary</Button>
                                <Button variant="outline-success">Success</Button>
                                <Button variant="outline-info">Info</Button>
                                <Button variant="outline-warning">Warning</Button>
                                <Button variant="outline-danger">Danger</Button>
                                <Button variant="outline-dark">Dark</Button>
                                <Button variant="outline-light text-body">Light</Button>
                            </div>
                        </Card.Body>
                        
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default OutlineButtons;