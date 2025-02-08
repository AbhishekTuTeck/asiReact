import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FeatherIcon from "feather-icons-react";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb"; // Adjust the path as needed

export default function CompileScheduleList() {
  return (

    <>
    <Breadcrumb title="Compile Schedule" />
    <Card className='rounded-4'>
      <Card.Header>
        <Card.Title className='mb-0'>Filter - Compile Schedule</Card.Title>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label>State <span className='text-danger'>*</span></Form.Label>
              <Form.Select size="sm">
                <option>Select</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label>District <span className='text-danger'>*</span></Form.Label>
              <Form.Select size="sm">
                <option>Select</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Sector <span className='text-danger'>*</span></Form.Label>
              <Form.Select size="sm">
                <option>Select</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Scheme <span className='text-danger'>*</span></Form.Label>
              <Form.Select size="sm">
                <option>Select</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Survey Year <span className='text-danger'>*</span></Form.Label>
              <Form.Select size="sm">
                <option>Select</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label>PSL No.</Form.Label>
              <Form.Select size="sm">
                <option>Select</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label>SRO <span className='text-danger'>*</span></Form.Label>
              <Form.Select size="sm">
                <option>Select</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Status <span className='text-danger'>*</span></Form.Label>
              <Form.Select size="sm">
                <option>Select</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Unit Name</Form.Label>
              <Form.Select size="sm">
                <option>Select</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label className='w-100'>&nbsp;</Form.Label>
              <Form.Control size="sm" type="text" placeholder="Enter" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label className='w-100'>&nbsp;</Form.Label>
              <Button variant="primary" size="sm" className='d-flex align-items-center'>
                <FeatherIcon icon="search" /> Search
              </Button>
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
    </>


  );
}
