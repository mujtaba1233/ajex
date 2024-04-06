import BreadCrumb from '../../../../Common/BreadCrumb'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Basic from './Basic'
import DifferentColor from './DifferentColor'
import MultiSeries from './MultiSeries'
import Advanced from './Advanced'
import MultipleSeries from './MultipleSeries'
import Dumbbell from './Dumbbell'

const TimelineChart = () => {
    document.title = "Apex Timeline Charts | Invoika - Admin & Dashboard Template"
    return (
        <React.Fragment>
            <div className="page-content">
            <Container fluid>
                <BreadCrumb pageTitle="Apexcharts" title="Timeline Charts" />
                <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Basic TimeLine Charts</h4>
                        </Card.Header>
                        <Card.Body>
                            <Basic dataColors='["--in-primary"]' />
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Different Color For Each Bar</h4>
                        </Card.Header>
                        <Card.Body>
                            <DifferentColor dataColors='["--in-primary", "--in-danger", "--in-success", "--in-warning", "--in-info"]' />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Multi Series Timeline</h4>
                        </Card.Header>
                        <Card.Body>
                            <MultiSeries dataColors='["--in-primary","--in-success"]' />
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Advanced Timeline (Multiple Range)</h4>
                        </Card.Header>
                        <Card.Body>
                            <Advanced dataColors='["--in-primary", "--in-success", "--in-warning"]' />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Multiple series � Group rows</h4>
                        </Card.Header>

                        <Card.Body>
                            <MultipleSeries dataColors='["--in-primary", "--in-success", "--in-warning", "--in-danger", "--in-info","--in-gray","--in-pink","--in-purple","--in-secondary", "--in-dark"]' />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Dumbbell Chart (Horizontal)</h4>
                        </Card.Header>

                        <Card.Body> 
                            <Dumbbell dataColors='["--in-primary", "--in-secondary"]' />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            </Container>
            </div>
        </React.Fragment>
    )
}

export default TimelineChart