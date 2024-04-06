import React from 'react'
import { Button, ButtonGroup, Card, Col, Row } from 'react-bootstrap';

const GroupIconButtons = () => {
    return (
        <React.Fragment>
            <Row>
                {/* Group */}
                <Col lg={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Buttons Group</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use the <code>btn-group </code> className in the parent className to wrap a series of buttons.</p>
                            <Row>
                                <Col sm={6}>
                                    <ButtonGroup role="group" aria-label="Basic example">
                                        <Button variant='primary'>Left</Button>
                                        <Button variant='primary'>Middle</Button>
                                        <Button variant='primary'>Right</Button>
                                    </ButtonGroup>
                                </Col>
                                <Col sm={6}>
                                    <ButtonGroup className=" mt-4 mt-sm-0" role="group" aria-label="Basic example">
                                        <Button variant='light' className="btn-icon"><i className="ri-align-right"></i></Button>
                                        <Button variant='light' className="btn-icon"><i className="ri-align-center"></i></Button>
                                        <Button variant='light' className="btn-icon"><i className="ri-align-left"></i></Button>
                                    </ButtonGroup>
                                </Col>
                            </Row>
                        </Card.Body>
                        
                    </Card>
                </Col>
                {/* Icon */}
                <Col lg={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Icon Buttons</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">Use <code>btn-icon</code> className to wrap icon in button</p>
                            <Row>
                                <Col sm={6}>
                                    <div className="hstack gap-2 flex-wrap">
                                        <Button variant='primary'><i className="ri-map-pin-line"></i></Button>
                                        <Button variant='danger'><i className="ri-delete-bin-5-line"></i></Button>
                                        <Button variant='success'><i className="ri-check-double-line"></i></Button>
                                        <Button variant='light'><i className="ri-brush-2-fill"></i></Button>
                                    </div>
                                </Col>
                                <Col sm={6} className="hstack gap-2 mt-4 mt-sm-0 flex-wrap">
                                    <Button variant='outline-primary'><i className="ri-24-hours-fill"></i></Button>
                                    <Button variant='outline-danger'><i className="ri-customer-service-2-line"></i></Button>
                                    <Button variant='outline-success'><i className="ri-mail-send-line"></i></Button>
                                    <Button variant='outline-warning'><i className="ri-menu-2-line"></i></Button>
                                </Col>
                            </Row>
                        </Card.Body>
                        
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default GroupIconButtons;