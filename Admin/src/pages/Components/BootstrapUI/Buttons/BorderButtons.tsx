import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

const BorderButtons = () => {
  return (
    <React.Fragment>
                        <Row>
                            <Col lg={12}>
                                <Card>
                                    <Card.Header>
                                        <h4 className="card-title mb-0">Border Buttons</h4>
                                    </Card.Header>
                                    <Card.Body>
                                        <p className="text-muted">Example of simple bottom borderd buttons.</p>
                                        <Row>
                                            <Col lg={6}>
                                                <div className="hstack flex-wrap gap-2 mb-3 mb-lg-0">
                                                <Button variant='primary' className="btn-border"><span>Primary</span></Button>
                                                <Button variant='secondary' className="btn-border"><span>Secondary</span></Button>
                                                <Button variant='success' className="btn-border"><span>Success</span></Button>
                                                <Button variant='warning' className="btn-border"><span>Warning</span></Button>
                                                <Button variant='danger' className="btn-border"><span>Danger</span></Button>                                           
                                                </div>
                                            </Col>
                                            
                                            <Col lg={6}>
                                                <div className="hstack flex-wrap gap-2 mb-3 mb-lg-0">
                                                    <Button variant='outline-primary' className="btn-border"><span>Primary</span></Button>
                                                    <Button variant='outline-secondary' className="btn-border"><span>Secondary</span></Button>
                                                    <Button variant='outline-success' className="btn-border"><span>Success</span></Button>
                                                    <Button variant='soft-warning' className="btn-border"><span>Warning</span></Button>
                                                    <Button variant='soft-danger' className="btn-border"><span>Danger</span></Button>
                                                    <Button variant='soft-dark' className="btn-border"><span>Dark</span></Button>                                                    
                                                </div>
                                            </Col>                                            
                                        </Row>                                        
                                    </Card.Body>
                                </Card>
                            </Col>
                            
                        </Row>
    </React.Fragment>
  )
}

export default BorderButtons
