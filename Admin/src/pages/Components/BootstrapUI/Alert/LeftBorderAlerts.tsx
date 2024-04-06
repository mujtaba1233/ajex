import React from 'react';
import { Alert, Card, Col, Row, Button } from 'react-bootstrap';

const LeftBorderAlerts = () => {

    const favouriteBtn = (ele: any) => {
        ele.closest("div").remove();
    };

    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h4 className="card-title mb-0">Left Border Alerts</h4>
                </Card.Header>
                <Card.Body>
                    <p className="text-muted">Use the <code>alert-border-left </code> class to set an alert with the left border & outline.</p>
                    <Row>
                        <Col xl={6}>
                            <h6>Primary Alert</h6>
                            <Alert variant="primary" className="alert-border-left alert-dismissible fade show">
                                <i className="ri-user-smile-line me-3 align-middle fs-lg"></i><strong>Primary</strong>
                                - Left border alert
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Secondary Alert</h6>
                            <Alert variant="secondary" className="alert-border-left alert-dismissible fade show">
                                <i className="ri-check-double-line me-3 align-middle fs-lg"></i><strong>Secondary</strong>
                                - Left border alert
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Success Alert</h6>
                            <Alert variant="success" className="alert-border-left alert-dismissible fade show">
                                <i className="ri-notification-off-line me-3 align-middle fs-lg"></i><strong>Success</strong>
                                - Left border alert
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Danger Alert</h6>
                            <Alert variant="danger" className="alert-border-left alert-dismissible fade show mb-xl-0">
                                <i className="ri-error-warning-line me-3 align-middle fs-lg"></i><strong>Danger</strong>
                                - Left border alert
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>
                        </Col>

                        <div className="col-xl-6">
                            <h6>Warning Alert</h6>
                            <Alert variant="warning" className="alert-border-left alert-dismissible fade show">
                                <i className="ri-alert-line me-3 align-middle fs-lg"></i><strong>Warning</strong>
                                - Left border alert
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Info Alert</h6>
                            <Alert variant="info" className="alert-border-left alert-dismissible fade show">
                                <i className="ri-airplay-line me-3 align-middle fs-lg"></i><strong>Info</strong>
                                - Left border alert
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Light Alert</h6>
                            <Alert variant="light" className="alert-border-left alert-dismissible fade show">
                                <i className="ri-mail-line me-3 align-middle fs-lg"></i><strong>Light</strong>
                                - Left border alert
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>

                            <h6>Dark Alert</h6>
                            <Alert variant="dark" className="alert-border-left alert-dismissible fade show mb-0">
                                <i className="ri-refresh-line me-3  align-middle fs-lg"></i><strong>Dark</strong>
                                - Left border alert
                                <Button type="button" className="btn-close" onClick={(e) => favouriteBtn(e.target)}></Button>
                            </Alert>
                        </div>
                    </Row>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default LeftBorderAlerts;