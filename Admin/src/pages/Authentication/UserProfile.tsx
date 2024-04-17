import React, { useState, useEffect } from "react";
import { Col, Container, Row,Card, Alert, Button, Form  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoDark from "../../assets/images/logo-dark.png"

import { isEmpty } from "lodash";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

//redux
import { useSelector, useDispatch } from "react-redux";

import withRouter from "../../Common/withRouter";

import avatar from "../../assets/images/users/avatar-1.jpg";

// actions
import { createSelector } from "reselect";
import { editProfile, resetProfileFlag } from "../../slices/profile/thunk";

const UserProfile = () => {
  document.title = "User Profile | Ajex Admin & Dashboard Template";

  const dispatch: any = useDispatch();

  const [email, setemail] = useState("admin@gmail.com");
  const [idx, setidx] = useState("1");

  const [userName, setUserName] = useState("Admin");

  const selectLayoutState = (state: any) => state.Profile;
  const userprofileData = createSelector(
    selectLayoutState,
    (state:any) => ({
      user: state.user,
      success: state.success,
      error: state.error
    })
  );
  // Inside your component
  const {
    user, success, error
  } = useSelector(userprofileData);


  useEffect(() => {
    if (sessionStorage.getItem("authUser")) {
      const storedUser = sessionStorage.getItem("authUser");
      if (storedUser) {
        const obj = JSON.parse(storedUser || "{}");

        if (!isEmpty(user)) {
          obj.data.first_name = user.first_name;
          sessionStorage.removeItem("authUser");
          sessionStorage.setItem("authUser", JSON.stringify(obj));
        }

        setUserName(obj.data.first_name || obj.displayName);
        setemail(obj.data.email || obj.email);
        setidx(obj.data._id || "1");

        setTimeout(() => {
          dispatch(resetProfileFlag());
        }, 3000);
      }
    }
  }, [dispatch, user]);



  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      first_name: userName || 'Admin',
      idx: idx || "1",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("Please Enter Your UserName"),
    }),
    onSubmit: (values:any) => {
      dispatch(editProfile(values));
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

                                        <Row>
                                            <Col lg="12">
                                            {error && error ? <Alert variant="danger">{error}</Alert> : null}
                                            {success ? <Alert variant="success">Username Updated To {userName}</Alert> : null}

                                            <Card>
                                                <Card.Body>
                                                <div className="d-flex">
                                                    <div className="mx-3">
                                                    <img
                                                        src={avatar}
                                                        alt=""
                                                        className="avatar-md rounded-circle img-thumbnail"
                                                    />
                                                    </div>
                                                    <div className="flex-grow-1 align-self-center">
                                                    <div className="text-muted">
                                                        <h5>{userName || "admin"}</h5>
                                                        <p className="mb-1">{email}</p>
                                                        <p className="mb-0">Id no: #{idx}</p>
                                                    </div>
                                                    </div>
                                                </div>
                                                </Card.Body>
                                            </Card>
                                            </Col>
                                        </Row>

                                        <h4 className="card-title mb-4">Change User Name</h4>

                                        <Card>
                                            <Card.Body>
                                            <Form
                                                className="form-horizontal"
                                                onSubmit={(e) => {
                                                e.preventDefault();
                                                validation.handleSubmit();
                                                return false;
                                                }}
                                            >
                                                <div className="form-group">
                                                <Form.Label>User Name</Form.Label>
                                                <Form.Control
                                                    name="first_name"
                                                    className="form-control"
                                                    placeholder="Enter User Name"
                                                    type="text"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.first_name || ""}
                                                    isInvalid={
                                                    validation.touched.first_name && validation.errors.first_name ? true : false
                                                    }
                                                />
                                                {validation.touched.first_name && validation.errors.first_name ? (
                                                    <Form.Control.Feedback type="invalid">{validation.errors.first_name}</Form.Control.Feedback>
                                                ) : null}
                                                <Form.Control name="idx" value={idx} type="hidden" />
                                                </div>
                                                <div className="text-center mt-4">
                                                <Button type="submit" variant="danger">
                                                    Update User Name
                                                </Button>
                                                </div>
                                            </Form>
                                            </Card.Body>
                                        </Card>

                                        <div className="mt-5 text-center">
                                            <p className="mb-0 text-muted">
                                                &copy; {new Date().getFullYear()} Ajex. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand
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

export default withRouter(UserProfile);
