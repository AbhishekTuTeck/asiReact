import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import DataTableComponent from "../../components/datatable/DataTableComponent"; // Adjust the path as needed
import Breadcrumb from "../../components/breadcrumb/Breadcrumb"; // Adjust the path as needed

export default function CompileScheduleGeneralInfo() {
  return (
    <>
    <Breadcrumb title="General Information" />
    <div>
    <DataTableComponent />
    </div>
  </>

  );
}
