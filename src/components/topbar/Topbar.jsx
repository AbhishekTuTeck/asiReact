import { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import sitensso75Logo from "../../../public/assets/images/nnso75LOGO.svg";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
function TopBar() {
  const navigate = useNavigate();
  const _returnIsActive = (path) => {
    return window.location.pathname === path ? "active" : "";
  };

  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarHidden((prev) => !prev);
  };

  useEffect(() => {
    document.body.setAttribute("data-sidebar", isSidebarHidden ? "hidden" : "visible");
  }, [isSidebarHidden]);

  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const UserMenu = (
    <div
      href="#"
      className="d-flex align-items-center justify-content-center link-body-emphasis text-decoration-none "
    >
      <span className="textAvatar me-2">A</span>
      <span>
        <strong className="text-truncate">Abhishek Ghosh</strong>
        <p className="mb-0 text-grey text-truncate">
          abhishek.ghosh@tuteck.com
        </p>
      </span>
    </div>
  );
  return (
    <div className="topbar-custom">
    <div className="container-fluid">
      <div className="d-flex justify-content-between">
        <ul className="list-unstyled topnav-menu mb-0 d-flex align-items-center">
          <li>
            <button className="button-toggle-menu nav-link" onClick={toggleSidebar}>
              <FeatherIcon icon="menu" className="noti-icon" />
            </button>
          </li>
          <li className="d-none d-lg-block">
            <img src={sitensso75Logo} alt="Logo" />
          </li>
        </ul>
        <ul className="list-unstyled topnav-menu mb-0 d-flex align-items-center">
          {/* Fullscreen Button */}
          <li className="d-none d-sm-flex">
              <button type="button" className="btn nav-link" onClick={toggleFullscreen}>
                <FeatherIcon
                  icon={isFullscreen ? "minimize" : "maximize"} 
                  className="align-middle fullscreen noti-icon"
                />
              </button>
            </li>

          {/* Notifications */}
          <Dropdown as="li" className="dropdown notification-list topbar-dropdown">
            <Dropdown.Toggle as="a" className="nav-link dropdown-toggle">
              <FeatherIcon icon="bell" className="noti-icon" />
              <span className="badge bg-danger rounded-circle noti-icon-badge">9</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-lg dropdown-menu dropdown-menu-end dropdown-lg">
              <Dropdown.Item href="#/action-1">
                <div className="notify-icon"></div>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="notify-details">Carl Steadham</p>
                  <small className="text-muted">5 min ago</small>
                </div>
                <p className="mb-0 user-msg">
                  <small className="fs-14">
                    Completed <span className="text-reset">Improve workflow in Figma</span>
                  </small>
                </p>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* User Dropdown */}
          <Dropdown as="li" className="dropdown notification-list topbar-dropdown">
            <Dropdown.Toggle as="a" className="nav-link dropdown-toggle nav-user me-0">
              <div className="d-flex align-items-center">
                <div className="avterLetter rounded-circle">AR</div>
                <div className="pro-user-name ms-2 d-flex align-items-center">
                  <div className="me-2">
                    <h6 className="m-0">Alexender Roncaglianio</h6>
                    <p className="text-muted m-0">SRO Superintendent</p>
                  </div>
                  <i className="mdi mdi-chevron-down" />
                </div>
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu dropdown-menu-end profile-dropdown rounded-4">
              <div className="dropdown-header noti-title text-center">
                <div className="avterLetter rounded-circle mb-2">AR</div>
                <div className="pro-user-name mb-2">
                  <h6 className="m-0">Alexender Roncaglianio</h6>
                  <p className="text-muted m-0">SRO Superintendent</p>
                </div>
                <h6 className="text-overflow m-0 fw-bold">Id : PSDAD.HQ.001</h6>
              </div>
              <div className="dropdown-divider mt-1" />
              <a href="auth-logout.html" className="dropdown-item notify-item text-center">
                <i className="mdi mdi-location-exit fs-16 align-middle" />
                <span>Logout</span>
              </a>
            </Dropdown.Menu>
          </Dropdown>
        </ul>
      </div>
    </div>
  </div>
  );
}

export default TopBar;
