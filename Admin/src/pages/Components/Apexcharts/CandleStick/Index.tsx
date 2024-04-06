import BreadCrumb from '../../../../Common/BreadCrumb'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Basic from './Basic'
import ComboCandlestick from './ComboCandlestick'
import ComboCandlestick1 from './ComboCandlestick1'
import Category from './Category'
import CandlestickLine from './CandlestickLine'

const Candlestick = () => {
    document.title = "Apex Candlestick Charts | Invoika - Admin & Dashboard Template"
    return (
        <React.Fragment>
            <div className="page-content"> 
            <Container fluid>
                <BreadCrumb pageTitle="Apexcharts" title="Candlestick Charts" />
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Basic Candlestick Chart</h4>
                            </Card.Header>
                            <Card.Body>
                                <Basic dataColors='["--in-success", "--in-danger"]' />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Candlestick Synced with Brush Chart (Combo)</h4>
                            </Card.Header>
                            <Card.Body>
                                <div>
                                    <div id="combo_candlestick">
                                        <ComboCandlestick dataColors='["--in-info", "--in-danger"]' />
                                    </div>
                                    <div id="combo_candlestick_chart">
                                        <ComboCandlestick1 />
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Category X-Axis</h4>
                            </Card.Header>
                            <Card.Body>
                                <Category dataColors='["--in-success", "--in-danger"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Candlestick with line</h4>
                            </Card.Header>

                            <Card.Body>
                                <CandlestickLine dataColors='["--in-success", "--in-danger", "--in-info", "--in-warning"]' />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </div>
        </React.Fragment>
    )
}

export default Candlestick