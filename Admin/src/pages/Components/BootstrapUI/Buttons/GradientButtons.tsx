import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const GradientButtons = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Gradient Buttons</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>bg-gradient </code>class to create a gradient button.</p>
                            <div className="d-flex flex-wrap gap-2">
                                <Button className="btn-primary bg-gradient">Primary</Button>
                                <Button className="btn-secondary bg-gradient">Secondary</Button>
                                <Button className="btn-success bg-gradient">Success</Button>
                                <Button className="btn-info bg-gradient">Info</Button>
                                <Button className="btn-warning bg-gradient">Warning</Button>
                                <Button className="btn-danger bg-gradient">Danger</Button>
                                <Button className="btn-dark bg-gradient">Dark</Button>
                                <Button className="btn-light bg-gradient">Light</Button>
                            </div>
                        </Card.Body>
                        
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default GradientButtons;