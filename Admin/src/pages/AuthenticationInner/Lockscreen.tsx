import React from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import logoDark from "../../assets/images/logo-dark.png";
import avatar4 from "../../assets/images/users/avatar-4.jpg"
import { Link } from 'react-router-dom';
import AuthCarousel from './AuthCarousel';

const Lockscreen = () => {
  document.title = "Lockscreen | Ajex Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="bg-overlay bg-light"></div>
    
    <div className="account-pages">
        <Container >
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
                                            <Col lg={6} >
                                                <div className="p-lg-5 p-4">
                                                    <div className="text-center">
                                                        <h5 className="mb-0">Lock Screen</h5>
                                                        <p className="text-muted mt-2">Enter your password to unlock the screen!</p>
                                                    </div>

                                                    <div className="user-thumb text-center mt-5">
                                                        <img src={avatar4} className="rounded-circle img-thumbnail avatar-lg" alt="thumbnail" />
                                                        <h5 className="fs-15 mt-3">Calvin D</h5>
                                                    </div>
                                                
                                                    <div className="mt-4">
                                                        <div className="mb-2">
                                                            <label htmlFor="userpassword" className="form-label">Password</label>
                                                            <Form.Control type="password" className="pe-5 password-input" placeholder="Enter password" id="password-input" />  
                                                        </div>
                                                    </div>

                                                    <div className="mt-4">
                                                        <button className="btn btn-primary w-100" type="submit">Unlock</button>
                                                    </div>

                                                    <div className="mt-4 text-center">
                                                        <p className="mb-0">Not you ? return <Link to="/auth-signin" className="fw-medium text-primary text-decoration-underline"> Signin </Link> </p>
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

export default Lockscreen
