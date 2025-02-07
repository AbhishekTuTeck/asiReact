import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';
import sitIndiaGovtLogo from "../../../public/assets/images/ASILogoHorizontal.svg";
import FeatherIcon from "feather-icons-react";
import { CSSTransition } from "react-transition-group"; // Import CSSTransition

function SideBar() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="app-sidebar-menu">
      <div className="h-100" data-simplebar>
        {/*- Sidemenu */}
        <div id="sidebar-menu" >
          <div className="logo-box">
            <Link to="/" className="logo logo-dark">
              <span className="logo-lg">
                <img src={sitIndiaGovtLogo} alt="" />
              </span>
            </Link>
          </div>

          <ul id="side-menu">
            <li>
              <Link to="/nsso-secured/CompileSchedule">
                <FeatherIcon icon="home" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/nsso-secured/CompileSchedule">
                <FeatherIcon icon="users" />
                <span>User Manual</span>
              </Link>
            </li>

            <li>
              <Link
                to="#" onClick={(e) => {
                  e.preventDefault(); // Prevents default navigation
                  toggleMenu("masters");
                }}
                aria-expanded={openMenu === "masters" ? "true" : "false"}
              >
                <FeatherIcon icon="alert-octagon" />
                <span>Masters</span>
                <span className="menu-arrow"></span>
              </Link>
              <CSSTransition
                in={openMenu === "masters"}
                timeout={300}
                classNames="collapse"
                unmountOnExit
              >
                <div className="nav-second-level">
                  <ul>
                    <li>
                      <Link to="/nsso-secured/CompileSchedule"> <FeatherIcon icon="circle" /><span>Masters 1</span></Link>
                    </li>
                    <li>
                      <Link to="/nsso-secured/CompileSchedule"><FeatherIcon icon="circle" /><span>Masters 2</span></Link>
                    </li>
                  </ul>
                </div>
              </CSSTransition>
            </li>

            <li>
              <Link to="#" onClick={(e) => {
                  e.preventDefault(); // Prevents default navigation
                  toggleMenu("frame");
                }}>
                <FeatherIcon icon="file-text" />
                <span>Frame</span>
                <span className="menu-arrow"></span>
              </Link>
              <CSSTransition
                in={openMenu === "frame"}
                timeout={300}
                classNames="collapse"
                unmountOnExit
              >
                <div className="nav-second-level">
                  <ul>
                    <li>
                      <Link to="/nsso-secured/CompileSchedule"><FeatherIcon icon="circle" /><span>Frame 1</span></Link>
                    </li>
                    <li>
                      <Link to="/nsso-secured/CompileSchedule"><FeatherIcon icon="circle" /><span>Frame 2</span></Link>
                    </li>
                  </ul>
                </div>
              </CSSTransition>
            </li>

            <li className="menuitem-active">
              <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault(); // Prevents default navigation
                  toggleMenu("schedule");
                }}
                aria-expanded={openMenu === "schedule" ? "true" : "false"}
                
              >
                <FeatherIcon icon="file-text" />
                <span>Schedule Activities</span>
                <span className="menu-arrow"></span>
              </Link>
              <CSSTransition
                in={openMenu === "schedule"}
                timeout={300}
                classNames="collapse"
                unmountOnExit
              >
                <div className="nav-second-level">
                  <ul>
                    <li>
                      <Link to="/nsso-secured/CompileSchedule" className="active"><FeatherIcon icon="circle" /><span>Compile Schedule</span></Link>
                    </li>
                    <li>
                      <Link to="/nsso-secured/CompileSchedule"><FeatherIcon icon="circle" /><span>Scrutinize Schedule</span></Link>
                    </li>
                    <li>
                      <Link to="/nsso-secured/CompileSchedule"><FeatherIcon icon="circle" /><span>Reference Schedule</span></Link>
                    </li>
                    <li>
                      <Link to="/nsso-secured/CompileSchedule"><FeatherIcon icon="circle" /><span>Notice Dispatch</span></Link>
                    </li>
                  </ul>
                </div>
              </CSSTransition>
            </li>

            <li>
              <Link to="#"
                onClick={(e) => {
                  e.preventDefault(); // Prevents default navigation
                  toggleMenu("reports");
                }}
                aria-expanded={openMenu === "reports" ? "true" : "false"}
              >
                <FeatherIcon icon="file-text" />
                <span>Reports</span>
                <span className="menu-arrow"></span>
              </Link>
              <CSSTransition
                in={openMenu === "reports"}
                timeout={300}
                classNames="collapse"
                unmountOnExit
              >
                <div className="nav-second-level">
                  <ul>
                    <li>
                      <Link to="/reports/1"><FeatherIcon icon="circle" /><span>Reports 1</span></Link>
                    </li>
                    <li>
                      <Link to="/reports/2"><FeatherIcon icon="circle" /><span>Reports 2</span></Link>
                    </li>
                  </ul>
                </div>
              </CSSTransition>
            </li>
          </ul>
        </div>
        {/* End Sidebar */}
        <div className="clearfix" />
      </div>
    </div>
  );
}

export default SideBar;
