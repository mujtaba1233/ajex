import React,{useState} from 'react'
import BreadCrumb from '../../../Common/BreadCrumb'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'
import Dropzone from 'react-dropzone';
import { Link } from 'react-router-dom';

const NewTransaction = () => {
    document.title="Add Product | Ajex Admin & Dashboard Template";

    const [selectedFiles, setselectedFiles] = useState<any>([]);

    function handleAcceptedFiles(files: any) {
        files.map((file: any) =>
        Object.assign(file, {
            preview: URL.createObjectURL(file),
            formattedSize: formatBytes(file.size),
        })
        );
        setselectedFiles(files);
    }

    function formatBytes(bytes: any, decimals = 2) {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    }
  return (
    <React.Fragment>
        <div className="page-content">
            <Container fluid>
                <BreadCrumb pageTitle="Account" title="New Transaction" />
                    <Row>
                        <Col xl={12}>
                            <Card>
                                <Card.Body>
                                    <Form>
                                        <div className="mb-3">
                                            <Form.Label className="form-label" htmlFor="desc">Description</Form.Label>
                                            <Form.Control as="textarea" type="textarea" id="desc" placeholder="Enter Description" rows={3}></Form.Control>
                                        </div>

                                        <Row>
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="credit/debit" className="form-label">Credit / Debit</Form.Label>
                                                    <Form.Select className="form-select" aria-label="Default select example">
                                                        <option value="0">Select Credit / Debit</option>
                                                        <option value="1">Credit</option>
                                                        <option value="2">Debit</option>
                                                    </Form.Select>
                                                </div>
                                            </Col>

                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="price">Amount</Form.Label>
                                                    <Form.Control id="price" name="price" placeholder="Enter Amount" type="number" className="form-control" />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Form.Label htmlFor="attachment">Attachment</Form.Label>
                                        <Dropzone
                                            onDrop={(acceptedFiles:any) => {
                                                handleAcceptedFiles(acceptedFiles);
                                            }}
                                            >
                                            {({ getRootProps }:any) => (
                                                <div className="dropzone dz-clickable text-center">
                                                <div className="dz-message needsclick"
                                                    {...getRootProps()}
                                                >
                                                    <div className="mb-3">
                                                    <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                                                    </div>
                                                    <h4>Drop files here or click to upload.</h4>
                                                </div>
                                                </div>
                                            )}
                                            </Dropzone>
                                        </Form>
                                        
                                        <div className="list-unstyled mb-0" id="file-previews">
                                            {selectedFiles.map((f: any, i: number) => {
                                                return (
                                                <Card
                                                    className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                                    key={i + "-file"}
                                                >
                                                    <div className="p-2">
                                                    <Row className="align-items-center">
                                                        <Col className="col-auto">
                                                        <img
                                                            data-dz-thumbnail=""
                                                            height="80"
                                                            className="avatar-sm rounded bg-light"
                                                            alt={f.name}
                                                            src={f.preview}
                                                        />
                                                        </Col>
                                                        <Col>
                                                        <Link
                                                            to="#"
                                                            className="text-muted font-weight-bold"
                                                        >
                                                            {f.name}
                                                        </Link>
                                                        <p className="mb-0">
                                                            <strong>{f.formattedSize}</strong>
                                                        </p>
                                                        </Col>
                                                    </Row>
                                                    </div>
                                                </Card>
                                                );
                                            })}
                                        </div>
    
                                        <div className="hstack gap-2 mt-4">
                                            <button type="submit" className="btn btn-primary">Pay Now</button>
                                            <button type="button" className="btn btn-light">Discard</button>
                                        </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
            </Container>    
        </div>
    </React.Fragment>
  )
}

export default NewTransaction
