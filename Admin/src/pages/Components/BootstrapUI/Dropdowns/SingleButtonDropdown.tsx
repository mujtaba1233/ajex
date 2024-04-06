import React from 'react';
import { Card, Col, Dropdown, Row } from 'react-bootstrap';
import Breadcrumb from '../../../../Common/BreadCrumb';


const SingleButtonDropdown = () => {
    document.title=" Dropdowns | Invoika Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb pageTitle="Bootstrap Ui" title="Dropdowns" />

                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Single Button Dropdown</h4>
                            </Card.Header>

                            <Card.Body>
                                <p className="text-muted">Use <code>btn</code> class at to create a dropdown
                                    toggle with &lt;button&gt; element.
                                </p>
                                <div className="d-flex flex-wrap gap-3">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="secondary">
                                            Dropdown button
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    <Dropdown>
                                        <Dropdown.Toggle variant="secondary">
                                            Dropdown link
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#" active> Action</Dropdown.Item>
                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Card.Body>
                            
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default SingleButtonDropdown;