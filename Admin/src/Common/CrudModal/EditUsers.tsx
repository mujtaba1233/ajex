import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import dummy from "../../assets/images/users/user-dummy-img.jpg";
import * as Yup from "yup";

import { editUsers as onEditUsers } from '../../slices/thunk';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import moment from 'moment';
import FlatPickr from 'react-flatpickr';
import { PatternFormat } from 'react-number-format';

interface usereditProps {
    isShow: any,
    handleClose: any,
    edit: any,
    // isEdit: any
}

const EditUsers = ({ isShow, handleClose, edit }: usereditProps) => {

    // image
    const [selectedImage, setSelectedImage] = useState<any>();

    const handleImageChange = (event: any) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e: any) => {
            formik.setFieldValue('memberImage', e.target.result);
            setSelectedImage(e.target.result);
        };
        reader.readAsDataURL(file);
    };

    const dispatch = useDispatch();

    const formik: any = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: (edit && edit.id) || '',
            memberName: (edit && edit.memberName) || '',
            memberImage: (edit && edit.memberImage) || '',
            email: (edit && edit.email) || '',
            mobile: (edit && edit.mobile) || '',
            registeredOn: (edit && edit.registeredOn) || '',
            status: (edit && edit.status) || ''
        },
        validationSchema: Yup.object({
            memberName: Yup.string().required("Please Enter Member Name"),
            memberImage: Yup.string().required("Please Select Member Name"),
            email: Yup.string().email().matches(/^(?!.*@[^,]*,)/).required("Please Enter Your Email"),
            mobile: Yup.string().required('Please Enter Your Mobile Number'),
            registeredOn: Yup.string().required('Please Select registered date'),
            status: Yup.string().required("Please choose Your status"),
        }),

        onSubmit: (values: any) => {            
            const UpdateUser = {
                id: values.id,
                memberName: values.memberName,
                memberImage: values.memberImage,
                email: values.email,
                mobile: values.mobile,
                registeredOn: values.registeredOn,
                status: values.status
            }

            dispatch(onEditUsers(UpdateUser));
            formik.resetForm();
            
        }
    });   

    useEffect(() => {
        setSelectedImage(edit?.memberImage);
    }, [edit])

    return (
        <React.Fragment>
            <Modal centered show={isShow} onHide={handleClose} style={{ display: "block" }} tabIndex={-1}>
                <div className="modal-content border-0">
                    <Modal.Header className="p-4 pb-0">
                        <Modal.Title as="h5">Edit User</Modal.Title>
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
                                        <Form.Control name="memberImage" className="form-control d-none" value="" id="product-image-input" type="file" accept="image/png, image/gif, image/jpeg" onChange={handleImageChange} />
                                    </div>
                                    <div className="avatar-lg p-1">
                                        <div className="avatar-title bg-light rounded-circle">
                                            <img src={selectedImage || dummy} alt="" id="product-img" className="avatar-md rounded-circle object-cover" />
                                        </div>
                                    </div>
                                </div>
                                {formik.errors.memberImage && formik.touched.memberImage ? (
                                    <Form.Control.Feedback type="invalid" className='d-block'> {formik.errors.memberImage} </Form.Control.Feedback>
                                ) : null}
                            </div>

                            <div className="mb-3">
                                <Form.Label htmlFor="users">Member Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="memberName"
                                    name="memberName"
                                    placeholder="Enter member name"
                                    value={formik.values.memberName || ''}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    isInvalid={!!formik.errors.memberName}
                                />
                                {formik.errors.memberName && formik.touched.memberName ? (
                                    <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.memberName}</Form.Control.Feedback>
                                ) : null}
                            </div>
                            <div className="mb-3">
                                <Form.Label htmlFor="Email-input">Email<span className="text-danger">*</span></Form.Label>
                                <Form.Control
                                    type="text"
                                    id="Email-input"
                                    name="email"
                                    placeholder="Enter Your email"
                                    value={formik.values.email || ''}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    isInvalid={!!formik.errors.email}
                                />
                                {formik.errors.email && formik.touched.email ? (
                                    <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
                                ) : null}
                            </div>
                            <div className="mb-3">
                                <Form.Label htmlFor="users">Mobile</Form.Label>
                                <PatternFormat
                                    id="mobile"
                                    name="mobile"
                                    className='form-control'
                                    placeholder="Enter Your Mobile"
                                    value={formik.values.mobile || ''}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    format="###-###-####" />
                                {formik.errors.mobile && formik.touched.mobile ? (
                                    <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.mobile}</Form.Control.Feedback>
                                ) : null}
                            </div>
                            <Row>
                                <Col lg={6}>
                                    <div className="mb-3">
                                        <Form.Label htmlFor="Name">Registered Date</Form.Label>
                                        <FlatPickr
                                            className="form-control"
                                            id="registeredOn"
                                            name="registeredOn"
                                            placeholder="Select date"
                                            options={{
                                                mode: "single",
                                                dateFormat: 'd M, Y',
                                            }}
                                            onChange={(registeredOn: any) => formik.setFieldValue("registeredOn", moment(registeredOn[0]).format("DD MMMM ,YYYY"))}
                                            value={formik.values.registeredOn || ''}
                                        />
                                        {formik.errors.registeredOn && formik.touched.registeredOn ? (
                                            <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.registeredOn}</Form.Control.Feedback>
                                        ) : null}
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mb-3">
                                        <label htmlFor="status" className="form-label">Status</label>                                       
                                        <Form.Select
                                            id="paymentType"
                                            name="status"
                                            placeholder="Enter Payment type"
                                            value={formik.values.status || ''}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            isInvalid={!!formik.errors.status}
                                        >
                                            <option disabled>Select Status</option>
                                            <option value="Active">Active</option>
                                            <option value="Disabled">Disabled</option>
                                        </Form.Select>
                                        {formik.errors.status && formik.touched.status ? (
                                            <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.status}</Form.Control.Feedback>
                                        ) : null}
                                    </div>
                                </Col>
                            </Row>
                            <div className="hstack gap-2 justify-content-end">
                                <Button type="button" className="btn btn-light" onClick={handleClose}>Close</Button>
                                <Button type="submit" className="btn btn-success" onClick={handleClose}>Edit User</Button>
                            </div>

                        </Form>
                    </Modal.Body>
                </div>
            </Modal>
        </React.Fragment>
    )
}

export default EditUsers
