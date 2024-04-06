import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

const NouiSliders = () => {
    const [mincost, setMincost] = useState<any>(0);
    const [maxcost, setMaxcost] = useState<any>(2000);
    //slider function
    const onUpDate = (value: any) => {
        setMincost(value[0]);
        setMaxcost(value[1]);
    };

    useEffect(() => {
        onUpDate([mincost, maxcost]);
    }, [mincost, maxcost]);

    useEffect(() => {
        let slider = document.getElementById("product-price-range");
        slider?.setAttribute("data-slider-color", "success");
    }, [])

    const pipsOptions = {
        mode: 'positions',
        values: [0, 25, 50, 75, 100],
        density: 4,
        format: {
            to: (value: any) => parseInt(value),
            from: (value: any) => parseInt(value),
        }
    };
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Header>
                            <h4 className="card-title mb-1">Nouislider</h4>
                            <p className="text-muted mb-0">noUiSlider is a lightweight JavaScript range slider</p>
                        </Card.Header>

                        <Card.Body>
                            <div className="live-preview">
                                <div>
                                    <div className="mb-3">
                                        <Row className="align-items-center">
                                            <Col lg={3}>
                                                <h5 className="fs-md">Basic Example</h5>
                                            </Col>
                                            <Col lg={9}>
                                                <div data-rangeslider data-slider-color="success">
                                                    <Nouislider
                                                        range={{ min: 0, 
                                                            max: 100 }}
                                                        start={[0, 50]}
                                                        connect
                                                        onSlide={onUpDate}
                                                        id="product-price-range"
                                                        className='slider1'
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="border border-dashed"></div>

                                    <div className="my-4">
                                        <Row className="align-items-center">
                                            <Col lg={3}>
                                                <h5 className="fs-md">Multi elements range handle</h5>
                                            </Col>
                                            <Col lg={9}>
                                                <div data-multielement data-slider-color="success">
                                                    <Nouislider
                                                        range={{ min: 0, max: 100 }}
                                                        start={[20, 80]}
                                                        connect
                                                        onSlide={onUpDate}
                                                        id="product-price-range"
                                                        className='slider2'
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="border border-dashed"></div>

                                    <div className="my-4">
                                        <Row>
                                            <Col lg={3}>
                                                <h5 className="fs-md">Non linear slider</h5>
                                            </Col>
                                            <Col lg={9}>
                                                <div id="nonlinear" data-slider-color="success">
                                                    <Nouislider
                                                        range={{
                                                            min: 0,
                                                            max: 100,
                                                        }}
                                                        start={[50]}
                                                        connect
                                                        onSlide={onUpDate}
                                                    />
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <div className="example-val" id="lower-value"></div>
                                                    <div className="example-val" id="upper-value"></div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="border border-dashed"></div>



                                    <div className="border border-dashed"></div>

                                    <div className="my-4">
                                        <Row className="align-items-center">
                                            <Col lg={3}>
                                                <h5 className="fs-md">Merging overlapping tooltips</h5>
                                            </Col>
                                            <Col lg={9}>
                                                <div className="slider" id="slider-merging-tooltips" data-slider-color="success">
                                                    <Nouislider
                                                        range={{ min: 0, max: 100 }}
                                                        start={[25, 75]}
                                                        connect
                                                        onSlide={onUpDate}
                                                        tooltips
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="border border-dashed"></div>

                                    <div className="my-4">
                                        <Row>
                                            <Col lg={3}>
                                                <h5 className="fs-md">Only showing tooltips when sliding handle</h5>
                                            </Col>
                                            <Col lg={9}>
                                                <div className="slider" id="slider-hide" data-slider-color="success">
                                                    <Nouislider
                                                        range={{ min: 0, max: 100 }}
                                                        start={[20, 80]}
                                                        onSlide={onUpDate}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="border border-dashed"></div>

                                    <div className="mt-4 mb-5">
                                        <Row>
                                            <Col lg={3}>
                                                <h5 className="fs-md">Moving the slider by clicking pips</h5>
                                            </Col>
                                            <Col lg={9}>
                                                <div className="slider" id="slider-pips" data-slider-color="success">
                                                    <Nouislider
                                                        range={{ min: 0, max: 100 }}
                                                        start={[50, 50]}
                                                        connect
                                                        onSlide={onUpDate}
                                                        pips={pipsOptions}
                                                        id="product-price-range"
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="border border-dashed"></div>

                                    <div className="my-4">
                                        <Row>
                                            <Col lg={3}>
                                                <h5 className="fs-md">Colored Connect Elements</h5>
                                            </Col>
                                            <Col lg={9}>
                                                <div className="slider" id="slider-color" data-slider-color="success">
                                                    <Nouislider
                                                        range={{ min: 0, max: 100 }}
                                                        start={[20, 40, 60, 80]}
                                                        connect
                                                        onSlide={onUpDate}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="border border-dashed"></div>

                                    <div className="my-4">
                                        <Row>
                                            <Col lg={3}>
                                                <h5 className="fs-md">Creating a toggle</h5>
                                            </Col>
                                            <Col lg={9}>
                                                <div id="slider-toggle" data-slider-color="success">
                                                    <Nouislider
                                                        range={{ min: 0, max: 100 }}
                                                        start={[10, 10]}
                                                        connect
                                                        onSlide={onUpDate}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="border border-dashed"></div>

                                    <div className="my-4">
                                        <Row>
                                            <Col lg={3}>
                                                <h5 className="fs-md">Soft limits</h5>
                                            </Col>
                                            <Col lg={9}>
                                                <div id="soft" data-slider-color="success">
                                                    <Nouislider
                                                        range={{ min: 0, max: 100 }}
                                                        start={[50, 50]}
                                                        connect
                                                        onSlide={onUpDate}
                                                        pips={pipsOptions}
                                                        id="product-price-range"
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default NouiSliders