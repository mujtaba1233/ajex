import React, { useState } from 'react'
import {  Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';


//redux
import {
    changeLayout,
    changeSidebarTheme,
    changeLayoutMode,
    changeLayoutWidth,
    changeLayoutPosition,
    changeTopbarTheme,
    changeLeftsidebarSizeType,
    changeLeftsidebarViewType
} from "../slices/thunk";

//import Constant
import {
    LAYOUT_TYPES,
    LAYOUT_MODE_TYPES,
    LAYOUT_SIDEBAR_TYPES,
    LAYOUT_WIDTH_TYPES,
    LAYOUT_POSITION_TYPES,
    LAYOUT_TOPBAR_THEME_TYPES,
    LEFT_SIDEBAR_SIZE_TYPES,
    LEFT_SIDEBAR_VIEW_TYPES,
} from "../Common/constants/layout";


const RightSidebar = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState<boolean>(false);
    // const [openSidebarColor, setOpenSidebarColor] = useState<boolean>(false);

    // useEffect(() => {
    //     const sidebarDark = document.getElementById("sidebar-color-dark") as HTMLElement;
    //     if (show && sidebarDark && document.getElementById("sidebar-color-light")) {
    //         sidebarDark.checked = false;
    //         document.getElementById("sidebar-color-light").checked = false;
    //     }
    // },[]);

    //left Sidebar color view  
    const [,setShow] = useState(false);

    // function tog_show() {
    //     setShow(!show);
    //     dispatch(changeSidebarTheme("gradient"));
    // }

    // open offcanvas
    const toggleLeftCanvas = () => { setOpen(!open) };

    

    const selectLayoutState = (state: any) => state.Layout;
    const selectLayoutProperties = createSelector(
        selectLayoutState,
        (layout:any) => ({
            layoutType: layout.layoutType,
            leftSidebarType: layout.leftSidebarType,
            layoutModeType: layout.layoutModeType,
            layoutWidthType: layout.layoutWidthType,
            layoutPositionType: layout.layoutPositionType,
            topbarThemeType: layout.topbarThemeType,
            leftsidbarSizeType: layout.leftsidbarSizeType,
            leftSidebarViewType: layout.leftSidebarViewType,
        })
    );
    const {
        layoutType,        
        leftSidebarType,
        layoutModeType,
        layoutWidthType,
        layoutPositionType,
        topbarThemeType,
        leftsidbarSizeType,
        leftSidebarViewType,
    } = useSelector(selectLayoutProperties);
    console.log("layoutType",layoutType)
    window.onscroll = function () {
        scrollFunction();
    };

    const scrollFunction = () => {
        const element = document.getElementById("back-to-top");
        if (element) {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
        }
    };
    const toTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <React.Fragment>
            <button
                onClick={() => toTop()}
                className="btn btn-danger btn-icon" id="back-to-top">
                <i className="ri-arrow-up-line"></i>
            </button>            
            <div className="customizer-setting d-none d-md-block">
                <div className="btn-info btn-rounded shadow-lg btn btn-icon btn-lg p-2" onClick={toggleLeftCanvas}>
                    <i className="mdi mdi-spin mdi-cog-outline fs-22"></i>
                </div>
            </div>
            <Offcanvas className="offcanvas-end border-0" show={open} onHide={toggleLeftCanvas} placement="end">
                <Offcanvas.Header className="d-flex align-items-center bg-primary bg-gradient p-3 offcanvas-header">
                <h5 className="m-0 me-2 text-white">Theme Customizer</h5>                
                    <button
                        onClick={toggleLeftCanvas}
                        type="button"
                        className="btn-close btn-close-white ms-auto"
                    ></button>
                </Offcanvas.Header>
               
                <div className="offcanvas-body p-0">
                    <div data-simplebar="init" className="h-100 simplebar-scrollable-y">
                        <div className="simplebar-wrapper" style={{ margin: "0px" }}>
                            <div className="simplebar-height-auto-observer-wrapper">
                                <div className="simplebar-height-auto-observer"></div>
                            </div>
                            <div className="simplebar-mask">
                                <div className="simplebar-offset" style={{ right: "0px", bottom: "0px" }}>
                                    <div className="simplebar-content-wrapper" role="region" aria-label="scrollable content">
                                        <div className="simplebar-content" style={{ padding: "0px" }}>
                                            <div className="p-4">
                                                <h6 className="mb-0 fw-semibold text-uppercase">Layout</h6>
                                                <p className="text-muted">Choose your layout</p>
                                                <div className="row">
                                                    <div className="col-4">
                                                        <div className="form-check card-radio">
                                                            <input
                                                                id="customizer-layout01"
                                                                name="data-layout"
                                                                type="radio"
                                                                value={LAYOUT_TYPES.VERTICAL}
                                                                checked={layoutType === LAYOUT_TYPES.VERTICAL}
                                                                onChange={e => {
                                                                    if (e.target.checked) {
                                                                        dispatch(changeLayout(e.target.value));
                                                                    }
                                                                }}
                                                                className="form-check-input"
                                                            />
                                                            <label className="form-check-label p-0 avatar-md w-100" htmlFor="customizer-layout01">
                                                                <span className="d-flex gap-1 h-100">
                                                                    <span className="flex-shrink-0">
                                                                    <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                        <span className="d-block p-1 px-2 bg-primary-subtle text-primary  rounded mb-2"></span>
                                                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle text-primary "></span>
                                                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle text-primary "></span>
                                                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle text-primary "></span>
                                                                    </span>
                                                                    </span>
                                                                    <span className="flex-grow-1">
                                                                        <span className="d-flex h-100 flex-column">
                                                                            <span className="bg-light d-block p-1"></span>
                                                                            <span className="bg-light d-block p-1 mt-auto"></span>
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <h5 className="fs-13 text-center mt-2">Vertical</h5>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="form-check card-radio">
                                                            <input
                                                                id="customizer-layout02"
                                                                name="data-layout"
                                                                type="radio"
                                                                value={LAYOUT_TYPES.HORIZONTAL}
                                                                checked={layoutType === LAYOUT_TYPES.HORIZONTAL}
                                                                onChange={e => {
                                                                    if (e.target.checked) {
                                                                        dispatch(changeLayout(e.target.value));
                                                                    }
                                                                }}
                                                                className="form-check-input" />
                                                            <label className="form-check-label p-0 avatar-md w-100" htmlFor="customizer-layout02">
                                                                <span className="d-flex h-100 flex-column gap-1">
                                                                    <span className="bg-light d-flex p-1 gap-1 align-items-center">
                                                                        <span className="d-block p-1 bg-primary-subtle text-primary  rounded me-1"></span>
                                                                        <span className="d-block p-1 pb-0 px-2 bg-primary-subtle text-primary  ms-auto"></span>
                                                                        <span className="d-block p-1 pb-0 px-2 bg-primary-subtle text-primary"></span>
                                                                    </span>
                                                                    <span className="bg-light d-block p-1"></span>
                                                                    <span className="bg-light d-block p-1 mt-auto"></span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <h5 className="fs-13 text-center mt-2">Horizontal</h5>
                                                    </div>
                                                    
                                                </div>
                                                <h6 className="mt-4 mb-0 fw-semibold text-uppercase">Color Scheme</h6>
                                                <p className="text-muted">Choose Light or Dark Scheme.</p>
                                                
                                                <div className="colorscheme-cardradio">
                                                        <div className="row">
                                                            <div className="col-4">
                                                                <div className="form-check card-radio">
                                                                    
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        name="data-bs-theme"
                                                                        id="layout-mode-light"
                                                                        value={LAYOUT_MODE_TYPES.LIGHTMODE}
                                                                        checked={layoutModeType === LAYOUT_MODE_TYPES.LIGHTMODE}
                                                                        onChange={e => {
                                                                            if (e.target.checked) {
                                                                                dispatch(changeLayoutMode(e.target.value));
                                                                            }
                                                                        }}
                                                                    />
                                                                    <label className="form-check-label p-0 avatar-md w-100" htmlFor="layout-mode-light">
                                                                        <span className="d-flex gap-1 h-100">
                                                                            <span className="flex-shrink-0">
                                                                                <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                                    <span className="d-block p-1 px-2 bg-primary-subtle text-primary  rounded mb-2"></span>
                                                                                    <span className="d-block p-1 px-2 pb-0 bg-primary-subtle text-primary "></span>
                                                                                    <span className="d-block p-1 px-2 pb-0 bg-primary-subtle text-primary "></span>
                                                                                    <span className="d-block p-1 px-2 pb-0 bg-primary-subtle text-primary "></span>
                                                                                </span>
                                                                            </span>
                                                                            <span className="flex-grow-1">
                                                                                <span className="d-flex h-100 flex-column">
                                                                                    <span className="bg-light d-block p-1"></span>
                                                                                    <span className="bg-light d-block p-1 mt-auto"></span>
                                                                                </span>
                                                                            </span>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <h5 className="fs-13 text-center mt-2">Light</h5>
                                                            </div>

                                                            <div className="col-4">
                                                                <div className="form-check card-radio dark">
                                                                <input
                                                                        className="form-check-input"
                                                                        type="radio"
                                                                        name="data-bs-theme"
                                                                        id="layout-mode-dark"
                                                                        value={LAYOUT_MODE_TYPES.DARKMODE}
                                                                        checked={layoutModeType === LAYOUT_MODE_TYPES.DARKMODE}
                                                                        onChange={e => {
                                                                            if (e.target.checked) {
                                                                                dispatch(changeLayoutMode(e.target.value));
                                                                            }
                                                                        }}
                                                                    />
                                                                    <label className="form-check-label p-0 avatar-md w-100 bg-dark" htmlFor="layout-mode-dark">
                                                                        <span className="d-flex gap-1 h-100">
                                                                            <span className="flex-shrink-0">
                                                                                <span className="bg-light-subtle text-light  d-flex h-100 flex-column gap-1 p-1">
                                                                                    <span className="d-block p-1 px-2 bg-light-subtle text-light  rounded mb-2"></span>
                                                                                    <span className="d-block p-1 px-2 pb-0 bg-light-subtle text-light "></span>
                                                                                    <span className="d-block p-1 px-2 pb-0 bg-light-subtle text-light "></span>
                                                                                    <span className="d-block p-1 px-2 pb-0 bg-light-subtle text-light "></span>
                                                                                </span>
                                                                            </span>
                                                                            <span className="flex-grow-1">
                                                                                <span className="d-flex h-100 flex-column">
                                                                                    <span className="bg-light-subtle text-light  d-block p-1"></span>
                                                                                    <span className="bg-light-subtle text-light  d-block p-1 mt-auto"></span>
                                                                                </span>
                                                                            </span>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <h5 className="fs-13 text-center mt-2">Dark</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                <div id="layout-width" style={{ display: "block" }}>
                                                <h6 className="mt-4 mb-0 fw-semibold text-uppercase">Layout Width</h6>
                                                <p className="text-muted">Choose Fluid or Boxed layout.</p>
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <div className="form-check card-radio">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="data-layout-width"
                                                                    id="layout-width-fluid"
                                                                    value={LAYOUT_WIDTH_TYPES.FLUID}
                                                                    checked={layoutWidthType === LAYOUT_WIDTH_TYPES.FLUID}
                                                                    onChange={e => {
                                                                        if (e.target.checked) {
                                                                            dispatch(changeLayoutWidth(e.target.value));
                                                                            dispatch(changeLeftsidebarSizeType("lg"));
                                                                        }
                                                                    }}
                                                                />
                                                                <label className="form-check-label p-0 avatar-md w-100" htmlFor="layout-width-fluid">
                                                                    <span className="d-flex gap-1 h-100">
                                                                        <span className="flex-shrink-0">
                                                                            <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                            <span className="d-block p-1 px-2 bg-primary-subtle text-primary  rounded mb-2"></span>
                                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle text-primary "></span>
                                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle text-primary "></span>
                                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle text-primary "></span>
                                                                            </span>
                                                                        </span>
                                                                        <span className="flex-grow-1">
                                                                            <span className="d-flex h-100 flex-column">
                                                                            <span className="bg-light d-block p-1"></span>
                                                                            <span className="bg-light d-block p-1 mt-auto"></span>
                                                                            </span>
                                                                        </span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            <h5 className="fs-13 text-center mt-2">Fluid</h5>
                                                        </div>
                                                        <div className="col-4">
                                                            <div className="form-check card-radio">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="data-layout-width"
                                                                    id="layout-width-boxed"
                                                                    value={LAYOUT_WIDTH_TYPES.BOXED}
                                                                    checked={layoutWidthType === LAYOUT_WIDTH_TYPES.BOXED}
                                                                    onChange={e => {
                                                                        if (e.target.checked) {
                                                                            dispatch(changeLayoutWidth(e.target.value));
                                                                            dispatch(changeLeftsidebarSizeType("sm-hover"));
                                                                        }
                                                                    }}
                                                                />
                                                                <label className="form-check-label p-0 avatar-md w-100 px-2" htmlFor="layout-width-boxed">
                                                                    <span className="d-flex gap-1 h-100 border-start border-end">
                                                                        <span className="flex-shrink-0">
                                                                            <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                                <span className="d-block p-1 px-2 bg-primary-subtle rounded mb-2"></span>
                                                                                <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                                <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                                <span className="d-block p-1 px-2 pb-0 bg-primary-subtle"></span>
                                                                            </span>
                                                                        </span>
                                                                        <span className="flex-grow-1">
                                                                            <span className="d-flex h-100 flex-column">
                                                                                <span className="bg-light d-block p-1"></span>
                                                                                <span className="bg-light d-block p-1 mt-auto"></span>
                                                                            </span>
                                                                        </span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            <h5 className="fs-13 text-center mt-2">Boxed</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="layout-position" style={{ display: "block" }}>
                                                    <h6 className="mt-4 mb-0 fw-semibold text-uppercase">Layout Position</h6>
                                                    <p className="text-muted">Choose Fixed or Scrollable Layout Position.</p>
                                                    <div className="btn-group radio" role="group">
                                                        <input
                                                            type="radio"
                                                            className="btn-check"
                                                            name="data-layout-position"
                                                            id="layout-position-fixed"
                                                            value={LAYOUT_POSITION_TYPES.FIXED}
                                                            checked={layoutPositionType === LAYOUT_POSITION_TYPES.FIXED}
                                                            onChange={e => {
                                                                if (e.target.checked) {
                                                                    dispatch(changeLayoutPosition(e.target.value));
                                                                }
                                                            }}
                                                        />
                                                        <label className="btn btn-light w-sm" htmlFor="layout-position-fixed">Fixed</label>
                                                        <input
                                                            type="radio"
                                                            className="btn-check"
                                                            name="data-layout-position"
                                                            id="layout-position-scrollable"
                                                            value={LAYOUT_POSITION_TYPES.SCROLLABLE}
                                                            checked={layoutPositionType === LAYOUT_POSITION_TYPES.SCROLLABLE}
                                                            onChange={e => {
                                                                if (e.target.checked) {
                                                                    dispatch(changeLayoutPosition(e.target.value));
                                                                }
                                                            }}
                                                        />
                                                        <label className="btn btn-light w-sm ms-0" htmlFor="layout-position-scrollable">Scrollable</label>
                                                    </div>
                                                </div>
                                                <h6 className="mt-4 mb-0 fw-semibold text-uppercase">Topbar Color</h6>
                                                <p className="text-muted">Choose Light or Dark Topbar Color.</p>
                                                <div className="row">
                                                    <div className="col-4">
                                                        <div className="form-check card-radio">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="data-topbar"
                                                                id="topbar-color-light"
                                                                value={LAYOUT_TOPBAR_THEME_TYPES.LIGHT}
                                                                checked={topbarThemeType === LAYOUT_TOPBAR_THEME_TYPES.LIGHT}
                                                                onChange={e => {
                                                                    if (e.target.checked) {
                                                                        dispatch(changeTopbarTheme(e.target.value));
                                                                    }
                                                                }}
                                                            />
                                                            <label className="form-check-label p-0 avatar-md w-100" htmlFor="topbar-color-light">
                                                                <span className="d-flex gap-1 h-100">
                                                                    <span className="flex-shrink-0">
                                                                        <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                        <span className="d-block p-1 px-2 bg-primary-subtle text-primary  rounded mb-2"></span>
                                                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle text-primary "></span>
                                                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle text-primary "></span>
                                                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle text-primary "></span>
                                                                        </span>
                                                                    </span>
                                                                    <span className="flex-grow-1">
                                                                        <span className="d-flex h-100 flex-column">
                                                                            <span className="bg-light d-block p-1"></span>
                                                                            <span className="bg-light d-block p-1 mt-auto"></span>
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <h5 className="fs-13 text-center mt-2">Light</h5>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="form-check card-radio">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="data-topbar"
                                                                id="topbar-color-dark"
                                                                value={LAYOUT_TOPBAR_THEME_TYPES.DARK}
                                                                checked={topbarThemeType === LAYOUT_TOPBAR_THEME_TYPES.DARK}
                                                                onChange={e => {
                                                                    if (e.target.checked) {
                                                                        dispatch(changeTopbarTheme(e.target.value));
                                                                    }
                                                                }}
                                                            />
                                                            <label className="form-check-label p-0 avatar-md w-100" htmlFor="topbar-color-dark">
                                                                <span className="d-flex gap-1 h-100">
                                                                    <span className="flex-shrink-0">
                                                                        <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                        <span className="d-block p-1 px-2 bg-primary-subtle text-primary  rounded mb-2"></span>
                                                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle text-primary "></span>
                                                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle text-primary "></span>
                                                                        <span className="d-block p-1 px-2 pb-0 bg-primary-subtle text-primary "></span>
                                                                        </span>
                                                                    </span>
                                                                    <span className="flex-grow-1">
                                                                        <span className="d-flex h-100 flex-column">
                                                                            <span className="bg-primary d-block p-1"></span>
                                                                            <span className="bg-light d-block p-1 mt-auto"></span>
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                        <h5 className="fs-13 text-center mt-2">Dark</h5>
                                                    </div>
                                                </div>
                                                {layoutType !== "horizontal" && (
                                                    <React.Fragment>
                                                <div id="sidebar-size" style={{ display: "block" }}>
                                                    <h6 className="mt-4 mb-0 fw-semibold text-uppercase">Sidebar Size</h6>
                                                    <p className="text-muted">Choose a size of Sidebar.</p>
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <div className="form-check sidebar-setting card-radio">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="data-sidebar-size"
                                                                    id="sidebar-size-default"
                                                                    value={LEFT_SIDEBAR_SIZE_TYPES.DEFAULT}
                                                                    checked={leftsidbarSizeType === LEFT_SIDEBAR_SIZE_TYPES.DEFAULT}
                                                                    onChange={e => {
                                                                        if (e.target.checked) {
                                                                            dispatch(changeLeftsidebarSizeType(e.target.value));
                                                                        }
                                                                    }}
                                                                />
                                                                <label className="form-check-label p-0 avatar-md w-100" htmlFor="sidebar-size-default">
                                                                    <span className="d-flex gap-1 h-100">
                                                                        <span className="flex-shrink-0">
                                                                            <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                            <span className="d-block p-1 px-2 bg-primary-subtle text-primary  rounded mb-2"></span>
                                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle text-primary "></span>
                                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle text-primary "></span>
                                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle text-primary "></span>
                                                                            </span>
                                                                        </span>
                                                                        <span className="flex-grow-1">
                                                                            <span className="d-flex h-100 flex-column">
                                                                                <span className="bg-light d-block p-1"></span>
                                                                                <span className="bg-light d-block p-1 mt-auto"></span>
                                                                            </span>
                                                                        </span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            <h5 className="fs-13 text-center mt-2">Default</h5>
                                                        </div>
                                                        <div className="col-4">
                                                            <div className="form-check sidebar-setting card-radio">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="data-sidebar-size"
                                                                    id="sidebar-size-compact"
                                                                    value={LEFT_SIDEBAR_SIZE_TYPES.COMPACT}
                                                                    checked={leftsidbarSizeType === LEFT_SIDEBAR_SIZE_TYPES.COMPACT}
                                                                    onChange={e => {
                                                                        if (e.target.checked) {
                                                                            dispatch(changeLeftsidebarSizeType(e.target.value));
                                                                        }
                                                                    }}
                                                                />
                                                                <label className="form-check-label p-0 avatar-md w-100" htmlFor="sidebar-size-compact">
                                                                    <span className="d-flex gap-1 h-100">
                                                                        <span className="flex-shrink-0">
                                                                        <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                            <span className="d-block p-1 bg-primary-subtle text-primary  rounded mb-2"></span>
                                                                            <span className="d-block p-1 pb-0 bg-primary-subtle text-primary "></span>
                                                                            <span className="d-block p-1 pb-0 bg-primary-subtle text-primary "></span>
                                                                            <span className="d-block p-1 pb-0 bg-primary-subtle text-primary "></span>
                                                                        </span>
                                                                        </span>
                                                                        <span className="flex-grow-1">
                                                                            <span className="d-flex h-100 flex-column">
                                                                                <span className="bg-light d-block p-1"></span>
                                                                                <span className="bg-light d-block p-1 mt-auto"></span>
                                                                            </span>
                                                                        </span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            <h5 className="fs-13 text-center mt-2">Compact</h5>
                                                        </div>
                                                        <div className="col-4">
                                                            <div className="form-check sidebar-setting card-radio">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="data-sidebar-size"
                                                                    id="sidebar-size-small"
                                                                    value={LEFT_SIDEBAR_SIZE_TYPES.SMALLICON}
                                                                    checked={leftsidbarSizeType === LEFT_SIDEBAR_SIZE_TYPES.SMALLICON}
                                                                    onChange={e => {
                                                                        if (e.target.checked) {
                                                                            dispatch(changeLeftsidebarSizeType(e.target.value));
                                                                        }
                                                                    }}
                                                                />
                                                                <label className="form-check-label p-0 avatar-md w-100" htmlFor="sidebar-size-small">
                                                                    <span className="d-flex gap-1 h-100">
                                                                        <span className="flex-shrink-0">
                                                                        <span className="bg-light d-flex h-100 flex-column gap-1">
                                                                            <span className="d-block p-1 bg-primary-subtle text-primary  mb-2"></span>
                                                                            <span className="d-block p-1 pb-0 bg-primary-subtle text-primary "></span>
                                                                            <span className="d-block p-1 pb-0 bg-primary-subtle text-primary "></span>
                                                                            <span className="d-block p-1 pb-0 bg-primary-subtle text-primary "></span>
                                                                        </span>
                                                                        </span>
                                                                        <span className="flex-grow-1">
                                                                            <span className="d-flex h-100 flex-column">
                                                                                <span className="bg-light d-block p-1"></span>
                                                                                <span className="bg-light d-block p-1 mt-auto"></span>
                                                                            </span>
                                                                        </span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            <h5 className="fs-13 text-center mt-2">Small (Icon View)</h5>
                                                        </div>
                                                        <div className="col-4">
                                                            <div className="form-check sidebar-setting card-radio">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="data-sidebar-size"
                                                                    id="sidebar-size-small-hover"
                                                                    value={LEFT_SIDEBAR_SIZE_TYPES.SMALLHOVER}
                                                                    checked={leftsidbarSizeType === LEFT_SIDEBAR_SIZE_TYPES.SMALLHOVER}
                                                                    onChange={e => {
                                                                        if (e.target.checked) {
                                                                            dispatch(changeLeftsidebarSizeType(e.target.value));
                                                                        }
                                                                    }}
                                                                />
                                                                <label className="form-check-label p-0 avatar-md w-100" htmlFor="sidebar-size-small-hover">
                                                                    <span className="d-flex gap-1 h-100">
                                                                        <span className="flex-shrink-0">
                                                                        <span className="bg-light d-flex h-100 flex-column gap-1">
                                                                            <span className="d-block p-1 bg-primary-subtle text-primary  mb-2"></span>
                                                                            <span className="d-block p-1 pb-0 bg-primary-subtle text-primary "></span>
                                                                            <span className="d-block p-1 pb-0 bg-primary-subtle text-primary "></span>
                                                                            <span className="d-block p-1 pb-0 bg-primary-subtle text-primary "></span>
                                                                        </span>
                                                                        </span>
                                                                        <span className="flex-grow-1">
                                                                            <span className="d-flex h-100 flex-column">
                                                                                <span className="bg-light d-block p-1"></span>
                                                                                <span className="bg-light d-block p-1 mt-auto"></span>
                                                                            </span>
                                                                        </span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            <h5 className="fs-13 text-center mt-2">Small Hover View</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                </React.Fragment>
                                                )}
                                                {layoutType !== "horizontal" && (
                                                    <React.Fragment>
                                                <div id="sidebar-view" style={{ display: "block" }}>
                                                    <h6 className="mt-4 mb-0 fw-semibold text-uppercase">Sidebar View</h6>
                                                    <p className="text-muted">Choose Default or Detached Sidebar view.</p>
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <div className="form-check sidebar-setting card-radio">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="data-layout-style"
                                                                    id="sidebar-view-default"
                                                                    value={LEFT_SIDEBAR_VIEW_TYPES.DEFAULT}
                                                                    checked={leftSidebarViewType === LEFT_SIDEBAR_VIEW_TYPES.DEFAULT}
                                                                    onChange={e => {
                                                                        if (e.target.checked) {
                                                                            dispatch(changeLeftsidebarViewType(e.target.value));
                                                                        }
                                                                    }}

                                                                />
                                                                <label className="form-check-label p-0 avatar-md w-100" htmlFor="sidebar-view-default">
                                                                    <span className="d-flex gap-1 h-100">
                                                                        <span className="flex-shrink-0">
                                                                            <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                            <span className="d-block p-1 px-2 bg-primary-subtle text-primary  rounded mb-2"></span>
                                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle text-primary "></span>
                                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle text-primary "></span>
                                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle text-primary "></span>
                                                                            </span>
                                                                        </span>
                                                                        <span className="flex-grow-1">
                                                                            <span className="d-flex h-100 flex-column">
                                                                                <span className="bg-light d-block p-1"></span>
                                                                                <span className="bg-light d-block p-1 mt-auto"></span>
                                                                            </span>
                                                                        </span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            <h5 className="fs-13 text-center mt-2">Default</h5>
                                                        </div>
                                                        <div className="col-4">
                                                            <div className="form-check sidebar-setting card-radio">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="data-layout-style"
                                                                    id="sidebar-view-detached"
                                                                    value={LEFT_SIDEBAR_VIEW_TYPES.DETACHED}
                                                                    checked={leftSidebarViewType === LEFT_SIDEBAR_VIEW_TYPES.DETACHED}
                                                                    onChange={e => {
                                                                        if (e.target.checked) {
                                                                            dispatch(changeLeftsidebarViewType(e.target.value));
                                                                        }
                                                                    }}
                                                                />
                                                                <label className="form-check-label p-0 avatar-md w-100" htmlFor="sidebar-view-detached">
                                                                    <span className="d-flex h-100 flex-column">
                                                                    <span className="bg-light d-flex p-1 gap-1 align-items-center px-2">
                                                                        <span className="d-block p-1 bg-primary-subtle text-primary  rounded me-1"></span>
                                                                        <span className="d-block p-1 pb-0 px-2 bg-primary-subtle text-primary  ms-auto"></span>
                                                                        <span className="d-block p-1 pb-0 px-2 bg-primary-subtle text-primary "></span>
                                                                    </span>
                                                                        <span className="d-flex gap-1 h-100 p-1 px-2">
                                                                            <span className="flex-shrink-0">
                                                                            <span className="bg-light d-flex h-100 flex-column gap-1 p-1">
                                                                                <span className="d-block p-1 px-2 pb-0 bg-primary-subtle text-primary "></span>
                                                                                <span className="d-block p-1 px-2 pb-0 bg-primary-subtle text-primary "></span>
                                                                                <span className="d-block p-1 px-2 pb-0 bg-primary-subtle text-primary "></span>
                                                                            </span>
                                                                            </span>
                                                                        </span>
                                                                        <span className="bg-light d-block p-1 mt-auto px-2"></span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            <h5 className="fs-13 text-center mt-2">Detached</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                </React.Fragment>
                                                )}
                                                {layoutType !== "horizontal" && (
                                                   
                                                    <React.Fragment>
                                                <div id="sidebar-color" style={{ display: "block" }}>
                                                    <h6 className="mt-4 mb-0 fw-semibold text-uppercase">Sidebar Color</h6>
                                                    <p className="text-muted">Choose a color of Sidebar.</p>
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <div className="form-check sidebar-setting card-radio" data-bs-toggle="collapse" data-bs-target="#collapseBgGradient.show">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="data-sidebar"
                                                                    id="sidebar-color-light"
                                                                    value={LAYOUT_SIDEBAR_TYPES.LIGHT}
                                                                    checked={leftSidebarType === LAYOUT_SIDEBAR_TYPES.LIGHT}
                                                                    onChange={e => {
                                                                        setShow(false);
                                                                        if (e.target.checked) {
                                                                            dispatch(changeSidebarTheme(e.target.value));
                                                                        }
                                                                    }}
                                                                />
                                                                <label className="form-check-label p-0 avatar-md w-100" htmlFor="sidebar-color-light">
                                                                    <span className="d-flex gap-1 h-100">
                                                                        <span className="flex-shrink-0">
                                                                        <span className="bg-white border-end d-flex h-100 flex-column gap-1 p-1">
                                                                            <span className="d-block p-1 px-2 bg-primary-subtle text-primary  rounded mb-2"></span>
                                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle text-primary "></span>
                                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle text-primary "></span>
                                                                            <span className="d-block p-1 px-2 pb-0 bg-primary-subtle text-primary "></span>
                                                                        </span>
                                                                        </span>
                                                                        <span className="flex-grow-1">
                                                                            <span className="d-flex h-100 flex-column">
                                                                                <span className="bg-light d-block p-1"></span>
                                                                                <span className="bg-light d-block p-1 mt-auto"></span>
                                                                            </span>
                                                                        </span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            <h5 className="fs-13 text-center mt-2">Light</h5>
                                                        </div>
                                                        <div className="col-4">
                                                            <div className="form-check sidebar-setting card-radio" data-bs-toggle="collapse" data-bs-target="#collapseBgGradient.show">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="data-sidebar"
                                                                    id="sidebar-color-dark"
                                                                    value={LAYOUT_SIDEBAR_TYPES.DARK}
                                                                    checked={leftSidebarType === LAYOUT_SIDEBAR_TYPES.DARK}
                                                                    onChange={e => {
                                                                        setShow(false);
                                                                        if (e.target.checked) {
                                                                            dispatch(changeSidebarTheme(e.target.value));
                                                                        }
                                                                    }}
                                                                />
                                                                <label className="form-check-label p-0 avatar-md w-100" htmlFor="sidebar-color-dark">
                                                                    <span className="d-flex gap-1 h-100">
                                                                        <span className="flex-shrink-0">
                                                                        <span className="bg-primary d-flex h-100 flex-column gap-1 p-1">
                                                                            <span className="d-block p-1 px-2 bg-light-subtle text-light  rounded mb-2"></span>
                                                                            <span className="d-block p-1 px-2 pb-0 bg-light-subtle text-light "></span>
                                                                            <span className="d-block p-1 px-2 pb-0 bg-light-subtle text-light "></span>
                                                                            <span className="d-block p-1 px-2 pb-0 bg-light-subtle text-light "></span>
                                                                        </span>
                                                                        </span>
                                                                        <span className="flex-grow-1">
                                                                            <span className="d-flex h-100 flex-column">
                                                                                <span className="bg-light d-block p-1"></span>
                                                                                <span className="bg-light d-block p-1 mt-auto"></span>
                                                                            </span>
                                                                        </span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            <h5 className="fs-13 text-center mt-2">Dark</h5>
                                                        </div>

                                                        
                                                    </div>                                                    
                                                </div>
                                                </React.Fragment>
                                                )}                                        
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="simplebar-placeholder" style={{ width: "400px", height: "2620px" }}>
                            </div>
                        </div>
                        <div className="simplebar-track simplebar-horizontal" style={{ visibility: "hidden" }}>
                            <div className="simplebar-scrollbar" style={{ width: "0px", display: "none" }}>
                            </div>
                        </div>
                        <div className="simplebar-track simplebar-vertical" style={{ visibility: "visible" }}>
                            <div className="simplebar-scrollbar"></div>
                        </div>
                    </div>
                </div>
                <div className="offcanvas-footer border-top p-3 text-center">
                    <div className="row">
                        <div className="col-6">
                            <button type="button" className="btn btn-light w-100" id="reset-layout">Reset</button>
                        </div>
                        <div className="col-6">
                            <a href="#!" target="_blank" className="btn btn-primary w-100">Buy Now</a>
                        </div>
                    </div>
                </div>
            </Offcanvas>
        </React.Fragment>
    )
}

export default RightSidebar
