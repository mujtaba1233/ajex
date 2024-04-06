import BreadCrumb from '../../../../Common/BreadCrumb'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import SimpleRadialbar from './SimpleRadialbar'
import MultipleRadialbar from './MultipleRadialbar'
import CircleRadialbar from './CircleRadialbar'
import GradientCircleRadialbar from './GradientCircleRadialbar'
import StrokedCircleRadial from './StrokedCircleRadial'
import ImageRadialbar from './ImageRadialbar'
import SemiCircularRadial from './SemiCircularRadial'

const RadialbarChart = () => {
    document.title = "Apex Radialbar Charts | Invoika - Admin & Dashboard Template"
    return (
        <React.Fragment>
            <div className="page-content">
            <Container fluid>
                <BreadCrumb pageTitle="Apexcharts" title="Radialbar Charts" />
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Simple Radialbar Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <SimpleRadialbar dataColors='["--in-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Multiple Radialbar</h4>
                            </Card.Header>
                            <Card.Body>
                                <MultipleRadialbar dataColors='["--in-primary", "--in-success", "--in-warning", "--in-danger"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Circle Chart - Custom Angle</h4>
                            </Card.Header>
                            <Card.Body>
                                <CircleRadialbar dataColors='["--in-primary", "--in-info", "--in-danger", "--in-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Gradient Circle Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <GradientCircleRadialbar dataColors='["--in-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Stroked Circle Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <StrokedCircleRadial dataColors='["--in-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Radialbars with Image</h4>
                            </Card.Header>

                            <Card.Body>
                                <ImageRadialbar dataColors='["--in-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Semi Circular Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <SemiCircularRadial dataColors='["--in-primary"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                    </Row>
            </Container>
        </div>
        </React.Fragment>
    )
}

export default RadialbarChart