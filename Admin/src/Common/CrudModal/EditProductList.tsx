import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import dummy from "../../assets/images/users/user-dummy-img.jpg";

import * as Yup from "yup";

import { editProductList as onEditProductList } from '../../slices/thunk';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

interface producteditProps {
    isShow: any,
    handleClose: any,
    edit: any
}


const EditProductList = ({ isShow, handleClose, edit }: producteditProps) => {
    // image
    const [selectedImage, setSelectedImage] = useState<any>();

    const handleImageChange = (event: any) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e: any) => {
            formik.setFieldValue('productImage', e.target.result);
            setSelectedImage(e.target.result);
        };
        reader.readAsDataURL(file);
    };

    const dispatch = useDispatch();

    const formik: any = useFormik({

        enableReinitialize: true,

        initialValues: {
            id: (edit && edit.id) || '',
            productName: (edit && edit.productName) || '',
            productImage: (edit && edit.productImage) || '',
            inStock: (edit && edit.inStock) || '',
            category: (edit && edit.category) || '',
            rate: (edit && edit.rate) || '',
            price: (edit && edit.price) || ''
        },

        validationSchema: Yup.object({
            productName: Yup.string().required("Please Enter Your product name"),
            productImage: Yup.string().required("Please select an image"),
            inStock: Yup.string().required("Please Enter instock"),
            rate: Yup.number().required("Please Enter Your Rate"),
            category: Yup.string().required("Please Enter Your category"),
            price: Yup.number().required("Please Enter Your Billed amount")
        }),

        onSubmit: (values: any) => {
            let newid = values.id;
            const updateproduct = {
                id: newid,
                productName: values.productName,
                productImage: values.productImage,
                inStock: values.inStock,
                rate: values.rate,
                category: values.category,
                price: values.price
            }
            dispatch(onEditProductList(updateproduct));
            formik.resetForm();
        }

    })

    useEffect(() => {
        setSelectedImage(edit?.productImage);
    }, [edit])

    return (
        <React.Fragment>
            <Modal centered show={isShow} onHide={handleClose} style={{ display: "block" }} tabIndex={-1}>
                <div className="modal-content border-0">
                    <Modal.Header className="p-4 pb-0">
                        <Modal.Title as="h5">Edit Payment Summary</Modal.Title>
                        <button type="button" className="btn-close" onClick={handleClose}></button>
                    </Modal.Header>
                    <Modal.Body className="p-4">
                        <Form autoComplete="off" onSubmit={formik.handleSubmit}>
                            <div className="text-center">
                                <div className="position-relative d-inline-block">
                                    <div className="position-absolute bottom-0 end-0">
                                        <Form.Label htmlFor="product-image-input" className="mb-0" data-bs-toggle="tooltip" data-bs-placement="right" title="Select Image">
                                            <div className="avatar-xs cursor-pointer">
                                                <div className="avatar-title bg-light border rounded-circle text-muted">
                                                    <i className="ri-image-fill"></i>
                                                </div>
                                            </div>
                                        </Form.Label>
                                        <Form.Control name="productImage" className="form-control d-none" value="" id="product-image-input" type="file" accept="image/png, image/gif, image/jpeg" onChange={handleImageChange} />
                                    </div>
                                    <div className="avatar-lg p-1">
                                        <div className="avatar-title bg-light rounded-circle">
                                            <img src={selectedImage || dummy} alt="" id="product-img" className="avatar-md rounded-circle object-cover" />
                                        </div>
                                    </div>
                                </div>
                                {formik.errors.productImage && formik.touched.productImage ? (
                                    <Form.Control.Feedback type="invalid" className='d-block'> {formik.errors.productImage} </Form.Control.Feedback>
                                ) : null}
                            </div>
                            <div className="mb-3">
                                <Form.Label htmlFor="Product-Name-input">Product Name<span className="text-danger">*</span></Form.Label>
                                <Form.Control
                                    type="text"
                                    id="Product-Name-input"
                                    name="productName"
                                    placeholder="Enter productName Name"
                                    value={formik.values.productName || ''}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    isInvalid={!!formik.errors.productName}
                                />
                                {formik.errors.productName && formik.touched.productName ? (
                                    <Form.Control.Feedback type="invalid">{formik.errors.productName}</Form.Control.Feedback>
                                ) : null}
                            </div>
                            <div className="mb-3">
                                <Form.Label htmlFor="Category-input" >Category<span className="text-danger">*</span></Form.Label>
                                <Form.Select
                                    id="Category-input"
                                    name="category"
                                    placeholder="Enter Category"
                                    value={formik.values.category || ''}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    isInvalid={!!formik.errors.category}
                                >
                                    <option>select Category</option>
                                    <option value="Fashion">Fashion</option>
                                    <option value="Accessories">Accessories</option>
                                    <option value="Furniture">Furniture</option>
                                </Form.Select>
                                {formik.errors.category && formik.touched.category ? (
                                    <Form.Control.Feedback type="invalid">{formik.errors.category}</Form.Control.Feedback>
                                ) : null}
                            </div>
                            <Row>
                                <Col lg={6}>
                                    <div className="mb-3">
                                        <Form.Label htmlFor="inStock-input" >InStock<span className="text-danger">*</span></Form.Label>
                                        <Form.Control
                                            id="Amount-input"
                                            name="inStock"
                                            placeholder="Enter Your Stock"
                                            value={formik.values.inStock || ''}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            isInvalid={!!formik.errors.inStock}
                                        />
                                        {formik.errors.inStock && formik.touched.inStock ? (
                                            <Form.Control.Feedback type="invalid">{formik.errors.inStock}</Form.Control.Feedback>
                                        ) : null}
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mb-3">
                                        <Form.Label htmlFor="rate-input" >Rate<span className="text-danger">*</span></Form.Label>
                                        <Form.Control
                                            id="rate-input"
                                            name="rate"
                                            placeholder="Enter Your Rate"
                                            value={formik.values.rate || ''}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            isInvalid={!!formik.errors.rate}
                                        />
                                        {formik.errors.rate && formik.touched.rate ? (
                                            <Form.Control.Feedback type="invalid">{formik.errors.rate}</Form.Control.Feedback>
                                        ) : null}
                                    </div>
                                </Col>
                            </Row>
                            <div className="mb-3">
                                <Form.Label htmlFor="Price-input" >Price<span className="text-danger">*</span></Form.Label>
                                <Form.Control
                                    id="price-input"
                                    name="price"
                                    placeholder="Enter Your price"
                                    value={formik.values.price || ''}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    isInvalid={!!formik.errors.price}
                                />
                                {formik.errors.price && formik.touched.price ? (
                                    <Form.Control.Feedback type="invalid">{formik.errors.price}</Form.Control.Feedback>
                                ) : null}
                            </div>
                            <div className="hstack gap-2 justify-content-end">
                                <Button type="button" className="btn btn-light" onClick={handleClose}>Close</Button>
                                <Button type="submit" className="btn btn-success" onClick={handleClose}>Edit Invoice</Button>
                            </div>

                        </Form>
                    </Modal.Body>
                </div>
            </Modal>

        </React.Fragment>
    )
}

export default EditProductList
