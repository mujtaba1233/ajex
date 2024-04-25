import React, { useState } from 'react'
import { Card, Col, Container, Row,Form} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from "yup";

import AuthCarousel from './AuthCarousel';
import logoDark from "../../assets/images/logo-dark.png"

const Signup = () => {
  document.title = "Signup | Ajex Admin & Dashboard Template";

  const [passwordShow, setPasswordShow] = useState<boolean>(false);
    const navigate = useNavigate();

    const validation: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            email: "admin@themesbrand.com" || '',
            username: "admin" || '',
            password: "123456" || '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Please Enter Your Email"),
            username: Yup.string().required("Please Enter Your Username"),
            password: Yup.string().required("Please Enter Your Password"),
        }),
        onSubmit: (values:any) => {
            // dispatch(loginUser(values, props.router.navigate));
            navigate("/dashboard")
        }
    });

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
                                                            <p className="text-muted mt-2">Get your free Ajex account now</p>
                                                        </div>
                                                    
                                                        <div className="mt-4">
                                                            <Form action="/" className="auth-input">
                                                                <div className="mb-3">
                                                                    <label htmlFor="email " className="form-label">Email</label>
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
                                                                </div>
                            
                                                                <div className="mb-3">
                                                                    <label htmlFor="username" className="form-label">Username</label>
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
                                                                </div>
                                        
                                                                <div className="mb-2">
                                                                    <label htmlFor="userpassword" className="form-label">Password</label>
                                                                    <div className="position-relative auth-pass-inputgroup mb-3">
                                                                    <Form.Control
                                                                                type={passwordShow ? "text" : "password"}
                                                                                name='password'
                                                                                className="form-control bg-light border-light pe-5 password-input"
                                                                                placeholder="Enter password"
                                                                                value={validation.values.password || ""}
                                                                                onChange={validation.handleChange}
                                                                                onBlur={validation.handleBlur}
                                                                                isInvalid={
                                                                                    validation.touched.password && validation.errors.password ? true : false
                                                                                }
                                                                            />
                                                                            {validation.touched.password && validation.errors.password ? (
                                                                                <Form.Control.Feedback type="invalid">{validation.errors.password}</Form.Control.Feedback>
                                                                            ) : null}
                                                                            <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon" onClick={() => setPasswordShow(!passwordShow)}>
                                                                                <i className="ri-eye-fill align-middle"></i>
                                                                            </button>
                                                                   </div>
                                                                </div>
                    
                                                                <div className="fs-16 pb-2">
                                                                    <p className="mb-0 fs-14 text-muted fst-italic">By registering you agree to the Ajex <Link to="#" className="text-primary text-decoration-underline fst-normal fw-medium">Terms of Use</Link></p>
                                                                </div>
                    
                                                                <div className="mt-2">
                                                                    <button className="btn btn-primary w-100" type="submit">Sign Up</button>
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
                                                                    <p className="mb-0">Don't have an account ? <Link to="/auth-signin" className="fw-medium text-primary text-decoration-underline"> Signin </Link> </p>
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
                                            <script>document.write(new Date().getFullYear())</script> Ajex. Crafted with <i className="mdi mdi-heart text-danger"></i> by Digiex Advertising
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

export default Signup
