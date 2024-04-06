import BreadCrumb from '../../../../Common/BreadCrumb'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import SimplePie from './SimplePie'
import SimpleDonut from './SimpleDonut'
import UpdateDonut from './UpdateDonut'
import MonochromePie from './MonochromePie'
import GradientDonut from './GradientDonut'
import PatternedDonut from './PatternedDonut'
import ImagePieChart from './ImagePieChart'

const PieChart = () => {
    document.title = "Apex Pie Charts | Invoika - Admin & Dashboard Template"
    return (
        <React.Fragment>
            <div className="page-content">
            <Container fluid>
                <BreadCrumb pageTitle="Apexcharts" title="Pie Charts" />
                <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Simple Pie Chart</h4>
                                </Card.Header>

                                <Card.Body>
                                    <SimplePie dataColors='["--in-primary", "--in-success", "--in-warning", "--in-danger", "--in-info"]'/>
                                </Card.Body>
                            </Card>
                        </Col>
                       

                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Simple Donut Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                <SimpleDonut dataColors='["--in-primary", "--in-success", "--in-warning", "--in-danger", "--in-info"]'/>
                                </Card.Body>
                            </Card>
                        </Col>
                       
                    </Row>
                   

                    <Row className="row">
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Updating Donut Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <div>
                                    <UpdateDonut dataColors='["--in-primary", "--in-success", "--in-warning", "--in-danger", "--in-info"]'/>
                                        <div className="d-flex align-items-start flex-wrap gap-2 justify-content-center mt-4">
                                            <button id="add" className="btn btn-light btn-sm">
                                                + ADD
                                            </button>
                                            
                                            <button id="remove" className="btn btn-light btn-sm">
                                                - REMOVE
                                            </button>
                                            
                                            <button id="randomize" className="btn btn-light btn-sm">
                                                RANDOMIZE
                                            </button>
                                            
                                            <button id="reset" className="btn btn-light btn-sm">
                                                RESET
                                            </button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>                          

                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Monochrome Pie Chart</h4>
                                </Card.Header>

                                <Card.Body>
                                    <MonochromePie 
                                    // dataColors='["--in-primary"]'
                                    />
                                </Card.Body>
                            </Card>
                        </Col>                           
                    </Row>
                   

                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Gradient Donut Chart</h4>
                                </Card.Header>

                                <Card.Body>
                                    <GradientDonut  dataColors='["--in-primary", "--in-success", "--in-warning", "--in-danger", "--in-info"]'/>
                                </Card.Body>
                            </Card>
                        </Col>                           

                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Patterned Donut Chart</h4>
                                </Card.Header>
                                <Card.Body>
                                    <PatternedDonut dataColors='["--in-primary", "--in-success", "--in-warning", "--in-danger", "--in-info"]'/>
                                </Card.Body>
                            </Card>
                        </Col>                           
                    </Row>
                   

                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Pie Chart with Image Fill</h4>
                                </Card.Header>

                                <Card.Body>
                                    <ImagePieChart 
                                    // dataColors='["--in-primary", "--in-success", "--in-warning", "--in-info"]'
                                    />
                                </Card.Body>
                            </Card>
                        </Col>                           
                    </Row>    
            </Container>
            </div>
        </React.Fragment>
    )
}

export default PieChart