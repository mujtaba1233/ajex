import React, { useState, useEffect, useRef } from 'react'
import BreadCrumb from '../../../Common/BreadCrumb'
import { Alert, Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap';

import logoDark from "../../../assets/images/logo-dark.png";
import logoLight from "../../../assets/images/logo-light.png"
import { Link, useParams } from 'react-router-dom';
import Select from 'react-select';
import { useFormik } from 'formik'
import * as Yup from "yup";
import Flatpickr from "react-flatpickr";
import FormFileupload from '../../Components/Forms/FileUpload/FormFileupload';
import { useDispatch } from 'react-redux';
import { addOrEditClientInvoices } from '../../../slices/thunk';
import { useProfile } from '../../../Hooks/UserHooks';

const lineOfBusinessOptions = [
    { label: "Default", value: "000000" },
    { label: "CEO Office", value: "CEO001" },
    { label: "Clearence", value: "CLEARN" },
    { label: "Corporate", value: "CORP01" },
    { label: "Couriers", value: "COS001" },
    { label: "Default", value: "DEF000" },
    { label: "Default", value: "DEF001" },
    { label: "Express", value: "EXPRES" },
    { label: "Freight Forwarding", value: "FREGHT" },
    { label: "Fulfillment", value: "FULFIL" },
    { label: "Gateway", value: "GATWAY" },
    { label: "International Road Service", value: "IRS001" },
    { label: "Pharma Freight Forwarding", value: "PHMFFD" },
    { label: "Pharma IRS", value: "PHMIRS" },
    { label: "Pharma Transportation (Land Freight)", value: "PHMLFD" },
    { label: "Pharma Warehouse", value: "PHMWHS" },
    { label: "RETAIL", value: "RETAIL" },
    { label: "Saudi Logistics Academy", value: "SLA001" },
    { label: "Solutions Business", value: "SLDBUS" },
    { label: "Solutions - Transportation", value: "TRANSP" },
    { label: "Warehousing", value: "WARHOU" }
];


const capex = [
    { "label": "Vehicles", "value": "VEH" },
    { "label": "Leasehold Improvement", "value": "Leasehold Improvement" },
    { "label": "Materials and Equipments", "value": "MHE" },
    { "label": "Laptop, Computers and accs.", "value": "IT Equipments" },
    { "label": "Office Equipments", "value": "Office Equipments" },
    { "label": "Furnitures", "value": "Furnitures" },
    { "label": "User Input", "value": "Others" }
]

const opex = [
    { "label": "AJEX Sponsored Staff", "value": "Payroll - AJEX Sponsored Staff" },
    { "label": "Final Settlements, Quick Pay Salaries", "value": "Final Settlements, Quick Pay Salaries" },
    { "label": "Non AJEX Staff", "value": "Payroll - Non AJEX Staff" },
    { "label": "Invoice Payments for Outsourced - Non AJEX Staff", "value": "Invoice Payments for Outsourced - Non AJEX Staff" },
    { "label": "Iqama, Work Permit and Other Governmental Payments", "value": "Iqama and Govt. Payments" },
    { "label": "Crowdsource Staff Payment", "value": "Crowdsource Staff Payment" },
    { "label": "GOSI Monthly Invoice Payment", "value": "GOSI Monthly Invoice Payment" },
    { "label": "Travel and Hotel Invoices", "value": "Vacation and New joining Tickets Invoices" },
    { "label": "Accomodation of Couriers and other staff Invoices", "value": "Accomodation of Couriers and other staff Invoices" },
    { "label": "Freight Forwarding Payments", "value": "Freight Forwarding Payments" },
    { "label": "Leased Vehicles Payments", "value": "Leased Vehicles Payments" },
    { "label": "Outsourced Trucks and Adhoc Trucks Payments", "value": "Outsourced Trucks and Adhoc Trucks Payments" },
    { "label": "Vehicle Fuel Payments", "value": "Vehicle Fuel Payments" },
    { "label": "Audit Fees Payment", "value": "Audit Fees Payment" },
    { "label": "Communication Payments, Subscriptions, Electricity and Other Utilities", "value": "Communication & Utilities Payment" },
    { "label": "Offices, Hubs, Warehouse Rental Payments", "value": "Rental Payments" },
    { "label": "Other Payments - User Input Required", "value": "Miscellaneous Payments" }
]

const departmentOptions = [
    { label: "Marketing & Customer Experience", value: "MKT001" },
    { label: "Marketing & Communications", value: "MKT002" },
    { label: "Business Analysis, Product & Pricing", value: "MKT003" },
    { label: "Operations Audit", value: "OPA001" },
    { label: "Operation Management", value: "OPR001" },
    { label: "Operations", value: "OPS001" },
    { label: "PMO", value: "PMO001" },
    { label: "Procurement", value: "PRO001" },
    { label: "Public Relations", value: "PUR001" },
    { label: "Quality and Compliance", value: "QAC001" },
    { label: "Sales", value: "SAL001" },
    { label: "Service Center", value: "SC0001" },
    { label: "Solutions Logistics", value: "SLD001" },
    { label: "Shared Services", value: "SSD001" },
    { label: "HR - Operations & Administration", value: "SSD002" },
    { label: "HR - Talent Acquisition & Onboarding", value: "SSD003" },
    { label: "HR - Learning & Organizational Development", value: "SSD004" },
    { label: "HR - Compensation & Benefit", value: "SSD005" },
    { label: "Human Resources", value: "SSD006" },
    { label: "Procurement - Shared Services", value: "SSD007" },
    { label: "Facilities Management", value: "SSD008" },
    { label: "Saudi Logistics Academy", value: "SSD009" },
    { label: "Strategy & Planning", value: "STP001" }
];

const AddInvoice = () => {

    document.title = "New Invoice | Invoika Admin & Dashboard Template";
    const [otherExpense, setOtherExpense] = useState('');
    const [ispaymentStatus, setispaymentStatus] = useState<any>({ label: "Pending", value: "Pending" });
    const [expenseType, setExpenseType] = useState('');
    const [date, setDate] = useState('');
    const [expenseValues, setExpenseValues] = useState<any>([]);
    const [selectedFiles, setselectedFiles] = useState([]);

    const [selectedExpense, setSelectedExpense] = useState<any>();
    const [totalAmount, setTotalAmount] = useState<number>(0);

    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [lob, setLob] = useState<any>();
    const [departmentName, setDepartmentName] = useState<any>();
    const dispatch = useDispatch()
    const { token } = useProfile();

    function handleispaymentStatus(selectedOption: any) {
        setispaymentStatus(selectedOption);
    }
    const handleExpenseTypeChange = (e: any) => {
        setExpenseType(e.target.value);
        if (e.target.value === 'capex') {
            setExpenseValues([{ options: capex }]); // Resetting selected value if Capex or Opex is selected
        } else {
            setExpenseValues([{ options: opex }]); // Resetting selected value if Capex or Opex is selected
        }
    };

    const paymentstatus = [
        {
            options: [
                { label: "Pending", value: "Pending" },
                { label: "Approved", value: "Approved" },
                { label: "Declined", value: "Declined" }
            ],
        },
    ];


    const lineOfBusiness = [
        {
            options: lineOfBusinessOptions,
        },
    ];
    const dateformate = (e: string) => {
        // Convert the ISO date string to a Date object
        const date = new Date(e);

        // Format the date
        const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

        console.log(formattedDate, "This is the date");

        // Assuming setDate is a function to update the date state
        setDate(formattedDate);
    };
    const initialValues = id ? {} : {
        supplierVatNumber: "",
        supplierName: "",
        supplierBankDetails: '',
        supplierNationalAddress: "",
        invoiceNumber: "",
        description: "",
        priority: "",
    };

    const validationSchema = Yup.object().shape({
        supplierName: Yup.string().required("Please Enter a Company Address"),
        supplierNationalAddress: Yup.string().required("Please Enter a supplierNationalAddress"),
        supplierVatNumber: Yup.string().required("Please Enter a Postal Code"),
        supplierBankDetails: Yup.string().required("Please Enter a supplierBankDetails"),
        description: Yup.string().required("Please Enter a Description"),
        invoiceNumber: Yup.string(),
        priority: Yup.string().required("Please Enter a Phone Number"),
    });


    const onSubmit = (values: any) => {
        const { description, priority, ...supplierInformation } = values;
        const body = {
            supplierInformation,
            invoiceDetail: {
                id, // Replace with actual ID if needed
                date,
                status: ispaymentStatus.value,
                amount: totalAmount
            },
            additionalInformation: {
                typeOfExpense: selectedExpense.value,
                lineOfBusiness: lob.value,
                departmentName: departmentName.value,
                description,
                attachments: selectedFiles,  // Add selected files here
                expenseType,
                priority
            }
        };

        dispatch(addOrEditClientInvoices(body));
    };

    const validation = useFormik({
        enableReinitialize: true,
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: onSubmit
    });


    useEffect(() => {
        const fetchDataById = async (id: any) => {
            try {
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
                const response = await fetch(`${process.env.REACT_APP_API_URL}/invoices/${id}`, config);
                const data = await response.json();
                console.log(data)
                // Update initialValues with fetched data
                const updatedInitialValues = {
                    supplierVatNumber: data.supplierId.supplierVatNumber,
                    supplierName: data.supplierId.supplierName,
                    invoiceNumber: data.invoiceNumber,
                    supplierBankDetails: data.supplierId.supplierBankDetails,
                    supplierNationalAddress: data.supplierId.supplierNationalAddress,
                    description: data.description,
                    priority: data.priority
                };
                setTotalAmount(data.amount)
                dateformate(data.createdAt)
                const status = paymentstatus[0].options.find(el => el.value == data.status)
                handleispaymentStatus(status);
                setExpenseType(data.expenseType)
                const selectedExpense = data.expenseType == 'capex' ? capex.find(el => el.value === data.typeOfExpense) : opex.find(el => el.value === data.typeOfExpense);
                setSelectedExpense(selectedExpense);
                const selectedDepartment = departmentOptions.find(el => el.value === data.departmentName);
                setDepartmentName(selectedDepartment);
                const selectedLineOfBusiness = lineOfBusinessOptions.find(el => el.value === data.lineOfBusiness);
                setLob(selectedLineOfBusiness);
                // Update selected files
                if (data.attachments && data.attachments.length) {
                    const attachments = data.attachments.map((attachment: any) => ({
                        name: attachment.name,
                        data: attachment.data
                    }));
                    setselectedFiles(attachments);
                }

                // Set the updated initialValues
                validation.setValues(updatedInitialValues);

                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        if (id) {
            fetchDataById(id);
        } else {
            setLoading(false);
        }
    }, [id]);
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb pageTitle="Invoice" title="New Invoice" />
                    <Row className="justify-content-center">
                        <Col xxl={9}>
                            <Card>
                                <Form onSubmit={validation.handleSubmit} className="needs-validation" id="invoice_form">
                                    <Card.Body className="border-bottom border-bottom-dashed p-4">
                                        <Row>
                                            <Col lg={6}>
                                                <Row className="g-3">
                                                    <Col lg={8} sm={6}>
                                                        <label htmlFor="invoicenoInput">Invoice No</label>
                                                        <input type="text" className="form-control bg-light border-0" id="invoicenoInput" value={validation.values.invoiceNumber} placeholder="Invoice No" readOnly />
                                                    </Col>

                                                    <Col lg={8} sm={6}>
                                                        <div>
                                                            <label htmlFor="date-field">Date</label>
                                                            <Flatpickr
                                                                name="date"
                                                                id="date-field"
                                                                className="form-control bg-light border-0"
                                                                placeholder="Create Date"
                                                                options={{
                                                                    altInput: true,
                                                                    altFormat: "d M, Y",
                                                                    dateFormat: "d M, Y",
                                                                }}
                                                                disabled={id ? true : false}
                                                                onChange={dateformate}
                                                                value={date|| ""}
                                                            />
                                                            {/* {validation.touched.date && validation.errors.date ? (
                                                                <Form.Control.Feedback type="invalid">{validation.errors.date}</Form.Control.Feedback>
                                                            ) : null} */}
                                                        </div>
                                                    </Col>

                                                    <Col lg={8} sm={6}>
                                                        <label htmlFor="choices-payment-status">Payment Status</label>
                                                        <div className="input-light">
                                                            <Select
                                                                className="bg-light border-0"
                                                                value={ispaymentStatus}
                                                                onChange={handleispaymentStatus}
                                                                options={paymentstatus}
                                                                name="choices-single-default"
                                                                isDisabled={true}
                                                                id="idStatus"
                                                                placeholder="Payment Method"
                                                            />
                                                        </div>
                                                    </Col>

                                                    <Col lg={8} sm={6}>
                                                        <div>
                                                            <label htmlFor="totalamountInput">Total Amount</label>
                                                            <Form.Control
                                                                className="bg-light border-0"
                                                                type="number"
                                                                onChange={(e: any) => setTotalAmount(e.target.value)}
                                                                id="totalamountInput"
                                                                placeholder="$0.00"
                                                                value={totalAmount}
                                                            />
                                                        </div>
                                                    </Col>

                                                </Row>

                                            </Col>

                                            <Col lg={4} className="ms-auto">
                                                <div className="profile-user mx-auto  mb-3">
                                                    <input id="profile-img-file-input" type="file" className="profile-img-file-input" />
                                                    <label htmlFor="profile-img-file-input" className="d-block" tabIndex={0}>
                                                        <span className="overflow-hidden border border-dashed d-flex align-items-center justify-content-center rounded" style={{ height: "60px", width: "256px" }}>
                                                            <img src={logoDark} className="card-logo card-logo-dark user-profile-image img-fluid" alt="logo dark" />
                                                            <img src={logoLight} className="card-logo card-logo-light user-profile-image img-fluid" alt="logo light" />
                                                        </span>
                                                    </label>
                                                </div>


                                                <div>
                                                    <label htmlFor="companyAddress">Supplier Information</label>
                                                </div>
                                                <div className="mb-2">
                                                    <Form.Control
                                                        id="supplierName"
                                                        as="textarea"
                                                        className="bg-light border-0"
                                                        name="supplierName"
                                                        value={validation.values.supplierName || ""}
                                                        onBlur={validation.handleBlur}
                                                        onChange={validation.handleChange}
                                                        placeholder="Supplier Name"
                                                        isInvalid={validation.errors.supplierName && validation.touched.supplierName ? true : false}
                                                    />
                                                    {validation.errors.supplierName && validation.touched.supplierName ? (
                                                        <Form.Control.Feedback type="invalid">{validation.errors.supplierName}</Form.Control.Feedback>
                                                    ) : null}
                                                </div>
                                                <div className="mb-2">
                                                    <Form.Control
                                                        id="companyaddpostalcode"
                                                        className="bg-light border-0"
                                                        name="supplierVatNumber"
                                                        value={validation.values.supplierVatNumber || ""}
                                                        onBlur={validation.handleBlur}
                                                        onChange={validation.handleChange}
                                                        placeholder="Supplier VAT Number"
                                                        isInvalid={validation.errors.supplierVatNumber && validation.touched.supplierVatNumber ? true : false}
                                                    />
                                                    {validation.errors.supplierVatNumber && validation.touched.supplierVatNumber ? (
                                                        <Form.Control.Feedback type="invalid">{validation.errors.supplierVatNumber}</Form.Control.Feedback>
                                                    ) : null}
                                                </div>

                                                <div className="mb-2">
                                                    <Form.Control
                                                        type="supplierNationalAddress"
                                                        className="bg-light border-0"
                                                        id="companyEmail"
                                                        name="supplierNationalAddress"
                                                        value={validation.values.supplierNationalAddress || ""}
                                                        onBlur={validation.handleBlur}
                                                        onChange={validation.handleChange}
                                                        placeholder="Supplier National Address"
                                                        isInvalid={validation.errors.supplierNationalAddress && validation.touched.supplierNationalAddress ? true : false}
                                                    />
                                                    {validation.errors.supplierNationalAddress && validation.touched.supplierNationalAddress ? (
                                                        <Form.Control.Feedback type="invalid">{validation.errors.supplierNationalAddress}</Form.Control.Feedback>
                                                    ) : null}
                                                </div>
                                                <div className="mb-2">
                                                    <Form.Control
                                                        type="text"
                                                        className="bg-light border-0"
                                                        id="companyWebsite"
                                                        name="supplierBankDetails"
                                                        value={validation.values.supplierBankDetails || ""}
                                                        onBlur={validation.handleBlur}
                                                        onChange={validation.handleChange}
                                                        placeholder="Supplier Bank Details"
                                                        isInvalid={validation.errors.supplierBankDetails && validation.touched.supplierBankDetails ? true : false}
                                                    />
                                                    {validation.errors.supplierBankDetails && validation.touched.supplierBankDetails ? (
                                                        <Form.Control.Feedback type="invalid">{validation.errors.supplierBankDetails}</Form.Control.Feedback>
                                                    ) : null}
                                                </div>
                                            </Col>
                                        </Row>

                                    </Card.Body>
                                    <Card.Body className="p-4 border-top border-top-dashed">
                                        <Row>
                                            <Col lg={4} sm={6}>
                                                <div>
                                                    <label htmlFor="billingName" className="text-muted text-uppercase fw-semibold">Additional Information</label>
                                                </div>
                                                <div className="mb-3">
                                                    <FormFileupload
                                                        setselectedFiles={setselectedFiles as React.Dispatch<React.SetStateAction<any[]>>}
                                                        selectedFiles={selectedFiles as any[]}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="choices-payment-status">Department Name</label>
                                                    <div className="input-light">
                                                        <Select
                                                            className="bg-light border-0"
                                                            value={departmentName}
                                                            onChange={(s: any) => setDepartmentName(s)}
                                                            options={departmentOptions}
                                                            name="choices-single-default"
                                                            id="idStatus"
                                                            placeholder="Department Name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mb-2">
                                                    <Form.Control
                                                        as="textarea"
                                                        type="textarea"
                                                        className="bg-light border-0"
                                                        id="billingAddress"
                                                        name="description"
                                                        value={validation.values.description || ""}
                                                        onBlur={validation.handleBlur}
                                                        onChange={validation.handleChange}
                                                        rows={3}
                                                        placeholder="Desciption"
                                                        isInvalid={validation.errors.description && validation.touched.description ? true : false}
                                                    />
                                                    {validation.errors.description && validation.touched.description ? (
                                                        <Form.Control.Feedback type="invalid">{validation.errors.description}</Form.Control.Feedback>
                                                    ) : null}
                                                </div>
                                                <div className="mb-2">
                                                    <Form.Control
                                                        type="number"
                                                        data-plugin="cleave-phone"
                                                        className="bg-light border-0"
                                                        id="priority"
                                                        name="priority"
                                                        value={validation.values.priority || ""}
                                                        onBlur={validation.handleBlur}
                                                        onChange={validation.handleChange}
                                                        placeholder="Priority"
                                                        isInvalid={validation.errors.priority && validation.touched.priority ? true : false}
                                                    />
                                                    {validation.errors.priority && validation.touched.priority ? (
                                                        <Form.Control.Feedback type="invalid">{validation.errors.priority}</Form.Control.Feedback>
                                                    ) : null}
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="choices-payment-status">Line of Business</label>
                                                    <div className="input-light">
                                                        <Select
                                                            className="bg-light border-0"
                                                            value={lob}
                                                            onChange={(s: any) => setLob(s)}
                                                            options={lineOfBusiness}
                                                            name="choices-single-default"
                                                            id="idStatus"
                                                            placeholder="Line of Business"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mb-2">
                                                    <label htmlFor="expenseType">Expense Type</label>
                                                    <div>
                                                        <input type="radio" id="capex" name="expenseType" value="capex" checked={expenseType === 'capex'} onChange={handleExpenseTypeChange} />
                                                        <label htmlFor="capex">Capex</label>
                                                    </div>
                                                    <div>
                                                        <input type="radio" id="opex" name="expenseType" value="opex" checked={expenseType === 'opex'} onChange={handleExpenseTypeChange} />
                                                        <label htmlFor="opex">Opex</label>
                                                    </div>
                                                </div>
                                                <div className="mb-2">
                                                    <label htmlFor="choices-payment-status">Select Expenses</label>
                                                    <div className="input-light">
                                                        <Select
                                                            className="bg-light border-0"
                                                            value={selectedExpense}
                                                            onChange={(s: any) => setSelectedExpense(s)}
                                                            options={expenseValues}
                                                            name="choices-single-default"
                                                            id="idStatus"
                                                            placeholder="Type of Expense"
                                                            isDisabled={expenseType !== 'capex' && expenseType !== 'opex'}
                                                        />
                                                    </div>
                                                </div>
                                                {selectedExpense?.value === 'Others' && (
                                                    <div className="mb-2">
                                                        <Form.Control
                                                            type="text"
                                                            as="textarea"
                                                            className="bg-light border-0"
                                                            value={otherExpense || ""}
                                                            onChange={(e) => setOtherExpense(e.target.value)}
                                                            placeholder="Other Expenses"
                                                        />
                                                    </div>
                                                )}
                                            </Col>

                                            {/* <Col sm={6} className="ms-auto"> */}
                                            {/* <div>
                                                    <label htmlFor="billingName" className="text-muted text-uppercase fw-semibold">Supplier Information</label>
                                                </div> */}
                                            {/* <Row >
                                                    <div className="col-lg-8">
                                                        <div className="mb-2">
                                                            <label htmlFor="expenseType">Expense Type</label>
                                                            <div>
                                                                <input type="radio" id="capex" name="expenseType" value="capex" checked={expenseType === 'capex'} onChange={handleExpenseTypeChange} />
                                                                <label htmlFor="capex">Capex</label>
                                                            </div>
                                                            <div>
                                                                <input type="radio" id="opex" name="expenseType" value="opex" checked={expenseType === 'opex'} onChange={handleExpenseTypeChange} />
                                                                <label htmlFor="opex">Opex</label>
                                                            </div>
                                                        </div>
                                                        <div className="mb-2">
                                                            <label htmlFor="choices-payment-status">Select Expenses</label>
                                                            <div className="input-light">
                                                                <Select
                                                                    className="bg-light border-0"
                                                                    value={selectedExpense}
                                                                    onChange={(s: any) => setSelectedExpense(s)}
                                                                    options={expenseValues}
                                                                    name="choices-single-default"
                                                                    id="idStatus"
                                                                    placeholder="Type of Expense"
                                                                    isDisabled={expenseType !== 'capex' && expenseType !== 'opex'}
                                                                />
                                                            </div>
                                                        </div>
                                                        {selectedExpense?.value === 'Others' && (
                                                            <div className="mb-2">
                                                                <Form.Control
                                                                    type="text"
                                                                    as="textarea"
                                                                    className="bg-light border-0"
                                                                    value={otherExpense || ""}
                                                                    onChange={(e) => setOtherExpense(e.target.value)}
                                                                    placeholder="Other Expenses"
                                                                />
                                                            </div>
                                                        )}
                                                    </div>
                                                </Row> */}
                                            {/* </Col> */}
                                        </Row>
                                    </Card.Body>
                                    <Card.Body className="p-4">
                                        <div className="hstack gap-2 justify-content-end d-print-none mt-4">
                                            <button type="submit" className="btn btn-info"><i className="ri-printer-line align-bottom me-1"></i> Save</button>
                                            <Link to="#" className="btn btn-primary"><i className="ri-download-2-line align-bottom me-1"></i> Download Invoice</Link>
                                            <Link to="#" className="btn btn-danger"><i className="ri-send-plane-fill align-bottom me-1"></i> Send Invoice</Link>
                                        </div>
                                    </Card.Body>
                                </Form>
                            </Card>
                        </Col>

                    </Row>

                </Container>
            </div>
        </React.Fragment>
    )
}

export default AddInvoice;
