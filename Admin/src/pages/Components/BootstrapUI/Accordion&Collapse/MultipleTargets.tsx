import React, { useState } from 'react';
import { Card, Col, Row, Button, Collapse } from 'react-bootstrap';

const MultipleTargets = () => {
    const [coll3, setcoll3] = useState(true);
    const [coll4, setcoll4] = useState(true);

    const t_coll3 = () => {
        setcoll3(!coll3);
    };

    const t_coll4 = () => {
        setcoll4(!coll4);
    };

    const t_coll5 = () => {
        setcoll3(!coll3);
        setcoll4(!coll4);
    };
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Multiple Targets Collapse</h4>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted">
                                A <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> can show and hide multiple elements by referencing them with a selector in its href or data-bs-target attribute. Multiple <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> can
                                show and hide an element if they each reference it with their href or data-bs-target attribute.
                            </p>
                            <div className="hstack gap-2 flex-wrap mb-3">
                                <Button variant='primary' onClick={t_coll3}>Toggle First Element</Button>
                                <Button variant='primary' onClick={t_coll4}>Toggle Second Element</Button>
                                <Button variant='primary' onClick={t_coll5}>Toggle Both Elements</Button>
                            </div>
                            <Row>
                                <Col>
                                    <Collapse in={coll3}>
                                        <Card body className="mb-0">
                                            Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                        </Card>
                                    </Collapse>
                                </Col>
                                <Col>
                                    <Collapse in={coll4}>
                                        <Card body className="mb-0">
                                            Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                        </Card>
                                    </Collapse>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default MultipleTargets