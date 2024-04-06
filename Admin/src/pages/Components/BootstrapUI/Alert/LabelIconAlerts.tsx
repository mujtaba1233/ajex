import React from 'react';
import { Alert, Card, Col, Row, Button } from 'react-bootstrap';

const LabelIconAlerts = () => {

    const favouriteBtn = (ele: any) => {
        ele.closest("div").remove();
    };

    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h4 className="card-title mb-0">Label Icon Alerts</h4>
                </Card.Header>
                <Card.Body>
                    <p className="text-muted">Use the <code>alert-label-icon</code> class to set an alert with a label icon.</p>
                    <Row>
                        <Col xl={6}>
                            <h6>Primary Alert</h6>
                            <Alert variant="primary" className="alert-dismissible bg-primary alert-label-icon fade show text-white">
                                <i className="ri-user-smile-line label-icon"></i><strong>Primary</strong> -
                                Label icon alert
                                <Button type="button" className="btn-close-white btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Secondary Alert</h6>
                            <Alert variant="secondary" className="alert-dismissible bg-secondary alert-label-icon fade show text-white">
                                <i className="ri-check-double-line label-icon"></i><strong>Secondary</strong>
                                - Label icon alert
                                <Button type="button" className="btn-close-white btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Success Alert</h6>
                            <Alert variant="success" className="alert-dismissible bg-success alert-label-icon fade show text-white">
                                <i className="ri-notification-off-line label-icon"></i><strong>Success</strong>
                                - Label icon alert
                                <Button type="button" className="btn-close-white btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Danger Alert</h6>
                            <Alert variant="danger" className="alert-dismissible bg-danger alert-label-icon fade show mb-xl-0 text-white">
                                <i className="ri-error-warning-line label-icon"></i><strong>Danger</strong>
                                - Label
                                icon alert
                                <Button type="button" className="btn-close-white btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>
                        </Col>

                        <Col xl={6}>
                            <h6>Warning Alert</h6>
                            <Alert variant="warning" className="alert-dismissible bg-warning alert-label-icon fade show text-white">
                                <i className="ri-alert-line label-icon"></i><strong>warning</strong> - Label
                                icon alert
                                <Button type="button" className="btn-close-white btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Info Alert</h6>
                            <Alert variant="info" className="alert-dismissible bg-info alert-label-icon fade show text-white">
                                <i className="ri-airplay-line label-icon"></i><strong>Info</strong> - Label
                                icon alert
                                <Button type="button" className="btn-close-white btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Light Alert</h6>
                            <Alert variant="light" className="alert-dismissible bg-light alert-label-icon fade show text-dark">
                                <i className="ri-mail-line label-icon"></i><strong>Light</strong> -
                                Label icon alert
                                <Button type="button" className="btn-close-white btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Dark Alert</h6>
                            <Alert variant="dark" className="alert-dismissible bg-dark alert-label-icon fade show mb-0 text-white">
                                <i className="ri-refresh-line label-icon"></i><strong>Dark</strong> -
                                Label icon alert
                                <Button type="button" className="btn-close-white btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>
                        </Col>
                    </Row>
                </Card.Body>                
            </Card>
        </React.Fragment>
    )
}

export default LabelIconAlerts;