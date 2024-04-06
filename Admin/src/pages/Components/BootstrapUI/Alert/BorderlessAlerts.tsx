import React from 'react';
import { Alert, Card, Col, Row } from 'react-bootstrap';

const BorderlessAlerts = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h4 className="card-title mb-0">Borderless Alerts</h4>
                </Card.Header>
                <Card.Body>
                    <p className="text-muted">Use the <code>alert-borderless</code> class to set alert without border.</p>
                    <Row>
                        <Col xl={6}>
                            <h6>Primary Alert</h6>
                            <Alert variant="primary" className="border-0" >
                                <strong> Hi! </strong> A simple <b>Primary alert</b> —check it out!
                            </Alert>

                            <h6>Secondary Alert</h6>
                            <Alert variant="secondary" className="border-0">
                                <strong> How are you! </strong> A simple <b>secondary alert</b> —check it out!
                            </Alert>

                            <h6>Success Alert</h6>
                            <Alert variant="success" className="border-0">
                                <strong> How are you! </strong> A simple <b>success alert</b> —check it out!
                            </Alert>

                            <h6>Danger Alert</h6>
                            <Alert variant="danger" className="border-0 mb-xl-0">
                                <strong> Something is very wrong! </strong> A simple danger alert—check it out!
                            </Alert>
                        </Col>

                        <Col xl={6}>
                            <h6>Warning Alert</h6>
                            <Alert variant="warning" className="border-0">
                                <strong> Uh oh, something went wrong </strong> A simple <b>warning alert</b> —check it out!
                            </Alert>

                            <h6>Info Alert</h6>
                            <Alert variant="info" className="border-0">
                                <strong>Don't forget' it !</strong> A simple <b>info alert</b> —check it out!
                            </Alert>

                            <h6>Light Alert</h6>
                            <Alert variant="light" className="border-0 bg-light">
                                <strong>Mind Your Step!</strong> A simple <b>light alert</b> —check it out!
                            </Alert>

                            <h6>Dark Alert</h6>
                            <Alert variant="dark" className="border-0 mb-0">
                                <strong>Did you know?</strong> A simple <b>dark alert</b> —check it out!
                            </Alert>
                        </Col>
                    </Row>
                </Card.Body>                
            </Card>
        </React.Fragment>
    )
}

export default BorderlessAlerts