import React from 'react';
import logoDark from "../../assets/images/logo-dark.png"
import { Alert, Col, Container, Row , Card, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthCarousel from '../AuthenticationInner/AuthCarousel';
import { useFormik } from 'formik'
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { userForgetPassword } from '../../slices/forgetpwd/thunk'

const ForgotPassword = (props:any) => {
    const dispatch = useDispatch();

    const validation: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Please Enter Your Email"),
        }),
        onSubmit: (values:any) => {
            dispatch(userForgetPassword(values, props.history));
        }
    });

    const selectForgetPassword = createSelector(
        (state: any) => state.ForgetPassword,
        (forgetPassword:any) => ({
            forgetError: forgetPassword.forgetError,
            forgetSuccessMsg: forgetPassword.forgetSuccessMsg,
        })
    );

    const { forgetError, forgetSuccessMsg } = useSelector(selectForgetPassword);
    document.title = "Forgot Password | Ajex Admin & Dashboard Template";

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
                                                            <h5 className="mb-0">Forgot Password?</h5>
                                                            <p className="text-muted mt-2">Reset password with Ajex</p>
                                                        </div>

                                                        <div className="text-center my-5">
                                                            <div className="alert alert-borderless alert-warning text-center mb-2 mx-2" role="alert">
                                                                Enter your email and instructions will be sent to you!
                                                            </div>
                                                        </div>

                                                       
                                                    
                                                        <div className="mt-4">
                                                        {forgetError && forgetError ? (
                                                                <Alert variant="danger" style={{ marginTop: "13px" }}>
                                                                    {forgetError}
                                                                </Alert>
                                                            ) : null}
                                                            {forgetSuccessMsg ? (
                                                                <Alert variant="success" style={{ marginTop: "13px" }}>
                                                                    {forgetSuccessMsg}
                                                                </Alert>
                                                            ) : null}
                                                                <Form action=''
                                                                onSubmit={(e) => {
                                                                    e.preventDefault();
                                                                    validation.handleSubmit();
                                                                    return false;
                                                                }}>                                                            
                                                                
                                                                <Form.Group className="mb-3">
                                                                <Form.Label>Email or username</Form.Label>
                                                                    <Form.Control
                                                                        type="email"
                                                                        name='email'
                                                                        className="form-control bg-light border-light password-input"
                                                                        id="email"
                                                                        placeholder="Enter email or username"
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
                    
                                                                <div className="mt-2">
                                                                    <button className="btn btn-primary w-100" type="submit">Send Reset Link</button>
                                                                </div>
                    
                                                                <div className="mt-4 text-center">
                                                                    <div className="signin-other-title">
                                                                        <h5 className="fs-15 mb-3 title">Sign in with</h5>
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
                                                                    <p className="mb-0">Wait, I remember my password...  <Link to="/auth-signin" className="fw-medium text-primary text-decoration-underline">  Click here  </Link> </p>
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
                                            <script>document.write(new Date().getFullYear())</script> Ajex. Crafted with <i className="mdi mdi-heart text-danger"></i> by Digiex Advertising Advertising
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

export default ForgotPassword
