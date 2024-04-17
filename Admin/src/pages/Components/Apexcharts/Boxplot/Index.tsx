import BreadCrumb from '../../../../Common/BreadCrumb'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Basic from './Basic'
import Scatter from './Scatter'
import Horizontal from './Horizontal'

const BoxPlot = () => {
    document.title = "Apex Boxplot Charts | Ajex - Admin & Dashboard Template"
    return (
        <React.Fragment>
            <div className="page-content">
            <Container fluid>
                <BreadCrumb pageTitle="Apexcharts" title="Boxplot Charts" />
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Basic Box Chart</h4>
                            </Card.Header>

                            <Card.Body>
                                <Basic dataColors='["--in-primary", "--in-info"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Boxplot with Scatter Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <Scatter dataColors='["--in-danger", "--in-info", "--in-danger", "--in-primary"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Horizontal BoxPlot</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Horizontal dataColors='["--in-light", "--in-secondary-bg"]' />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
            </Container>
            </div>
        </React.Fragment>
    )
}

export default BoxPlot