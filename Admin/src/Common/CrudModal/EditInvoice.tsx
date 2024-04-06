import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import dummy from "../../assets/images/users/user-dummy-img.jpg"

import * as Yup from "yup";

import { editClientInvoices as onEditClientInvoices } from '../../slices/thunk';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import moment from 'moment';
import FlatPickr from 'react-flatpickr'

interface invoiceeditProps {
    isShow: any,
    handleClose: any,
    edit: any
}

const EditInvoice = ({ isShow, handleClose, edit }: invoiceeditProps) => {


    // image
    const [selectedImage, setSelectedImage] = useState<any>();

    const handleImageChange = (event: any) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e: any) => {
        formik.setFieldValue('clientImage', e.target.result);
        setSelectedImage(e.target.result);
        };
        reader.readAsDataURL(file);
    };

    const dispatch = useDispatch();

    const formik: any = useFormik({

        enableReinitialize: true,

        initialValues: {
            id: (edit && edit.id) || '',
            invoiceId: (edit && edit.invoiceId) || '',
            clientImage: (edit && edit.clientImage) || '',
            clientName: (edit && edit.clientName) || '',
            email: (edit && edit.email) || '',
            date: (edit && edit.date) || '',            
            billed: (edit && edit.billed) || '',
            status: (edit && edit.status) || ''
        },
        
        validationSchema: Yup.object({
            invoiceId: Yup.string().required("Please Enter Your Invoice Id"),
            clientImage: Yup.string().required("Please select an image"),
            clientName: Yup.string().required("Please Enter Your Client Name"),
            email: Yup.string().email().matches(/^(?!.*@[^,]*,)/).required("Please Enter Your Email"),
            date: Yup.string().required("Please Enter Your Date"),
            billed: Yup.number().required("Please Enter Your Billed amount"),
            status: Yup.string().required("Please Enter Your status"),
        }),

        onSubmit: (values: any) => {
            let newid = values.id;
            const updateinvoice = {
                id: newid,
                invoiceId: values.invoiceId,
                clientImage: values.clientImage,
                clientName: values.clientName,
                email: values.email,
                date: values.date,                
                billed: values.billed,
                status: values.status
            }
            dispatch(onEditClientInvoices(updateinvoice));            
            formik.resetForm();
        }

    })

    useEffect(() => {       
        setSelectedImage(edit?.clientImage);
    }, [edit])

    
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
                        <div className="text-center">
                        <div className="position-relative d-inline-block">
                        <div className="position-absolute bottom-0 end-0">
                                <Form.Label htmlFor="customer-image-input" className="mb-0" data-bs-toggle="tooltip" data-bs-placement="right" title="Select Image">
                                <div className="avatar-xs cursor-pointer">
                                    <div className="avatar-title bg-light border rounded-circle text-muted">
                                    <i className="ri-image-fill"></i>
                                    </div>
                                </div>
                                </Form.Label>
                                <Form.Control name="clientImage" className="form-control d-none" value="" id="customer-image-input" type="file" accept="image/png, image/gif, image/jpeg" onChange={handleImageChange} />
                            </div>
                            <div className="avatar-lg p-1">
                                <div className="avatar-title bg-light rounded-circle">
                                <img src={selectedImage || dummy} alt="" id="customer-img" className="avatar-md rounded-circle object-cover" />
                                </div>
                            </div>
                            </div>
                            {formik.errors.clientImage && formik.touched.clientImage ? (
                            <Form.Control.Feedback type="invalid" className='d-block'> {formik.errors.clientImage} </Form.Control.Feedback>
                            ) : null}
                        </div>
                                 <div className="mb-3">
                                    <Form.Label htmlFor="Invoices">Invoice ID</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="InvoiceId-input"
                                        name="invoiceId"
                                        placeholder="Enter Your Id"
                                        value={formik.values.invoiceId || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.invoiceId}
                                    />
                                    {formik.errors.invoiceId && formik.touched.invoiceId ? (
                                        <Form.Control.Feedback type="invalid">{formik.errors.invoiceId}</Form.Control.Feedback>
                                    ) : null}
                                </div>   
                        <div className="mb-3">
                            <Form.Label htmlFor="Customer-Name-input">Customer Name<span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                id="Customer-Name-input"
                                name="clientName"
                                placeholder="Enter customer Name"
                                value={formik.values.clientName || ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={!!formik.errors.clientName}
                            />
                            {formik.errors.clientName && formik.touched.clientName ? (
                                <Form.Control.Feedback type="invalid">{formik.errors.clientName}</Form.Control.Feedback>
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
                            <Form.Label htmlFor="create-date-input" >Date<span className="text-danger">*</span></Form.Label>
                            <FlatPickr
                                className="form-control"
                                id="date-input"
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
                        <Row>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="Billed-input" >Biiled<span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="number"
                                        id="Amount-input"
                                        name="billed"
                                        placeholder="Enter Your Billed Amount"
                                        value={formik.values.billed || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.billed}
                                    />
                                    {formik.errors.billed && formik.touched.billed ? (
                                        <Form.Control.Feedback type="invalid">{formik.errors.billed}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Form.Label htmlFor="Status-input" >Status<span className="text-danger">*</span></Form.Label>
                                    <Form.Select
                                        id="Amount-input"
                                        name="status"
                                        placeholder="Enter Status"
                                        value={formik.values.status || ''}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        isInvalid={!!formik.errors.status}
                                    >
                                        <option>select Status</option>
                                        <option value="Paid">Paid</option>
                                        <option value="Unpaid">Unpaid</option>
                                        <option value="Refund">Refund</option>
                                        <option value="Cancel">Cancel</option>
                                    </Form.Select>
                                    {formik.errors.status && formik.touched.status ? (
                                        <Form.Control.Feedback type="invalid">{formik.errors.status}</Form.Control.Feedback>
                                    ) : null}
                                </div>
                            </Col>
                        </Row>    
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

export default EditInvoice