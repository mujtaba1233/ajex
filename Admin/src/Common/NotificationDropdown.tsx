import React from 'react';
import {  Col, Dropdown, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//SimpleBar
import SimpleBar from "simplebar-react";

//import images
import avatar2 from "../assets/images/users/avatar-2.jpg";
import avatar8 from "../assets/images/users/avatar-8.jpg";

const NotificationDropdown = () => {
    return (
        <React.Fragment>
            
            <Dropdown className="dropdown topbar-head-dropdown ms-1 header-item" id="notificationDropdown">
                    
                <Dropdown.Toggle id="notification" type="button" className="btn btn-icon btn-topbar btn-ghost-primary rounded-circle arrow-none">
                    <i className='las la-bell fs-24'></i>
                <span className="position-absolute topbar-badge fs-9 translate-middle badge rounded-pill bg-danger"><span className="notification-badge">3</span><span className="visually-hidden">unread messages</span></span>
                </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">

                        <div className="dropdown-head rounded-top">
                            <div className="p-3 bg-primary bg-pattern">
                                <Row className="align-items-center">
                                    <Col>
                                        <h6 className="m-0 fs-16 fw-semibold text-white"> Notifications </h6>
                                    </Col>
                                    <div className="col-auto dropdown-tabs">
                                        <span className="badge bg-light-subtle text-light  fs-13"> 4 New</span>
                                    </div>
                                </Row>
                            </div>

                            <div className="pt-2">
                                <SimpleBar style={{ maxHeight: "300px" }} className="pe-2">
                                    <div className="text-reset notification-item d-block dropdown-item position-relative">
                                        <div className="d-flex">
                                            <div className="avatar-xs me-3">
                                                <span className="avatar-title bg-info-subtle text-info rounded-circle fs-16">
                                                    <i className="bx bx-badge-check"></i>
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <Link to="#!" className="stretched-link">
                                                    <h6 className="mt-0 fs-14 mb-2 lh-base">Your <b>Elite</b> author Graphic
                                                        Optimization <span className="text-secondary">reward</span> is
                                                        ready!
                                                    </h6>
                                                </Link>
                                                <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                    <span><i className="mdi mdi-clock-outline"></i> Just 30 sec ago</span>
                                                </p>
                                            </div>
                                            <div className="px-2 fs-15">
                                                <div className="form-check notification-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="all-notification-check01" />
                                                    <label className="form-check-label" htmlFor="all-notification-check01"></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-reset notification-item d-block dropdown-item position-relative">
                                        <div className="d-flex">
                                            <img src={avatar2} className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                                            <div className="flex-1">
                                                <a href="#!" className="stretched-link">
                                                    <h6 className="mt-0 mb-1 fs-14 fw-semibold">Angela Bernier</h6>
                                                </a>
                                                <div className="fs-13 text-muted">
                                                    <p className="mb-1">Answered to your comment on the cash flow forecast's
                                                        graph 🔔.</p>
                                                </div>
                                                <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                    <span><i className="mdi mdi-clock-outline"></i> 48 min ago</span>
                                                </p>
                                            </div>
                                            <div className="px-2 fs-15">
                                                <div className="form-check notification-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="all-notification-check02" />
                                                    <label className="form-check-label" htmlFor="all-notification-check02"></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-reset notification-item d-block dropdown-item position-relative">
                                        <div className="d-flex">
                                            <div className="avatar-xs me-3">
                                                <span className="avatar-title bg-danger-subtle text-danger  text-danger rounded-circle fs-16">
                                                    <i className='bx bx-message-square-dots'></i>
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <Link to="#!" className="stretched-link">
                                                    <h6 className="mt-0 mb-2 fs-13 lh-base">You have received <b className="text-success">20</b> new messages in the conversation
                                                    </h6>
                                                </Link>
                                                <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                    <span><i className="mdi mdi-clock-outline"></i> 2 hrs ago</span>
                                                </p>
                                            </div>
                                            <div className="px-2 fs-15">
                                                <div className="form-check notification-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="all-notification-check03" />
                                                    <label className="form-check-label" htmlFor="all-notification-check03"></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-reset notification-item d-block dropdown-item position-relative">
                                        <div className="d-flex">
                                            <img src={avatar8} className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                                            <div className="flex-1">
                                                <a href="#!" className="stretched-link">
                                                    <h6 className="mt-0 mb-1 fs-14 fw-semibold">Maureen Gibson</h6>
                                                </a>
                                                <div className="fs-13 text-muted">
                                                    <p className="mb-1">We talked about a project on linkedin.</p>
                                                </div>
                                                <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                    <span><i className="mdi mdi-clock-outline"></i> 4 hrs ago</span>
                                                </p>
                                            </div>
                                            <div className="px-2 fs-15">
                                                <div className="form-check notification-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="all-notification-check04" />
                                                    <label className="form-check-label" htmlFor="all-notification-check04"></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="my-3 text-center view-all">
                                        <button type="button" className="btn btn-soft-success btn-sm waves-effect waves-light">View
                                            All Notifications <i className="ri-arrow-right-line align-middle"></i></button>
                                    </div>
                                </SimpleBar>
                            </div>

                        </div>
                    </Dropdown.Menu>
                </Dropdown>
        </React.Fragment>
    );
}

export default NotificationDropdown;