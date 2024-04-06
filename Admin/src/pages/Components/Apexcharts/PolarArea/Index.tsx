import BreadCrumb from '../../../../Common/BreadCrumb'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import BasicPolar from './BasicPolar'
import PolarMonochrome from './PolarMonochrome'

const PolarChart = () => {
    document.title = "Apex Polararea Charts | Invoika - Admin & Dashboard Template"
    return (
        <React.Fragment>
            <div className="page-content">
            <Container fluid>
                <BreadCrumb pageTitle="Apexcharts" title="Polararea Charts" />
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Basic Polararea Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <BasicPolar dataColors='["--in-primary", "--in-success", "--in-warning","--in-danger", "--in-info", "--in-success", "--in-primary", "--in-dark", "--in-secondary"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">PolarArea Monochrome</h4>
                            </Card.Header>
                            <Card.Body>
                                <PolarMonochrome  />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </div>
        </React.Fragment>
    )
}

export default PolarChart