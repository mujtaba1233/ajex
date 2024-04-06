import React, { useState } from 'react'
import { Row, Card,Alert, Col } from 'react-bootstrap'

const LiveAlert = () => {
    const [show, setShow] = useState(false);
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                <Card>
                    <Card.Header>
                        <h4 className="card-title mb-0">Live Alert Example</h4>
                    </Card.Header>
                    <Card.Body>
                        <p className="text-muted">Click the Show live alert button to show an alert on button click.</p>
                        <div id="liveAlertPlaceholder"></div>
                        <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible>
                            Nice, you triggered this alert message!
                        </Alert>
                        <button type="button" className="btn btn-primary" id="liveAlertBtn" onClick={() => setShow(true)}>Show live alert</button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default LiveAlert;