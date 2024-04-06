import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
//import logo
import logoSm from "../assets/images/logo-sm.png";
import logoDark from "../assets/images/logo-light.png";
import logoLight from "../assets/images/logo-dark.png";
import createInvoice from "../assets/images/create-invoice.png";

//Import Components
import VerticalLayout from "./VerticalLayouts/index";
import { Container } from "react-bootstrap";
import HorizontalLayout from "./HorizontalLayout";

const Sidebar = ({ layoutType }: any) => {

  useEffect(() => {
    var verticalOverlay = document.getElementsByClassName("vertical-overlay");
    if (verticalOverlay) {
      verticalOverlay[0].addEventListener("click", function () {
        document.body.classList.remove("vertical-sidebar-enable");
      });
    }
  });

  const addEventListenerOnSmHoverMenu = () => {
    // add listener Sidebar Hover icon on change layout from setting
    if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover') {
      document.documentElement.setAttribute('data-sidebar-size', 'sm-hover-active');
    } else if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover-active') {
      document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
    } else {
      document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
    }
  };

  return (
    <React.Fragment>
      <div className="app-menu navbar-menu">
        <div className="navbar-brand-box">
          <Link to="/" className="logo logo-dark">
            <span className="logo-sm">
              AJEX
            </span>
            <span className="logo-lg">
              AJEX
              {/* <img src={logoDark} alt="" height="21" /> */}
            </span>
          </Link>

          <Link to="/" className="logo logo-light">
            <span className="logo-sm">
              <img src={logoSm} alt="" height="22" />
            </span>
            <span className="logo-lg">
              <img src={logoLight} alt="" height="21" />
            </span>
          </Link>
          <button
            type="button"                 
            onClick={addEventListenerOnSmHoverMenu}            
            className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"           
            id="vertical-hover"
          >
            <i className="ri-record-circle-line"></i>
          </button>
        </div>
        {/* <SimpleBar id="scrollbar" className="h-100">
            <Container fluid>
              <div id="two-column-menu"></div>
              <ul className="navbar-nav" id="navbar-nav">
                <VerticalLayout layoutType={layoutType} />
              </ul>
            </Container>
          </SimpleBar> */}
        {layoutType === "horizontal" ? (
          <div id="scrollbar">
            <Container fluid>
              <div id="two-column-menu"></div>
              <ul className="navbar-nav" id="navbar-nav">
                <HorizontalLayout />
              </ul>
            </Container>
          </div>        
        ) : (
          <React.Fragment>
            <SimpleBar id="scrollbar" className="h-100">
              <Container fluid>
                <div id="two-column-menu"></div>
                <ul className="navbar-nav" id="navbar-nav">
                  <VerticalLayout layoutType={layoutType} />
                  {/* <div className="help-box text-center">
                      <img src={createInvoice} className="img-fluid" alt="" aria-expanded="false" />
                      <p className="mb-3 mt-2 text-muted">Upgrade To Pro For More Features</p>
                      <div className="mt-3">
                          <Link to="/invoice-add" className="btn btn-primary"> Create Invoice</Link>
                      </div>
                  </div> */}
                </ul>
              </Container>
            </SimpleBar>
            <div className="sidebar-background"></div>
          </React.Fragment>
        )}
      </div>
      <div className="vertical-overlay"></div>
    </React.Fragment>
  );
};

export default Sidebar;
