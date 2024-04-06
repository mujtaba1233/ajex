import React from 'react'
import { Carousel, Col } from 'react-bootstrap'

const AuthCarousel = () => {
  return (
    <React.Fragment>
      <Col lg={6}>
                                                    <div className="d-flex h-100 bg-auth align-items-end">
                                                        <div className="p-lg-5 p-4">
                                                            <div className="bg-overlay bg-primary"></div>
                                                            <div className="p-0 p-sm-4 px-xl-0 py-5">
                                                                <Carousel indicators={true} controls={false}>
                                                                        <Carousel.Item>
                                                                            <div className="testi-contain text-center">
                                                                                <h5 className="fs-20 text-white mb-0">“I feel confident
                                                                                    imposing
                                                                                    on myself”
                                                                                </h5>
                                                                                <p className="fs-15 text-white-50 mt-2 mb-0">Vestibulum auctor orci in risus iaculis consequat suscipit felis rutrum aliquet iaculis
                                                                                    augue sed tempus In elementum ullamcorper lectus vitae pretium Nullam ultricies diam
                                                                                    eu ultrices sagittis.</p>
                                                                            </div>
                                                                        </Carousel.Item>
                        
                                                                        <Carousel.Item>
                                                                            <div className="testi-contain text-center">
                                                                                <h5 className="fs-20 text-white mb-0">“Our task must be to
                                                                                    free widening circle”</h5>
                                                                                <p className="fs-15 text-white-50 mt-2 mb-0">
                                                                                    Curabitur eget nulla eget augue dignissim condintum Nunc imperdiet ligula porttitor commodo elementum
                                                                                    Vivamus justo risus fringilla suscipit faucibus orci luctus
                                                                                    ultrices posuere cubilia curae ultricies cursus.
                                                                                </p>
                                                                            </div>
                                                                        </Carousel.Item>
                        
                                                                        <Carousel.Item>
                                                                            <div className="testi-contain text-center">
                                                                                <h5 className="fs-20 text-white mb-0">“I've learned that
                                                                                    people forget what you”</h5>
                                                                                <p className="fs-15 text-white-50 mt-2 mb-0">
                                                                                    Pellentesque lacinia scelerisque arcu in aliquam augue molestie rutrum Fusce dignissim dolor id auctor accumsan
                                                                                    vehicula dolor
                                                                                    vivamus feugiat odio erat sed  quis Donec nec scelerisque magna
                                                                                </p>
                                                                            </div>
                                                                        </Carousel.Item>
                                                                                                                                  
                                                                </Carousel>                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
    </React.Fragment>
  )
}

export default AuthCarousel
