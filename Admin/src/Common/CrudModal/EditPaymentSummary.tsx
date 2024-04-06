import { useFormik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';

import * as Yup from "yup";

import { editPaymentSummary as onEditPaymentSummary } from '../../slices/thunk';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import moment from 'moment';
import FlatPickr from 'react-flatpickr'

interface invoiceeditProps {
    isShow: any,
    handleClose: any,
    edit: any
}

const EditPaymentSummary = ({ isShow, handleClose, edit }: invoiceeditProps) => {



    const dispatch = useDispatch();

    const formik: any = useFormik({

        enableReinitialize: true,

        initialValues: {
            id: (edit && edit.id) || '',
            date: (edit && edit.date) || '',
            invoiceID: (edit && edit.invoiceID) || '',
            client: (edit && edit.client) || '',
            billed: (edit && edit.billed) || '',
            paymentType: (edit && edit.paymentType) || ''
        },
        validationSchema: Yup.object({
            date: Yup.string().required("Please Enter Your Date"),
            invoiceID: Yup.string().required("Please Enter Your Id"),
            client: Yup.string().required("Please Enter Client Name"),            
            billed: Yup.string().required("Please Enter Your biiled amount"),
            paymentType: Yup.string().required("Please choose Your payment type"),
        }),

        onSubmit: (values: any) => {
            let newid = values.id;
            const editpaymentSummary = {
                id: newid,
                invoiceID: `Lec-${newid}`,
                date: values.date,
                client: values.client,
                billed: values.billed,
                paymentType: values.paymentType
            }                     
            dispatch(onEditPaymentSummary(editpaymentSummary));            
            formik.resetForm();           
        }

    })

    
    return (
        <React.Fragment>            
            <Modal centered show={isShow} onHide={handleClose} style={{display: "block"}} tabIndex={-1}>            
            <div className="modal-content border-0">
                <Modal.Header className="p-4 pb-0">
                    <Modal.Title as="h5">Edit Payment Summary</Modal.Title>
                    <button type="button" className="btn-close" onClick={handleClose}></button>
                </Modal.Header>
                <Modal.Body className="p-4">
                    <Form autoComplete="off" onSubmit={formik.handleSubmit}>
                        <Row>
                            <Col lg={12}>
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
                                        <Form.Control.Feedback type="invalid">{formik.errors.date}</Form.Control.Feedback>
                                    ) : null}
                                </div>

                                <div className="mb-3">
                                    <Form.Label htmlFor="paymentdetails">Invoice ID</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="Id"
                                        name="invoiceID"
                                        placeholder="Enter Your Id"
                                        value={formik.values.invoiceID || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.invoiceID}
                                    />
                                    {formik.errors.invoiceID && formik.touched.invoiceID ? (
                                        <Form.Control.Feedback type="invalid">{formik.errors.invoiceID}</Form.Control.Feedback>
                                    ) : null}
                                </div>                              

                                <div className="mb-3">
                                    <Form.Label htmlFor="paymentdetails">Client</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="client"
                                        name="client"
                                        placeholder="Enter Your Id"
                                        value={formik.values.client || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.client}
                                    />
                                    {formik.errors.client && formik.touched.client ? (
                                        <Form.Control.Feedback type="invalid">{formik.errors.client}</Form.Control.Feedback>
                                    ) : null}
                                </div>                               

                                <Row>
                                    <div className="col-6">
                                        <div className="mb-4">
                                            <Form.Label htmlFor="billed">Billed</Form.Label>
                                            <Form.Control
                                                type="number"
                                                id="billed"
                                                name="billed"
                                                placeholder="Enter Your Biiled"
                                                value={formik.values.billed || ''}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                isInvalid={!!formik.errors.billed}
                                            />
                                            {formik.errors.billed && formik.touched.billed ? (
                                                <Form.Control.Feedback type="invalid">{formik.errors.billed}</Form.Control.Feedback>
                                            ) : null}
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="mb-4">
                                            <label htmlFor="payment type" className="form-label">Payment Type</label>                                            
                                            <Form.Select
                                                id="paymentType"
                                                name="paymentType"
                                                placeholder="Enter Payment type"
                                                value={formik.values.paymentType || ''}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                isInvalid={!!formik.errors.paymentType}
                                            >
                                                <option>Select Payment Type</option>
                                                <option value="Cash">Cash</option>
                                                <option value="Credit Card">Credit Card</option>
                                                <option value="Google Pay">Google Pay</option>
                                                {formik.errors.paymentType && formik.touched.paymentType ? (
                                                    <Form.Control.Feedback type="invalid">{formik.errors.paymentType}</Form.Control.Feedback>
                                                ) : null}
                                            </Form.Select>
                                        </div> 
                                    </div>
                                </Row>

                                <div className="hstack gap-2 justify-content-end">
                                    <Button type="button" className="btn btn-light" onClick={handleClose}>Close</Button>
                                    <Button type="submit" className="btn btn-success" onClick={handleClose}>Edit Payment Summary</Button>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>     
            </div>        
            </Modal>
        </React.Fragment>
    )
}

export default EditPaymentSummary