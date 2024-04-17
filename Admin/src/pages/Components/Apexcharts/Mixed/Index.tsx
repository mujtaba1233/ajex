import BreadCrumb from '../../../../Common/BreadCrumb'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Line from './Line'
import YAxis from './YAxis'
import Area from './Area'
import LineColumnArea from './LineColumnArea'

const MixedChart = () => {
    document.title = "Apex Mixed Charts | Ajex - Admin & Dashboard Template"
    return (
        <React.Fragment>
            <div className="page-content">
            <Container fluid>
                <BreadCrumb pageTitle="Apexcharts" title="Mixed Charts" />
                <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Line & Column Charts</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Line dataColors='["--in-primary", "--in-success"]'/>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Multiple Y-Axis Charts</h4>
                                </Card.Header>
                                <Card.Body>
                                    <YAxis dataColors='["--in-primary", "--in-info", "--in-success"]'/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Line & Area Charts</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Area dataColors='["--in-primary", "--in-success"]'/>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Line, Column & Area Charts</h4>
                                </Card.Header>
                                <Card.Body>
                                    <LineColumnArea dataColors='["--in-primary", "--in-success", "--in-danger"]'/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
            </Container>
            </div>
        </React.Fragment>
    )
}

export default MixedChart