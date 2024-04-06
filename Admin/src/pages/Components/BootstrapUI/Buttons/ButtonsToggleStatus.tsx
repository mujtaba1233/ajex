import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const ButtonsToggleStatus = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Buttons Toggle Status</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">
                                Use <code>data-bs-toggle="button"</code> to toggle a button’s active state.
                            </p>
                            <div className="d-flex flex-wrap gap-2">
                                <Button type="button" className="btn btn-primary" data-bs-toggle="button" aria-pressed="false">
                                    Single toggle
                                </Button>
                            </div>
                        </Card.Body>
                        
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default ButtonsToggleStatus