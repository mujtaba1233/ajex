import BreadCrumb from '../../../../Common/BreadCrumb'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import SimpleRadar from './SimpleRadar'
import MultipleRadar from './MultipleRadar'
import PolygonRadar from './PolygonRadar'

const RadarChart = () => {
    document.title = "Apex Radar Charts | Ajex - Admin & Dashboard Template"
    return (
        <React.Fragment>
            <div className="page-content">
            <Container fluid>
                <BreadCrumb pageTitle="Apexcharts" title="Radar Charts" />
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Basic Radar Chart</h4>
                            </Card.Header>

                            <Card.Body>
                                <SimpleRadar dataColors='["--in-success"]'/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Radar Chart - Multiple series</h4>
                            </Card.Header>
                            <Card.Body>
                                <MultipleRadar dataColors='["--in-danger", "--in-success", "--in-primary"]'/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Radar Chart - Polygon Fill</h4>
                            </Card.Header>
                            <Card.Body>
                                <PolygonRadar dataColors='["--in-info"]'/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </div>
        </React.Fragment>
    )
}

export default RadarChart