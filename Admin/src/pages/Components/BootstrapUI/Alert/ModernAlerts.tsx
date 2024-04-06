import React from 'react'
import { Alert, Button, Card, Col, Row } from 'react-bootstrap'

const ModernAlerts = () => {
    const favouriteBtn = (ele: any) => {
        ele.closest("div").remove();
    };
  return (
    <React.Fragment>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Modern Alerts</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use the <code>alert-modern </code> class to set an alert modern.</p>

                                    <Row>
                                        <Col xl={6}>
                                            <h6>Primary Alert</h6>                                            
                                            <Alert variant="primary" className="alert-modern alert-dismissible fade show" role="alert">
                                                <i className="bi bi-info-circle icons"></i><strong>This is a information.</strong> You should do something about it.                                               
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Secondary Alert</h6>
                                            <Alert variant="secondary" className="alert-modern alert-dismissible fade show" role="alert">
                                                <i className="bi bi-command icons"></i><strong>Secondary</strong>
                                                - Left border alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>

                                            </Alert>

                                            <h6>Success Alert</h6>
                                            <Alert variant="success" className="alert-modern alert-dismissible fade show" role="alert">
                                                <i className="bi bi-check2-all icons"></i> Yay! Everything worked!
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>

                                            </Alert>

                                            <h6>Danger Alert</h6>                                            
                                            <Alert variant="danger" className="alert-modern alert-dismissible fade show" role="alert">
                                                <i className="bi bi-exclamation-diamond icons"></i><strong>This is error.</strong> You should do something about it.
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>

                                            </Alert>
                                        </Col>

                                        <Col xl={6}>
                                            <h6>Warning Alert</h6>
                                            <Alert variant="warning" className="alert-modern alert-dismissible fade show" role="alert">
                                                <i className="bi bi-exclamation-triangle icons"></i><strong>This is warning</strong> You should do something about it.
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Info Alert</h6>
                                            <Alert variant="info" className="alert-modern alert-dismissible fade show" role="alert">
                                                <i className="ri-airplay-line icons"></i><strong>Info</strong>
                                                - Left border alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Light Alert</h6>
                                            <Alert variant="light" className="alert-modern alert-dismissible fade show" role="alert">
                                                <i className="ri-mail-line icons"></i><strong>Light</strong>
                                                - Left border alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>

                                            <h6>Dark Alert</h6>
                                            <Alert variant="dark" className="alert-modern alert-dismissible fade show" role="alert">
                                                <i className="ri-refresh-line icons"></i><strong>Dark</strong>
                                                - Left border alert
                                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                                            </Alert>
                                        </Col>
                                    </Row>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
    </React.Fragment>
  )
}

export default ModernAlerts
