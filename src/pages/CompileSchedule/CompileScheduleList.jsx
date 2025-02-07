import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export default function CompileScheduleList() {
  return (
    <div className="content-page">
  <div className="content">
    {/* Start Content*/}
    <div className="container-fluid">
      <div className="py-3 d-flex align-items-sm-center flex-sm-row flex-column">
        <div className="flex-grow-1">
          <h4 className="fs-18 fw-semibold m-0">Compile Schedule</h4>
        </div>
        <div className="text-end">
          <ol className="breadcrumb m-0 py-0">
            <li className="breadcrumb-item">
              <a href="javascript: void(0);">Dashboard</a>
            </li>
            <li className="breadcrumb-item">
              <a href="javascript: void(0);">Schedule Activities</a>
            </li>
            <li className="breadcrumb-item active">Compile Schedule</li>
          </ol>
        </div>
      </div>
    </div>
    {/* container-fluid */}
  </div>
  {/* content */}
  {/* Footer Start */}
  <footer className="footer">
    <div className="container-fluid">
      <div className="row">
        <div className="col fs-13 text-muted text-center">
          Copyright © 2025 , National Statistical Office - Industrial Statistics
          Wing. All rights reserved. Ministry of Statistics &amp; Programme
          Implementation.
        </div>
      </div>
    </div>
  </footer>
  {/* end Footer */}
</div>

  );
}
