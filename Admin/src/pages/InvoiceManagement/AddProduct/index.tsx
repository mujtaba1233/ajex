import React, { useState } from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'
import BreadCrumb from '../../../Common/BreadCrumb';
import Dropzone from 'react-dropzone';
import { Link } from 'react-router-dom';


const AddProduct = () => {
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
                <BreadCrumb pageTitle="Product" title="Add Product" />
                    <Row>
                        <Col xl={12}>
                            <div className="card">
                                <div className="card-body">
                                   <div className="p-2">
                                    <Form>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="productname">Product Name</Form.Label>
                                            <Form.Control id="productname" name="productname" placeholder="Enter Product Name" type="text" />
                                        </div>
                                        
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

                                        <Row className="mt-3">
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="brand">Product Brand</Form.Label>
                                                    <Form.Control id="brand" name="brand" placeholder="Enter Product Brand" type="text" />
                                                </div>
                                            </Col>
                                            <Col lg={6}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="price">Product Price</Form.Label>
                                                    <Form.Control id="price" name="price" placeholder="Enter Price" type="text" />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={6}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="choices-single-default" className="form-label">Category</Form.Label>
                                                    <Form.Select className="form-select" data-trigger name="choices-single-category"
                                                        id="choices-single-category">
                                                        <option value="SL">Select</option>
                                                        <option value="EL">Electronic</option>
                                                        <option value="FA">Fashion</option>
                                                        <option value="FI">Fitness</option>
                                                    </Form.Select>
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="mb-3">
                                                    <Form.Label htmlFor="choices-single-specifications">Specifications</Form.Label>
                                                    <Form.Select className="form-select" data-trigger name="choices-single-category"
                                                        id="choices-single-specifications">
                                                        <option value="HI">High Quality</option>
                                                        <option value="LE" >Leather</option>
                                                        <option value="NO">Notifications</option>
                                                        <option value="SI">Sizes</option>
                                                        <option value="DI">Different Color</option>
                                                    </Form.Select>
                                                </div>
                                            </Col>
                                        </Row>

                                        <div className="mb-3">
                                            <Form.Label htmlFor="productdesc">Product Description</Form.Label>
                                            <textarea className="form-control" id="productdesc" placeholder="Enter Description" rows={4}></textarea>
                                        </div>
                                    </Form>

                                    <div className="hstack gap-2 mt-4">
                                        <button type="submit" className="btn btn-primary">Save</button>
                                        <button type="button" className="btn btn-light">Discard</button>
                                    </div>

                                   </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    </Container>
                    </div>
    </React.Fragment>
  )
}

export default AddProduct
