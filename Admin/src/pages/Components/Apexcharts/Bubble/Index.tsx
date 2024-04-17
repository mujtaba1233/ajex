import BreadCrumb from '../../../../Common/BreadCrumb'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Simple from './Simple'
import ThreeDBubble from './ThreeDBubble'

const BubbleChart = () => {
    document.title = "Apex Bubble Charts | Ajex - Admin & Dashboard Template"
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
                                <Simple dataColors='["--in-primary", "--in-info", "--in-warning", "--in-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Boxplot with Scatter Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <ThreeDBubble dataColors='["--in-primary", "--in-success", "--in-warning", "--in-danger"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </div>
        </React.Fragment>
    )
}

export default BubbleChart