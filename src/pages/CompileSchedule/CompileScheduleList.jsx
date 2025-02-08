import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button, Spinner, Row, Col, Card, Form, Toast } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb"; // Adjust the path as needed
import DataTableComponent from "../../components/datatable/DataTableComponent"; // Adjust the path as needed
export default function CompileScheduleList() {
  const [loading, setLoading] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);


 
  const handleSearchClick = () => {
    setLoading(true);

    // Simulate a search action (e.g., API call)
    setTimeout(() => {
      setLoading(false);

      // Simulating success or error randomly
      const isSuccess = Math.random() > 0.5;

      if (isSuccess) {
        setShowSuccessToast(true);
      } else {
        setShowErrorToast(true);
      }
    }, 3000);
  };


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
              {!loading ? (
        <Button
          variant="primary"
          size="sm"
          className="d-flex align-items-center"
          onClick={handleSearchClick}
        >
          <FeatherIcon icon="search" /> Search
        </Button>
      ) : (
        <Button variant="primary" disabled size="sm">
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
            className="me-2"
          />
          Searching...
        </Button>
      )}
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
    <Card className='rounded-4'>
    <Card.Header>
        <Card.Title className='mb-0'>Filter - Compile Schedule</Card.Title>
      </Card.Header>
      <Card.Body>
         <DataTableComponent />
      </Card.Body>
    </Card>
      {/* Success Toast */}
      <Toast
        show={showSuccessToast}
        onClose={() => setShowSuccessToast(false)}
        className="position-fixed start-50 translate-middle-x mb-3"
        bg="success"
        style={{ bottom: "20px", zIndex: 1050 }} 
      >
        <Toast.Header>
          <strong className="me-auto text-white">Success</strong>
        </Toast.Header>
        <Toast.Body className="text-white">
          ✅ Search completed successfully!
        </Toast.Body>
      </Toast>

      {/* Error Toast */}
      <Toast
        show={showErrorToast}
        onClose={() => setShowErrorToast(false)}
        className="position-fixed start-50 translate-middle-x mb-3"
        bg="danger"
        style={{ bottom: "20px", zIndex: 1050 }}  
      >
        <Toast.Header>
          <strong className="me-auto text-white">Error</strong>
          <small className="text-white">Just now</small>
        </Toast.Header>
        <Toast.Body className="text-white">
          ❌ Search failed! Please try again.
        </Toast.Body>
      </Toast>
    </>


  );
}
