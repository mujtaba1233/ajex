import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

const AnimationButton = () => {
  return (
    <React.Fragment>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Animation Buttons</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>bg-animation </code>class to create an animated button.</p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <Button variant='primary' className="btn-animation" data-text="Primary"><span>Primary</span></Button>
                                        <Button variant='secondary' className="btn-animation" data-text="Secondary"><span>Secondary</span></Button>
                                        <Button variant='success' className="btn-animation" data-text="Success"><span>Success</span></Button>
                                        <Button variant='info' className="btn-animation" data-text="Info"><span>Info</span></Button>
                                        <Button variant='warning' className="btn-animation" data-text="Warning"><span>Warning</span></Button>
                                        <Button variant='danger' className="btn-animation" data-text="Danger"><span>Danger</span></Button>
                                        <Button variant='dark' className="btn-animation" data-text="Dark"><span>Dark</span></Button>
                                        {/* <button type="button" className="btn btn-primary btn-animation" data-text="Primary"><span>Primary</span></button>
                                        <button type="button" className="btn btn-secondary btn-animation" data-text="Secondary"><span>Secondary</span></button>
                                        <button type="button" className="btn btn-success btn-animation" data-text="Success"><span>Success</span></button>
                                        <button type="button" className="btn btn-info btn-animation" data-text="Info"><span>Info</span></button>
                                        <button type="button" className="btn btn-warning btn-animation" data-text="Warning"><span>Warning</span></button>
                                        <button type="button" className="btn btn-danger btn-animation" data-text="Danger"><span>Danger</span></button>
                                        <button type="button" className="btn btn-dark btn-animation" data-text="Dark"><span>Dark</span></button> */}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                    </Row>
    </React.Fragment>
  )
}

export default AnimationButton
