import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const SoftButtons = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Subtle Buttons</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>btn-subtle-</code> class with the below-mentioned variation to create a button with the soft background.</p>
                            <div className="d-flex flex-wrap gap-2">
                                <Button variant="subtle-primary">Primary</Button>
                                <Button variant="subtle-secondary">Secondary</Button>
                                <Button variant="subtle-success">Success</Button>
                                <Button variant="subtle-info">Info</Button>
                                <Button variant="subtle-warning">Warning</Button>
                                <Button variant="subtle-danger">Danger</Button>
                                <Button variant="subtle-dark">Dark</Button>
                            </div>
                        </Card.Body>
                        
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default SoftButtons;