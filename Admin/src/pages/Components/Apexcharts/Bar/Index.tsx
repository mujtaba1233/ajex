import BreadCrumb from '../../../../Common/BreadCrumb'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Basicchart from './Basic'
import CustomDataLabel from './CustomDataLabel'
import Stacked from './Stacked'
import Stacked2 from './Stacked2'
import Negative from './Negative'
import Markers from './Markers'
import Reversed from './Reversed'
import Patterned from './Patterned'
import Groupes from './Groupes'
import BarwithImages from './BarWithImages'

const BarChart = () => {
    document.title = "Apex Bar Charts | Invoika - Admin & Dashboard Template"
    return (
        <React.Fragment>
            <div className="page-content">
            <Container fluid>
                <BreadCrumb pageTitle="Apexcharts" title="Bar Charts" />
                <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Basic Bar Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Basicchart dataColors='["--in-success"]'/>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Custom DataLabels Bar</h4>
                                </Card.Header>
                                <Card.Body>
                                    <CustomDataLabel dataColors='["--in-primary", "--in-secondary", "--in-success", "--in-info", "--in-warning", "--in-danger", "--in-dark", "--in-primary", "--in-success", "--in-secondary"]'/>
                                </Card.Body>
                            </Card>
                        </Col>
                        </Row>
                        <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Stacked Bar Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Stacked dataColors='["--in-primary", "--in-success", "--in-warning", "--in-danger", "--in-info"]'/>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Stacked Bars 100</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Stacked2 dataColors='["--in-primary", "--in-success", "--in-warning", "--in-danger", "--in-info"]'/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Bar with Negative Values</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Negative dataColors='["--in-primary", "--in-success"]'/>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Bar with Markers</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Markers dataColors='["--in-success", "--in-primary"]'/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Reversed Bar Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Reversed dataColors='["--in-info"]'/>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Patterned Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Patterned dataColors='["--in-primary", "--in-success", "--in-warning", "--in-danger"]'/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Grouped Bar Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Groupes dataColors='["--in-primary", "--in-success"]'/>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Bar with Images</h4>
                                </Card.Header>
                                <Card.Body>
                                    <BarwithImages />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
            </Container>
            </div>
        </React.Fragment>
    )
}

export default BarChart