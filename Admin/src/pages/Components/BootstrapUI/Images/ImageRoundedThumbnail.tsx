import React from 'react';
import Breadcrumb from '../../../../Common/BreadCrumb';
import { Col, Row, Card, Image } from 'react-bootstrap';


// import Images
import img3 from '../../../../assets/images/small/img-3.jpg'
import img4 from '../../../../assets/images/small/img-4.jpg'


import avatar3 from '../../../../assets/images/users/avatar-3.jpg'
import avatar4 from '../../../../assets/images/users/avatar-4.jpg'

const ImageRoundedThumbnail = () => {
    document.title=" Images | Invoika - Admin & Dashboard Template";

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb pageTitle="Bootstrap Ui" title="Images" />

                <Row>
                    <Col xxl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Image Rounded & Circle</h4>
                            </Card.Header>

                            <Card.Body>
                                <p className="text-muted">Use
                                    <code>rounded</code> class and <code>rounded-circle</code> class to show an image with a round border and rounded shape respectively.
                                </p>
                                <Row className="align-items-center">
                                    <Col md={6}>
                                        <Image className="rounded" alt="200x200" width="200" src={img4} data-holder-rendered="true" />
                                    </Col>
                                    <Col md={6}>
                                        <div className="mt-4 mt-md-0">
                                            <Image className="rounded-circle avatar-xl" alt="200x200" src={avatar4} data-holder-rendered="true" />
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>                            
                        </Card>
                    </Col>

                    <Col xxl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Image Thumbnails</h4>
                            </Card.Header>
                            <Card.Body>
                                <p className="text-muted">Use <code>img-thumbnail</code> class to give an image rounded 1px border appearance.</p>
                                <Row>
                                    <div className="col-6">
                                        <Image className="img-thumbnail" alt="200x200" width="200" src={img3} data-holder-rendered="true" />
                                    </div>
                                    <div className="col-6">
                                        <div className="mt-4 mt-md-0">
                                            <Image className="img-thumbnail rounded-circle avatar-xl" alt="200x200" src={avatar3} data-holder-rendered="true" />
                                        </div>
                                    </div>
                                </Row>
                            </Card.Body>                            
                        </Card>
                    </Col>
                </Row>
            </div>

        </React.Fragment>
    )
}

export default ImageRoundedThumbnail;