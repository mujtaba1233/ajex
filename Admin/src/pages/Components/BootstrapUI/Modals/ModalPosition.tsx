import React, { useState } from 'react'
import { Button, Card, Col, Modal, Row, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ModalPosition = () => {
    const [modal_positionTop, setmodal_positionTop] = useState<boolean>(false);
    const tog_positionTop = () => setmodal_positionTop(!modal_positionTop);

    const [modal_positionTopRight, setmodal_positionTopRight] = useState<boolean>(false);
    const tog_positionTopRight = () => setmodal_positionTopRight(!modal_positionTopRight);


    const [modal_positionBottom, setmodal_positionBottom] = useState<boolean>(false);
    const tog_positionBottom = () => setmodal_positionBottom(!modal_positionBottom);


    const [modal_positionBottomRight, setmodal_positionBottomRight] = useState<boolean>(false);
    const tog_positionBottomRight = () => setmodal_positionBottomRight(!modal_positionBottomRight);

    return (
        <React.Fragment>
            <Tab.Container defaultActiveKey="Preview">
                <Row>
                    <Col lg={12}>
                        <Card>
                        <Card.Header>
                            <h4 className="card-title mb-0">Modals Position</h4>
                        </Card.Header>
                            <Tab.Content as={Card.Body}>
                                <Tab.Pane eventKey="Preview">
                                    <div className="live-preview">
                                        <div>
                                            <div className="hstack gap-2 flex-wrap">
                                                <Button variant="primary" onClick={() => tog_positionTop()}>Top Modal</Button>
                                                <Button variant="secondary" onClick={() => tog_positionTopRight()}>Top Right Modal</Button>
                                                <Button variant="success" onClick={() => tog_positionBottom()}>Bottom Modal</Button>
                                                <Button variant="danger" onClick={() => tog_positionBottomRight()}>Bottom Right Modal</Button>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>                                
                            </Tab.Content>
                        </Card>
                    </Col>
                </Row>
            </Tab.Container>
            {/* Position Top */}
            <Modal id="topmodal" show={modal_positionTop} onHide={() => { tog_positionTop(); }}>
                <Modal.Body className="text-center p-5">
                    <i className="bi bi-emoji-smile display-5 text-success"></i>
                    <div className="mt-4">
                        <h4 className="mb-3">Your event has been created.</h4>
                        <p className="text-muted mb-4"> The transfer was not successfully received by us. the email of the recipient wasn&apos;t correct.</p>
                        <div className="hstack gap-2 justify-content-center">
                            <Link to="#" className="btn btn-link link-success fw-medium" onClick={() => { tog_positionTop(); }}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                            <Link to="#" className="btn btn-success">Completed</Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Position Top Right */}

            <Modal id="top-rightmodal" show={modal_positionTopRight} onHide={() => { tog_positionTopRight(); }} dialogClassName="modal-dialog-right">
                <Modal.Body className="text-center p-5">
                    <i className="bi bi-emoji-smile display-5 text-success"></i>
                    <div className="mt-4">
                        <h4 className="mb-3">Your event has been created.</h4>
                        <p className="text-muted mb-4"> The transfer was not successfully received by us. the email of the recipient wasn&apos;t correct.</p>
                        <div className="hstack gap-2 justify-content-center">
                            <Link to="#" className="btn btn-link link-success fw-medium" onClick={() => { tog_positionTopRight(); }}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                            <Link to="#" className="btn btn-success">Completed</Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Position Bottom */}

            <Modal id="bottomModal" show={modal_positionBottom} onHide={() => { tog_positionBottom(); }} dialogClassName="modal-dialog-bottom" >
                <Modal.Body className="text-center p-5">
                    <i className="bi bi-emoji-smile display-5 text-success"></i>
                    <div className="mt-4">
                        <h4 className="mb-3">Your event has been created.</h4>
                        <p className="text-muted mb-4">The transfer was not successfully received by us. the email of the recipient wasn&apos;t correct.</p>
                        <div className="hstack gap-2 justify-content-center">
                            <Link to="#" className="btn btn-link link-success fw-medium" onClick={() => setmodal_positionBottom(false)}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                            <Link to="#" className="btn btn-success">Completed</Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Position Bottom Right */}

            <Modal id="bottom-rightModal" show={modal_positionBottomRight} onHide={() => { tog_positionBottomRight(); }} dialogClassName="modal-dialog-bottom-right" >
                <Modal.Body className="text-center p-5">
                    <i className="bi bi-emoji-smile display-5 text-success"></i>
                    <div className="mt-4">
                        <h4 className="mb-3">Your event has been created.</h4>
                        <p className="text-muted mb-4"> The transfer was not successfully received by us. the email of the recipient wasn&apos;t correct.</p>
                        <div className="hstack gap-2 justify-content-center">
                            <Link to="#" className="btn btn-link link-success fw-medium" onClick={() => setmodal_positionBottomRight(false)}><i className="ri-close-line me-1 align-middle"></i> Close</Link>
                            <Link to="#" className="btn btn-success">Completed</Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}

export default ModalPosition