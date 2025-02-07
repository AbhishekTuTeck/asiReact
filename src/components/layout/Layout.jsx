import PropTypes from 'prop-types';
import SideBar from '../sidebar/Sidebar';
import TopBar from '../topbar/Topbar';

export default function Layout(props) {
  return (
    <div id="app-layout">
       <TopBar />
      <SideBar />
      <div className="SiteContent">
         {props.children}
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
