import React from 'react';
import { Card, Col, Dropdown, Row, Button, ButtonGroup } from 'react-bootstrap';

const DropdownOptions = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Dropdown Options</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">Use <code>data-bs-offset</code> or
                                <code>data-bs-reference</code> to change the position of the dropdown.
                            </p>
                            <div className="d-flex flex-wrap gap-3">
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary">
                                        Offset
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className='dropdown-responsive'>
                                        <Dropdown.Item href="#" active>Action</Dropdown.Item>
                                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown>
                                    <Dropdown as={ButtonGroup}>
                                        <Button variant="secondary">Reference</Button>

                                        <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Dropdown>
                            </div>
                        </Card.Body>
                        
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default DropdownOptions;