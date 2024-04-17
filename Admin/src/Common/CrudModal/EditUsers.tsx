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
    console.log(edit, "This sis the edit")
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
            firstName: (edit && edit.firstName) || '',
            lastName: (edit && edit.lastName) || '',
            isActivated: (edit && edit.isActivated) || '',
            email: (edit && edit.email) || '',
            phoneNumber: (edit && edit.phoneNumber) || '',
            role: (edit && edit.role) || '',
            password: (edit && edit.password) || ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Please enter first name"),
            lastName: Yup.string().required("Please enter last name"),
            email: Yup.string().email().matches(/^(?!.*@[^,]*,)/).required("Please enter your email"),
            phoneNumber: Yup.string().required('Please enter your phone number'),
            isActivated: Yup.boolean().required('Please select registered date'),
            role: Yup.string().required('Please select role'),
            password: Yup.string().required('Please enter password'),
        }),

        onSubmit: (values: any) => {            
            const UpdateUser = {
                id: edit.id,
                firstName: values['firstName'],
                lastName: values['lastName'],
                email: values['email'],
                phoneNumber: values['phoneNumber'],
                isActivated: values['isActivated'],
                role: values['role'],
                password: values['password'],
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
                        <Row>
                            <Col md={6}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="firstName">First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="Enter first name"
                                        value={formik.values.firstName || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.firstName}
                                    />
                                    {formik.errors.firstName && formik.touched.firstName ? (
                                        <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.firstName}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="lastName">Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Enter last name"
                                        value={formik.values.lastName || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.lastName}
                                    />
                                    {formik.errors.lastName && formik.touched.lastName ? (
                                        <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.lastName}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="email">Email</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="email"
                                        name="email"
                                        placeholder="Enter email"
                                        value={formik.values.email || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.email}
                                    />
                                    {formik.errors.email && formik.touched.email ? (
                                        <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="phoneNumber">Phone Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        placeholder="Enter phone number"
                                        value={formik.values.phoneNumber || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.phoneNumber}
                                    />
                                    {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
                                        <Form.Control.Feedback type="invalid">{formik.errors.phoneNumber}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                        </Row>
                        <div className="mb-3">
                            <Form.Label htmlFor="isActivated">Is Activated</Form.Label>
                            <Form.Check
                                type="checkbox"
                                id="isActivated"
                                name="isActivated"
                                checked={formik.values.isActivated || false}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.isActivated && formik.touched.isActivated ? (
                                <div className="text-danger">{formik.errors.isActivated}</div>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="role">Role</Form.Label>
                            <Form.Control
                                as="select"
                                id="role"
                                name="role"
                                value={formik.values.role || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.role}
                            >
                                <option value="">Select Role</option>
                                <option value="Admin">Admin</option>
                                <option value="Staff">Staff</option>
                            </Form.Control>
                            {formik.errors.role && formik.touched.role ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.role}</Form.Control.Feedback>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <Form.Label htmlFor="password">Password</Form.Label>
                            <Form.Control
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter password"
                                value={formik.values.password || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.password}
                            />
                            {formik.errors.password && formik.touched.password ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.password}</Form.Control.Feedback>
                            ) : null}
                        </div>
                        {/* <div className="mb-3">
                            <Form.Label htmlFor="status">Status</Form.Label>
                            <Form.Control
                                as="select"
                                id="status"
                                name="status"
                                value={formik.values.status || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.status}
                            >
                                <option value="">Select Status</option>
                                <option value="Active">Active</option>
                                <option value="Disabled">Disabled</option>
                            </Form.Control>
                            {formik.errors.status && formik.touched.status ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.status}</Form.Control.Feedback>
                            ) : null}
                        </div> */}
                        <div className="hstack gap-2 justify-content-end">
                            <Button type="button" className="btn btn-light" onClick={handleClose}>Close</Button>
                            <Button type="submit" className="btn btn-success" >Add User</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </div>
        </Modal>
    </React.Fragment>
    )
}

export default EditUsers
