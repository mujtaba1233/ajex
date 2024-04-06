import { useFormik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import * as Yup from "yup";

import { editPayment as onEditPayment } from '../../slices/thunk';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import moment from 'moment';
import FlatPickr from 'react-flatpickr';

interface paymenteditProps {
    isShow: any,
    handleClose: any,
    edit: any,
    // isEdit: any
}

const EditPayment = ({ isShow, handleClose, edit }: paymenteditProps) => {
    const dispatch = useDispatch();

    const formik: any = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: (edit && edit.id) || '',
            member: (edit && edit.member) || '',
            date: (edit && edit.date) || '',
            paymentDetails: (edit && edit.paymentDetails) || '',
            paymentType: (edit && edit.paymentType) || '',
            amount: (edit && edit.amount) || '',
            status: (edit && edit.status) || ''
        },
        validationSchema: Yup.object({
            member: Yup.string().required("Please Enter Member Name"),
            date: Yup.string().required('Please Select date'),
            paymentDetails: Yup.string().required('Please Enter payment detail'),
            paymentType: Yup.string().required("Please choose Your Payment type"),
            amount: Yup.string().required('Please Enter amount'),
            status: Yup.string().required("Please choose Your status")
        }),

        onSubmit: (values: any) => {
            const UpdatePayment = {
                id: values.id,
                member: values.member,
                date: values.date,
                paymentDetails: values.paymentDetails,
                paymentType: values.paymentType,
                amount: values.amount,
                status: values.status
            }

            dispatch(onEditPayment(UpdatePayment));
            formik.resetForm();
            
        }
    });
  return (
    <React.Fragment>
      <Modal centered show={isShow} onHide={handleClose} style={{ display: "block" }} tabIndex={-1}>
                <div className="modal-content border-0">
                    <Modal.Header className="p-4 pb-0">
                        <Modal.Title as="h5">Edit Payment Details</Modal.Title>
                        <button type="button" className="btn-close" onClick={handleClose}></button>
                    </Modal.Header>
                    <Modal.Body className="p-4">
                        <Form autoComplete="off" onSubmit={formik.handleSubmit}>                            
                            <div className="mb-3">
                                <Form.Label htmlFor="users">Member</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="memberName"
                                    name="member"
                                    placeholder="Enter member name"
                                    value={formik.values.member || ''}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    isInvalid={!!formik.errors.member}
                                />
                                {formik.errors.member && formik.touched.member ? (
                                    <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.member}</Form.Control.Feedback>
                                ) : null}
                            </div>
                                                      
                            <Row>
                                <Col lg={6}>
                                    <div className="mb-3">
                                        <Form.Label htmlFor="Name">Date</Form.Label>
                                        <FlatPickr
                                            className="form-control"
                                            id="date"
                                            name="date"
                                            placeholder="Select date"
                                            options={{
                                                mode: "single",
                                                dateFormat: 'd M, Y',
                                            }}
                                            onChange={(date: any) => formik.setFieldValue("date", moment(date[0]).format("DD MMMM ,YYYY"))}
                                            value={formik.values.date || ''}
                                        />
                                        {formik.errors.date && formik.touched.date ? (
                                            <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.date}</Form.Control.Feedback>
                                        ) : null}
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="mb-3">
                                        <label htmlFor="payment type" className="form-label">Payment Type</label>                                       
                                        <Form.Select
                                            id="paymentType"
                                            name="paymentType"
                                            placeholder="Select Payment type"
                                            value={formik.values.paymentType || ''}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            isInvalid={!!formik.errors.paymentType}
                                        >
                                            <option disabled>Select Payment Type</option>
                                            <option value="Credit Card">Credit Card</option>
                                            <option value="Google Pay">Google Pay</option>
                                            <option value="Cash">Cash</option>
                                            <option value="Bank Transfer">Bank Transfer</option>
                                        </Form.Select>
                                        {formik.errors.paymentType && formik.touched.paymentType ? (
                                            <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.paymentType}</Form.Control.Feedback>
                                        ) : null}
                                    </div>
                                </Col>
                            </Row>
                            <div className="mb-3">
                                <Form.Label htmlFor="Payment Details">Payment Details</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="PaymentDetails"
                                    name="paymentDetails"
                                    placeholder="Enter Payment Details"
                                    value={formik.values.paymentDetails || ''}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    isInvalid={!!formik.errors.paymentDetails}
                                />
                                {formik.errors.paymentDetails && formik.touched.paymentDetails ? (
                                    <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.paymentDetails}</Form.Control.Feedback>
                                ) : null}
                            </div>
                            <Row>
                                <Col lg={6}>
                                    <div className="mb-3">
                                        <Form.Label htmlFor="Name">Amount</Form.Label>
                                        <Form.Control                                            
                                            id="amount"
                                            name="amount"
                                            placeholder="Enter amount"
                                            value={formik.values.amount || ''}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            isInvalid={!!formik.errors.amount}
                                        />
                                        {formik.errors.amount && formik.touched.amount ? (
                                            <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.amount}</Form.Control.Feedback>
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
                                            <option value="Paid">Paid</option>
                                            <option value="Pending">Pending</option>
                                            <option value="Failed">Failed</option>
                                        </Form.Select>
                                        {formik.errors.status && formik.touched.status ? (
                                            <Form.Control.Feedback type="invalid" className='d-block'>{formik.errors.status}</Form.Control.Feedback>
                                        ) : null}
                                    </div>
                                </Col>
                            </Row>
                            <div className="hstack gap-2 justify-content-end">
                                <Button type="button" className="btn btn-light" onClick={handleClose}>Close</Button>
                                <Button type="submit" className="btn btn-success" onClick={handleClose}>Edit Payment</Button>
                            </div>

                        </Form>
                    </Modal.Body>
                </div>
            </Modal>
    </React.Fragment>
  )
}

export default EditPayment
