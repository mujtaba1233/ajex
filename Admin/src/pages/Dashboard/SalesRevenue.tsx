import React from 'react'
import { Card, Col, Dropdown, Row, Table } from 'react-bootstrap'
import { salesRevenue } from '../../Common/data/index';
import { VectorMap } from '@south-paw/react-vector-maps';
import world from './world.svg.json';
import InvoiceList from './InvoiceList';


const SalesRevenue = () => {
  return (
    <React.Fragment>
                <Row>
                        <Col xl={7}>
                            <Card>
                                <Card.Header className="border-0 align-items-center d-flex">
                                    <h4 className="card-title mb-0 flex-grow-1">Sales Revenue</h4>
                                    <Dropdown>
                                        <Dropdown.Toggle as="a" className="text-reset arrow-none">
                                            <span className="fw-semibold text-uppercase fs-14">Sort By: </span> <span className="text-muted">Years<i className="las la-angle-down fs-12 ms-2"></i></span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuYear">
                                            <Dropdown.Item>Monthly</Dropdown.Item>
                                            <Dropdown.Item>Yearly</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col xl={7}>
                                            <div className="py-3">
                                                <div id="world-map-markers" className="custom-vector-map" style={{height: "317px"}}>
                                                    <VectorMap {...world} />
                                                </div>
                                            </div>
                                        </Col>

                                        <Col xl={5}>
                                            <div className="table-responsive">
                                                    <Table className="table table-centered align-middle table-nowrap mb-0">
                                                        <thead>
                                                            <tr className="text-uppercase">
                                                                <th style={{width : "500px"}}>Countrie</th>
                                                                <th style={{width : "30%"}}>Order</th>
                                                                <th style={{width : "15%"}}>Earning</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                        {salesRevenue.map((salesRevenueData: any, key: any) => (
                                                            <tr key={key}>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <img src={salesRevenueData.countryImg} className="rounded" alt="user" height="22" />
                                                                        <div className="flex-grow-1 ms-3">
                                                                            <p className="mb-0 text-truncate">{salesRevenueData.country}</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>{salesRevenueData.order}</td>
                                                                <td>{salesRevenueData.earning}</td>
                                                            </tr>            
                                                            ))}
                                                        
                                                        </tbody>
                                                    </Table>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>

                        <InvoiceList/>               
                    </Row>
                    
    </React.Fragment>
  )
}

export default SalesRevenue
