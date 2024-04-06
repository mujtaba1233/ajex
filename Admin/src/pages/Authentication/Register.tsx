import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row,Form,Alert, Button,InputGroup, Spinner} from 'react-bootstrap'
import {  Link,useNavigate } from 'react-router-dom'
import AuthCarousel from '../AuthenticationInner/AuthCarousel';
import logoDark from "../../assets/images/logo-dark.png";
import { useFormik } from 'formik'
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { apiError, registerUser, resetRegisterFlag } from '../../slices/register/thunk';

const Register = () => {
    document.title = "Register | Invoika Admin & Dashboard Template";

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [passwordShow, setPasswordShow] = useState<any>(false);
    const [timer, setTimer] = useState<number>(0);
    const [loader, setLoader] = useState<boolean>(false);


    const validation: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            email: '',
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Please Enter Email"),
            username: Yup.string().required("Please Enter Username"),
            password: Yup.string().required("Please Enter Password").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
        }),
        onSubmit: (values:any) => {
            dispatch(registerUser(values));
            setLoader(true)
        }
    });
    const selectAccount = createSelector(
        (state: any) => state.Account,
        (account:any) => ({
            success: account.success,
            error: account.error,
        })
    );

    const { error, success } = useSelector(selectAccount);

    useEffect(() => {
        dispatch(apiError());
    }, [dispatch]);

    useEffect(() => {
        if (success) {
            setTimeout(() => navigate("/login"), 3000);
            setTimer(3)
        }

        setTimeout(() => {
            dispatch(resetRegisterFlag());
        }, 3000);

        setLoader(false)
    }, [dispatch, success, error, navigate]);


    useEffect(() => {
        if (timer) {
            setInterval(() => setTimer(timer - 1), 1000);
        }
    }, [timer])
  return (
    <React.Fragment>
      <div className="account-pages">
            <Container>
                <Row className="justify-content-center">
                    <Col md={11}>
                        <div className="auth-full-page-content d-flex min-vh-100 py-sm-5 py-4">
                            <div className="w-100">
                                <div className="d-flex flex-column h-100 py-0 py-xl-4">
    
                                    <div className="text-center mb-5">
                                        <Link to="/">
                                            <span className="logo-lg">
                                                <img src={logoDark} alt="" height="21" />
                                            </span>
                                        </Link>
                                    </div>
    
                                    <Card className="my-auto overflow-hidden">
                                            <Row className="g-0">
                                                <Col lg={6}>
                                                    <div className="p-lg-5 p-4">
                                                        <div className="text-center">
                                                            <h5 className="mb-0">Create New Account</h5>
                                                            <p className="text-muted mt-2">Get your free Invoika account now</p>
                                                        </div>
                                                    
                                                        <div className="mt-4">
                                                        {success && <Alert variant="success">Your Redirect to Login Page in {timer} Seconds</Alert>}
                                                        <Form className="needs-validation"
                                                            action="#"
                                                            onSubmit={(e) => {
                                                                e.preventDefault();
                                                                validation.handleSubmit();
                                                                return false;
                                                            }}>
                                                            <Form.Group className="mb-3" controlId="useremail">
                                                                <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                                                                <Form.Control
                                                                    type="email"
                                                                    name='email'
                                                                    className="form-control bg-light border-light"
                                                                    placeholder="Enter email address"
                                                                    onChange={validation.handleChange}
                                                                    onBlur={validation.handleBlur}
                                                                    value={validation.values.email || ""}
                                                                    isInvalid={
                                                                        validation.touched.email && validation.errors.email ? true : false
                                                                    }
                                                                />
                                                                {validation.touched.email && validation.errors.email ? (
                                                                    <Form.Control.Feedback type="invalid">{validation.errors.email}</Form.Control.Feedback>
                                                                ) : null}

                                                            </Form.Group>

                                                            <Form.Group className="mb-3" controlId="username">
                                                                <Form.Label>Username <span className="text-danger">*</span></Form.Label>
                                                                <Form.Control
                                                                    type="text"
                                                                    className="form-control bg-light border-light"
                                                                    placeholder="Enter username"
                                                                    onChange={validation.handleChange}
                                                                    onBlur={validation.handleBlur}
                                                                    value={validation.values.username || ""}
                                                                    isInvalid={
                                                                        validation.touched.username && validation.errors.username ? true : false
                                                                    }

                                                                />
                                                                {validation.touched.username && validation.errors.username ? (
                                                                    <Form.Control.Feedback type="invalid">{validation.errors.username}</Form.Control.Feedback>
                                                                ) : null}

                                                            </Form.Group>

                                                            <Form.Group className="mb-3">
                                                                <Form.Label htmlFor="password-input">Password <span className="text-danger">*</span></Form.Label>
                                                                <InputGroup className="position-relative auth-pass-inputgroup">
                                                                    <Form.Control onPaste={(e) => e.preventDefault()} placeholder="Enter password" id="password-input" type={!passwordShow ? "password" : "text"}
                                                                        name="password"
                                                                        onChange={validation.handleChange}
                                                                        onBlur={validation.handleBlur}
                                                                        value={validation.values.password || ""}
                                                                        isInvalid={
                                                                            validation.touched.password && validation.errors.password ? true : false
                                                                        }
                                                                    />
                                                                    <Button variant="link" className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon" onClick={() => setPasswordShow(!passwordShow)}><i className="ri-eye-fill align-middle"></i></Button>
                                                                    {validation.touched.password && validation.errors.password ? (
                                                                        <Form.Control.Feedback type="invalid"><div>{validation.errors.password}</div></Form.Control.Feedback>
                                                                    ) : null}
                                                                </InputGroup>
                                                            </Form.Group>
                    
                                                                <div className="fs-16 pb-2">
                                                                    <p className="mb-0 fs-14 text-muted fst-italic">By registering you agree to the Invoika <Link to="#" className="text-primary text-decoration-underline fst-normal fw-medium">Terms of Use</Link></p>
                                                                </div>
                    
                                                                <div className="mt-2">
                                                                    <button className="btn btn-primary w-100" type="submit">
                                                                    {loader && <Spinner size="sm" animation="border" />} {"  "}
                                                                        Sign Up</button>
                                                                </div>
                    
                                                                <div className="mt-4 text-center">
                                                                    <div className="signin-other-title">
                                                                        <h5 className="fs-15 mb-3 title">Create account with</h5>
                                                                    </div>
                                    
                                                                    <ul className="list-inline">
                                                                        <li className="list-inline-item">
                                                                            <Link to="#" className="social-list-item bg-primary text-white border-primary">
                                                                                <i className="mdi mdi-facebook"></i>
                                                                            </Link>
                                                                        </li>
                                                                        <li className="list-inline-item">
                                                                            <Link to="#" className="social-list-item bg-info text-white border-info">
                                                                                <i className="mdi mdi-twitter"></i>
                                                                            </Link>
                                                                        </li>
                                                                        <li className="list-inline-item">
                                                                            <Link to="#" className="social-list-item bg-danger text-white border-danger">
                                                                                <i className="mdi mdi-google"></i>
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                    
                                                                <div className="mt-4 text-center">
                                                                    <p className="mb-0">Don't have an account ? <Link to="/login" className="fw-medium text-primary text-decoration-underline"> Signin </Link> </p>
                                                                </div>
                                                            </Form>
                                                        </div>
                                    
                                                    </div>
                                                </Col>
                    
                                               <AuthCarousel/>
                                                
                                        </Row>
                                    </Card>
                                    
                                    
                                    <div className="mt-5 text-center">
                                        <p className="mb-0 text-muted">©
                                            <script>document.write(new Date().getFullYear())</script> Invoika. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand
                                        </p>
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

export default Register
