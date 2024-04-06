import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Breadcrumb from '../../../../Common/BreadCrumb';

// Import Components
import { Slides, ControlledSlide } from './Slides&Control';
import { Indicators, Captions } from './IndicatorsCaptions'
import { CrossfadeAnimation, IndividualInterval } from './CrossfadeIndividual'
import { DisableTouch, DarkVariant } from './DisableDark'

const Carousel = () => {
    document.title=" Carousel | Invoika Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Carousel" pageTitle="Bootstrap Ui" />
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Slides Only</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use<code> slide</code> class to set carousel with slides. Note the presence of the <code>d-block</code> and <code>w-100</code> class on carousel images to prevent browser default image alignment.</p>
                                    <Slides />
                                </Card.Body>                                
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">With Controls</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>carousel-control-prev</code> and <code>carousel-control-next</code> class with &lt;button&gt; or &lt;a&gt; tag element to show carousel with control navigation.</p>
                                    <ControlledSlide />
                                </Card.Body>                                
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">with Indicators</h4>
                                </Card.Header>
                                <Card.Body>
                                <p className="text-muted">Use <code>carousel-indicators</code> class with &lt;ol&gt; element to show carousel with indicators.</p>
                                    <Indicators />
                                </Card.Body>                               
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">with Captions</h4>
                                </Card.Header>
                                <Card.Body>
                                <p className="text-muted">Use <code>carousel-caption</code> class to add captions to the carousel.</p>
                                    <Captions />
                                </Card.Body>                                
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Crossfade Animation</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>carousel-fade</code> class to the carousel to animate slides with a fade transition instead of a slide.</p>
                                    <CrossfadeAnimation />
                                </Card.Body>                                
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Individual carousel-item Interval</h4>
                                </Card.Header>
                                <Card.Body>
                                <p className="text-muted">Use <code>data-bs-interval=" "</code> to a carousel-item to change the amount of time to delay between automatically cycling to the next item.</p>
                                    <IndividualInterval />
                                </Card.Body>                                
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Disable Touch Swiping</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Carousels support swiping left/right on touchscreen devices to move between slides.
                                        This can be disabled using the <code>data-bs-touch</code> attribute. The example below also does not include the
                                        <code>data-bs-ride attribute</code> and has <code>data-bs-interval="false"</code> so it doesn’t autoplay.
                                    </p>
                                    <DisableTouch />
                                </Card.Body>                               
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card>
                                <Card.Header>
                                    <h4 className="card-title mb-0">Dark Variant</h4>
                                </Card.Header>
                                <Card.Body>
                                    <p className="text-muted">Use <code>carousel-dark</code> class to the carousel for darker controls, indicators, and captions.</p>
                                    <DarkVariant />
                                </Card.Body>                                
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment >
    );
};

export default Carousel;