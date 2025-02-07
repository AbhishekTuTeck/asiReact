import PropTypes from "prop-types";
import SideBar from "../sidebar/Sidebar";
import TopBar from "../topbar/Topbar";
import Footer from "../footer/Footer";
import Breadcrumb from "../breadcrumb/Breadcrumb";

export default function Layout(props) {
  return (
    <div id="app-layout">
      <TopBar />
      <SideBar />
      <div className="content-page">
        <div className="content">
          {/* Start Content*/}
          <div className="container-fluid">
           
            {props.children}
          </div>
          {/* container-fluid */}
        </div>
        {/* content */}
        {/* Footer Start */}
        <Footer />
        {/* end Footer */}
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
