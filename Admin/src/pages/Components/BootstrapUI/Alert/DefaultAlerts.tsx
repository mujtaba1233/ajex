import React from 'react';
import { Alert, Card, Col, Row } from 'react-bootstrap';
import BreadCrumb from '../../../../Common/BreadCrumb';

const DefaultAlerts = () => {
  document.title=" Alerts | Invoika -Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page">
          <BreadCrumb title="Alerts" pageTitle="Bootstrap Ui" />
          <Row>
            <Col lg={12}>
              <Card>
                <Card.Header>
                  <h4 className="card-title mb-0">Default Alerts</h4>
                </Card.Header>
                <Card.Body>
                  <p className="text-muted">Use the <code>alert </code>class to show a default alert.</p>
                  <Row>
                    <Col xl={6}>
                      <h6>Primary Alert</h6>
                      <Alert variant="primary">
                        <strong> Hi! </strong> A simple <b>Primary alert</b> —check it out!
                      </Alert>

                      <h6>Secondary Alert</h6>
                      <Alert variant="secondary">
                        <strong> How are you! </strong> A simple <b>secondary alert</b> —check it out!
                      </Alert>

                      <h6>Success Alert</h6>
                      <Alert variant="success">
                        <strong> Yey! Everything worked! </strong> A simple <b>success alert</b> —check it out!
                      </Alert>

                      <h6>Danger Alert</h6>
                      <Alert variant="danger" className="mb-xl-0">
                        <strong> Something is very wrong! </strong> A simple <b>danger alert</b> —check it out!
                      </Alert>
                    </Col>

                    <Col xl={6}>
                      <h6>Warning Alert</h6>
                      <Alert variant="warning">
                        <strong> Uh oh, something went wrong </strong> A simple <b>warning alert</b> —check it out!
                      </Alert>

                      <h6>Info Alert</h6>
                      <Alert variant="info">
                        <strong>Don't forget' it !</strong> A simple <b>info alert</b> —check it out!
                      </Alert>

                      <h6>Light Alert</h6>
                      <Alert variant="light">
                        <strong>Mind Your Step!</strong> A simple <b>light alert</b> —check it out!
                      </Alert>

                      <h6>Dark Alert</h6>
                      <Alert variant="dark" className="mb-0">
                        <strong>Did you know?</strong> A simple <b>dark alert</b> —check it out!
                      </Alert>
                    </Col>
                  </Row>
                </Card.Body>                
              </Card>
            </Col>
          </Row>
      </div>
    </React.Fragment>
  )
}

export default DefaultAlerts;