import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import InvoiceWidgets from "../../assets/images/invoice-widget.png";
import ThisWeekOverview from './ThisWeekOverview';
import { Link } from 'react-router-dom';

const ProffesionalWidgets = () => {
  return (
    <React.Fragment>
                    <Row>
                        <Col xl={5}>
                            <Card>
                                <Card.Body>
                                    <Row className="align-items-center gy-4">
                                        <Col sm={8}>
                                            <div className="box">
                                                <h5 className="fs-20 text-truncate">Professional Invoices Made Easy.</h5>
                                                <p className="text-muted fs-15">Quickly understand who your best customers little and motivation to pay their bills.</p>
                                                <Link to="#" className="btn btn-primary">Watch Tutorial</Link>
                                            </div>
                                        </Col>
                                        <Col sm={4}>
                                            <div className="text-center px-2">
                                                <img src={InvoiceWidgets} className="img-fluid" style={{height: "141px"}} alt="" />
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <ThisWeekOverview/>
                        
                    </Row>
                    
    </React.Fragment>
  )
}

export default ProffesionalWidgets
