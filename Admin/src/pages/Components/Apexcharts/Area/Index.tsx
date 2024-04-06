import BreadCrumb from '../../../../Common/BreadCrumb'
import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import BasicArea from './BasicArea'
import SplineAreaChart from './SplineAreaChart'
import AxisChart from './AxisChart'
import NegativeAreaChart from './NegativeAreaChart'
import GithubStyleCharts1 from './GithubStyleCharts1'
import { Link } from 'react-router-dom'
import GithubStyleCharts from './GithubStyleCharts'
import user from '../../../../assets/images/users/avatar-2.jpg'
import StackedAreaChart from './StackedAreaChart'
import IrregularAreaCharts from './IrregularAreaCharts'
import AreaNullValueChart from './AreaNullValueChart'

const AreaChart = () => {
    document.title = "Apex Area Charts | Invoika - Admin & Dashboard Template"
    return (
        <React.Fragment>
            <div className="page-content">
            <Container fluid>
                <BreadCrumb pageTitle="Apexcharts" title="Area Charts" />
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Basic Area Chart</h4>
                            </Card.Header>

                            <Card.Body>
                                <BasicArea id="area_chart_basic" dataColors='["--in-primary"]' ></BasicArea>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Spline Area Chart</h4>
                            </Card.Header>

                            <Card.Body>
                                <SplineAreaChart dataColors='["--in-primary", "--in-secondary"]' ></SplineAreaChart>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Area Chart - Datetime X - Axis Chart</h4>
                            </Card.Header>

                            <Card.Body>
                                <div>
                                    <div className="toolbar d-flex align-items-start justify-content-center flex-wrap gap-2">
                                        <button type="button" className="btn btn-subtle-primary timeline-btn btn-sm" id="one_month">
                                            1M
                                        </button>
                                        <button type="button" className="btn btn-subtle-primary timeline-btn btn-sm" id="six_months">
                                            6M
                                        </button>
                                        <button type="button" className="btn btn-subtle-primary timeline-btn btn-sm active" id="one_year">
                                            1Y
                                        </button>
                                        <button type="button" className="btn btn-subtle-primary timeline-btn btn-sm " id="YTD">
                                            YTD
                                        </button>
                                        <button type="button" className="btn btn-subtle-primary timeline-btn btn-sm" id="all">
                                            ALL
                                        </button>
                                    </div>
                                    <AxisChart dataColors='["--in-info"]' />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Area with Negative Values Chart</h4>
                            </Card.Header>

                            <Card.Body>
                                <NegativeAreaChart dataColors='["--in-success", "--in-danger"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Area Chart - Github Style</h4>
                            </Card.Header>
                            <Card.Body>
                                <div>
                                    <div className="bg-light">
                                        <GithubStyleCharts dataColors='["--in-danger"]' />
                                    </div>

                                    <div className="github-style d-flex align-items-center my-2">
                                        <div className="flex-shrink-0 me-2">
                                            <Image className="avatar-sm rounded" src={user} data-hovercard-user-id="634573" alt="" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <Link to="#" className="font-size-14 text-dark fw-medium">coder</Link>
                                            <div className="cmeta text-muted font-size-11">
                                                <span className="commits text-dark fw-medium"></span> commits
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-light">
                                        <GithubStyleCharts1 dataColors='["--in-success"]' />
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Stacked Area Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <StackedAreaChart dataColors='["--in-success", "--in-info", "--in-light"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Irregular Timeseries Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <IrregularAreaCharts dataColors='["--in-primary", "--in-warning", "--in-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Area Chart With Null Values Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <AreaNullValueChart dataColors='["--in-success"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </div>
        </React.Fragment>
    )
}

export default AreaChart