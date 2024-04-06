import BreadCrumb from '../../../../Common/BreadCrumb'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import BasicLineChart from './BasicLineChart'
import ZoomableTimeseries from './ZoomableTimeseries'
import LinewithDataLabels from './LineWithDataLabels'
import DashedLine from './DashedLine'
import LinewithAnnotations from './LineWithAnnotations'
import BrushChart from './BrushChart'
import BrushChart1 from './BrushChart1'
import SteplineChart from './SteplineChart'
import GradientCharts from './GradientCharts'
import MissingData from './MissingData'
import ChartSyncingLine from './ChartSyncingLine'
import ChartSyncingLine2 from './ChartSyncingLine2'
import ChartSyncingArea from './ChartSyncingArea'

const Linechart = () => {
    document.title = "Apex Line Charts | Invoika - Admin & Dashboard Template"
    return (
        <React.Fragment>
            <div className="page-content">            
            <Container fluid>
                <BreadCrumb pageTitle="Apexcharts" title="Line Charts" />
                <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Basic Line Chart</h4>
                        </Card.Header>
                        <Card.Body>
                            <div>
                                <BasicLineChart dataColors='["--in-primary"]'/>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Zoomable Timeseries</h4>
                        </Card.Header>
                        <Card.Body>
                            <ZoomableTimeseries dataColors='["--in-secondary"]' />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Line with Data Labels</h4>
                                </Card.Header>
                                <Card.Body>
                                    <LinewithDataLabels dataColors='["--in-primary", "--in-success"]' />
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Dashed Line</h4>
                                </Card.Header>
                                <Card.Body>
                                    <DashedLine dataColors='["--in-primary", "--in-danger", "--in-success"]' />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Line with Annotations</h4>
                                </Card.Header>
                                <Card.Body>
                                    <LinewithAnnotations dataColors='["--in-primary"]' />
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Brush Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <div>
                                        <BrushChart dataColors='["--in-danger"]' />
                                    </div>
                                    <div>
                                        <BrushChart1 dataColors='["--in-info"]' />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Stepline Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <SteplineChart dataColors='["--in-success"]' />
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Gradient Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <div>
                                        <GradientCharts dataColors='["--in-success"]' />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Missing Data/ Null Value Charts</h4>
                                </Card.Header>
                                <Card.Body>
                                    <MissingData dataColors='["--in-primary", "--in-danger", "--in-success"]' />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Syncing Charts</h4>
                                </Card.Header>
                                <Card.Body>
                                    <div>
                                        <ChartSyncingLine dataColors='["--in-primary"]' className="apex-charts" dir="ltr"/>
                                        <ChartSyncingLine2 dataColors='["--in-warning"]' className="apex-charts" dir="ltr"/>
                                        <ChartSyncingArea dataColors='["--in-success"]' className="apex-charts" dir="ltr"/>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
            </Container>
           </div> 
        </React.Fragment>
    )
}

export default Linechart