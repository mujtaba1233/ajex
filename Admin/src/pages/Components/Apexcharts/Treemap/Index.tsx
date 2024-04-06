import BreadCrumb from '../../../../Common/BreadCrumb'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import BasicTreemap from './BasicTreemap'
import MultiTreemap from './MultiTreemap'
import DiffColorTreemap from './DiffColorTreemap'
import ColorRangeTreemap from './ColorRangeTreemap'

const TreemapChart = () => {
    document.title = "Apex Treemap Charts | Invoika - Admin & Dashboard Template"
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb pageTitle="Apexcharts" title="Treemap Charts" />
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Basic Treemap Charts</h4>
                            </Card.Header>

                            <Card.Body>
                                <BasicTreemap dataColors='["--in-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Multi-Dimensional Treemap Chart</h4>
                            </Card.Header>

                            <Card.Body>
                                <MultiTreemap dataColors='["--in-primary","--in-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Distributed Treemap Chart (Different Color for  each Cell)</h4>
                            </Card.Header>

                            <Card.Body>
                                <DiffColorTreemap dataColors='["--in-primary", "--in-secondary", "--in-success", "--in-info","--in-warning", "--in-danger"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Treemap Chart with Color Ranges</h4>
                            </Card.Header>
                            <Card.Body>
                                <ColorRangeTreemap dataColors='["--in-info","--in-danger"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </div>
        </React.Fragment>
    )
}

export default TreemapChart