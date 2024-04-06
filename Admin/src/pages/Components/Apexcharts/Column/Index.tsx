import BreadCrumb from '../../../../Common/BreadCrumb'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import BasicColumn from './BasicColumn'
import ColumnWithLable from './ColumnWithLable'
import StackedColumn from './StackedColumn'
import StackedColumn2 from './StackedColumn2'
import GroupStacked from './GroupStacked'
import Dumbbell from './Dumbbell'
import ColumnMarker from './ColumnMaker'
import RotateLable from './RotateLable'
import NagetiveLable from './NagetiveLable'
import RangeColumn from './RangeColumn'
import DynamicColumn from './DynamicColumn'
import Quarter from './Quarter'
import DistributedColumn from './DistributedColumn'
import ColumnGroupLabels from './ColumnGroupLabels'

const ColumnChart = () => {
    document.title = "Apex Column Charts | Invoika - Admin & Dashboard Template"
    return (
        <React.Fragment>
            <div className="page-content">
            <Container fluid>
                <BreadCrumb pageTitle="Apexcharts" title="Column Charts" />
                <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Basic Column Charts</h4>
                                </Card.Header>
                                <Card.Body>
                                    <BasicColumn dataColors='["--in-danger", "--in-primary", "--in-success"]'/>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Column with Data Labels</h4>
                                </Card.Header>
                                <Card.Body>
                                    <ColumnWithLable dataColors='["--in-success"]'/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Stacked Column Charts</h4>
                                </Card.Header>
                                <Card.Body>
                                    <StackedColumn dataColors='["--in-primary", "--in-success", "--in-warning", "--in-danger"]'/>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Stacked Column 100</h4>
                                </Card.Header>
                                <Card.Body>
                                    <StackedColumn2 dataColors='["--in-primary", "--in-success", "--in-warning"]'/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Grouped Stacked Columns</h4>
                                </Card.Header>
                                <Card.Body>
                                    <GroupStacked dataColors='["--in-primary", "--in-success","--in-secondary", "--in-warning"]'/>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Dumbbell Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <Dumbbell dataColors='["--in-primary", "--in-success"]'/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Column with Markers</h4>
                                </Card.Header>
                                <Card.Body>
                                    <ColumnMarker dataColors='["--in-success", "--in-primary"]'/>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Column with Rotated Labels</h4>
                                </Card.Header>
                                <Card.Body>
                                    <RotateLable dataColors='["--in-info"]'/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Column with Nagetive Values</h4>
                                </Card.Header>
                                <Card.Body>
                                    <NagetiveLable dataColors='["--in-success", "--in-danger", "--in-warning"]'/>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Range Column Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <RangeColumn dataColors='["--in-primary", "--in-success"]'/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Dynamic Loaded Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <div id="dynamicloadedchart-wrap">
                                        <div id="chart-year" className="apex-charts">
                                            <DynamicColumn dataColors='["--in-primary", "--in-success", "--in-warning", "--in-danger", "--in-dark", "--in-info"]'/>
                                        </div>
                                        <div id="chart-quarter" className="apex-charts">
                                            <Quarter dataColors='["--in-primary"]'/>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Distributed Columns Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <DistributedColumn dataColors='["--in-primary", "--in-success", "--in-warning", "--in-danger", "--in-dark", "--in-info"]'/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Column with Group Label</h4>
                                </Card.Header>
                                <Card.Body>
                                    <ColumnGroupLabels dataColors='["--in-info"]' />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
            </Container>
            </div>
        </React.Fragment>
    )
}

export default ColumnChart