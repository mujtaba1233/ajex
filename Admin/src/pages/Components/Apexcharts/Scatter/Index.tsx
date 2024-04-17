import BreadCrumb from '../../../../Common/BreadCrumb'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Basic from './Basic'
import Datetime from './Datetime'
import ImagesChart from './ImageChart'

const ScatterChart = () => {
    document.title = "Apex Scatter Charts | Ajex - Admin & Dashboard Template"
    return (
        <React.Fragment>
            <div className="page-content">
            <Container fluid>
                <BreadCrumb pageTitle="Apexcharts" title="Scatter Charts" />
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Basic Scatter Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <Basic dataColors='["--in-primary", "--in-success", "--in-warning"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Scatter - Datetime Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <Datetime dataColors='["--in-primary", "--in-success", "--in-warning", "--in-warning", "--in-info"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Scatter Images Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <ImagesChart dataColors='["--in-primary", "--in-danger"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </div>
        </React.Fragment>
    )
}

export default ScatterChart