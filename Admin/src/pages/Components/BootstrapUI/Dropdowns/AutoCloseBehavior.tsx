import React from 'react';
import { Card, Col, Dropdown, Row } from 'react-bootstrap';

const AutoCloseBehavior = () => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Auto Close Behavior</h4>
                        </Card.Header>

                        <Card.Body>
                            <p className="text-muted">By default, the dropdown menu is closed when clicking inside or outside the dropdown menu. You can use the <code>autoClose</code> option to change this behavior of the dropdown.</p>
                            <div className="d-flex flex-wrap gap-3">
                                <Dropdown>
                                    <Dropdown.Toggle variant="light">
                                        Default dropdown
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
                                        <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                        <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown autoClose='inside'>
                                    <Dropdown.Toggle variant="light">
                                        Clickable outside
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
                                        <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                        <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown autoClose='outside'>
                                    <Dropdown.Toggle variant="light">
                                        Clickable inside
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
                                        <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                        <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown autoClose={false}>
                                    <Dropdown.Toggle variant="light">
                                        Manual close
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#" active>Menu item</Dropdown.Item>
                                        <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                        <Dropdown.Item href="#">Menu item</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Body>                        
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default AutoCloseBehavior