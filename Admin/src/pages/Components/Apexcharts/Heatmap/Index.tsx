import BreadCrumb from '../../../../Common/BreadCrumb'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import BasicHeatmap from './BasicHeatmap'
import MultipleHeatmap from './MultipleHeatmap'
import ColorRange from './ColorRange'
import RangeWithoutShades from './RangeWithoutShades'

const HeatMap = () => {
    document.title = "Apex Heatmap Charts | Ajex - Admin & Dashboard Template"
    return (
        <React.Fragment>
            <div className="page-content">
            <Container fluid>
                <BreadCrumb pageTitle="Apexcharts" title="Heatmap Charts" />
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Basic Heatmap Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <div className="live-preview">
                                    <BasicHeatmap dataColors='["--in-success"]' />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Heatmap - Multiple Series</h4>
                            </Card.Header>

                            <Card.Body>
                                <MultipleHeatmap dataColors='["--in-primary", "--in-secondary", "--in-success", "--in-info", "--in-warning", "--in-danger", "--in-dark", "--in-primary", "--in-card-custom"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

                <Row>
                    <Col xl={6}>
                        <Card>
                            <div className="card-header">
                                <h4 className="card-title mb-0">Heatmap Color Range</h4>
                            </div>

                            <div className="card-body">
                                <ColorRange dataColors='["--in-info", "--in-success", "--in-primary", "--in-warning"]' />
                            </div>
                        </Card>
                    </Col>

                    <Col xl={6}>
                        <Card>
                            <div className="card-header">
                                <h4 className="card-title mb-0">Heatmap - Range Without Shades</h4>
                            </div>

                            <div className="card-body">
                                <RangeWithoutShades dataColors='["--in-info", "--in-primary"]' />
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </div>
        </React.Fragment>
    )
}

export default HeatMap