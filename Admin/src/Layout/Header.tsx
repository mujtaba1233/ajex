import React, { useEffect } from 'react';


// import BrowseAppsDropdown from '../Common/BrowseAppsDropdown';
// import MyCartDropdown from '../Common/MyCartDropdown';
import FullScreenDropdown from '../Common/FullScreenDropdown';
import NotificationDropdown from '../Common/NotificationDropdown';
import ProfileDropdown from '../Common/ProfileDropdown';
import LayoutModeDropdown from '../Common/LayoutModeDropdown';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//import images
import logosm from "../assets/images/logo-sm.png";
import logodark from "../assets/images/logo-dark.png";
import logolight from "../assets/images/logo-light.png";
import Language from '../Common/Language';
import SearchOption from '../Common/SearchOption';

const toogleMenuBtn = () => {
    var windowSize = document.documentElement.clientWidth;

    if (windowSize > 767)
        document.querySelector(".hamburger-icon")?.classList.toggle('open');

    //For collapse horizontal menu
    if (document.documentElement.getAttribute('data-layout') === "horizontal") {
        document.body.classList.contains("menu") ? document.body.classList.remove("menu") : document.body.classList.add("menu");
    }

    //For collapse vertical menu
    if (document.documentElement.getAttribute('data-layout') === "vertical") {
        if (windowSize < 1025 && windowSize > 767) {
            document.body.classList.remove('vertical-sidebar-enable');
            (document.documentElement.getAttribute('data-sidebar-size') === 'sm') ? document.documentElement.setAttribute('data-sidebar-size', '') : document.documentElement.setAttribute('data-sidebar-size', 'sm');
        } else if (windowSize > 1025) {
            document.body.classList.remove('vertical-sidebar-enable');
            (document.documentElement.getAttribute('data-sidebar-size') === 'lg') ? document.documentElement.setAttribute('data-sidebar-size', 'sm') : document.documentElement.setAttribute('data-sidebar-size', 'lg');
        } else if (windowSize <= 767) {
            document.body.classList.add('vertical-sidebar-enable');
            document.documentElement.setAttribute('data-sidebar-size', 'lg');
        }
    }

        };

const Header = ({onChangeLayoutMode, layoutModeType}:any) => {
    useEffect(() => {
        const windowScroll = () => {
          const pageTopbar = document.getElementById("page-topbar");
          if (pageTopbar) {
            document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20
              ? pageTopbar.classList.add("topbar-shadow")
              : pageTopbar.classList.remove("topbar-shadow");
          }
        };
        window.addEventListener("scroll", windowScroll);
        return () => {
          window.removeEventListener("scroll", windowScroll);
        };
      }, []);


    const windowScroll = () => {
        const pageTopbar = document.getElementById("page-topbar")
        if (pageTopbar) {
          if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
            pageTopbar.classList.add("topbar-shadow")
          } else {
            pageTopbar.classList.remove("topbar-shadow")
          }
        }
      }
    
      if (typeof document !== "undefined") {
        document.onscroll = function () {
          windowScroll();
        }
      }
    return (
        <React.Fragment>
            <header id="page-topbar">
                <div className="layout-width">
                    <div className="navbar-header">
                        <div className="d-flex">
                            <div className="navbar-brand-box horizontal-logo">
                            <Link to="/" className="logo logo-dark">
                                <span className="logo-sm">
                                    <img src={logosm} alt="" height="22" />
                                </span>
                                <span className="logo-lg">
                                    <img src={logodark} alt="" height="21" />
                                </span>
                            </Link>

                            <Link to="/" className="logo logo-light">
                                <span className="logo-sm">
                                    <img src={logosm} alt="" height="22" />
                                </span>
                                <span className="logo-lg">
                                    <img src={logolight} alt="" height="21" />
                                </span>
                            </Link>
                        </div>

                            <Button variant="link" size="sm" type="button" className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger" id="topnav-hamburger-icon"
                                onClick={toogleMenuBtn}
                            >
                                <span className="hamburger-icon">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </Button>
                            {/* SearchModal */}
                            <SearchOption />

                        </div>

                        <div className="d-flex align-items-center">

                            <div className="d-md-none topbar-head-dropdown header-item">
                                <button type="button" className="btn btn-icon btn-topbar btn-ghost-dark rounded-circle" id="page-header-search-dropdown" data-bs-toggle="modal" data-bs-target="#searchModal">
                                    <i className="bi bi-search fs-lg"></i>
                                </button>
                            </div>                           

                            {/* Language Dropdown */}
                            {/* <Language />/

                            {/* My Cart Dropdown */}
                            {/* <MyCartDropdown /> */}

                            {/* FullScreenDropdown */}
                            {/* <FullScreenDropdown /> */}

                            {/* Layout Mode Dropdown */}
                            {/* <LayoutModeDropdown
                            layoutMode={layoutModeType}
                            onChangeLayoutMode={onChangeLayoutMode}
                            /> */}

                            {/* NotificationDropdown */}
                            {/* <NotificationDropdown /> */} 

                            {/* ProfileDropdown */}
                            <ProfileDropdown />
                        </div>
                    </div>
                </div>
            </header>

            <div id="removeNotificationModal" className="modal fade zoomIn" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="NotificationModalbtn-close"></button>
                        </div>
                        <div className="modal-body p-md-5">
                            <div className="text-center">
                                <div className="text-danger">
                                    <i className="bi bi-trash display-4"></i>
                                </div>
                                <div className="mt-4 fs-md">
                                    <h4 className="mb-1">Are you sure ?</h4>
                                    <p className="text-muted mx-4 mb-0">Are you sure you want to remove this Notification ?</p>
                                </div>
                            </div>
                            <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                                <button type="button" className="btn w-sm btn-light" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn w-sm btn-danger" id="delete-notification">Yes, Delete It!</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;