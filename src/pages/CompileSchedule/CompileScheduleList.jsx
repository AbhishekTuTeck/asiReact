import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button, Spinner, Row, Col, Card, Form } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb"; 
import ToastComponent from "../../components/toast/ToastContainer";
import DataTableComponent from "../../components/datatable/DataTableComponent"; 
import { useDispatch } from 'react-redux';
import { showToast } from '../../redux/toast-slice/toastSlice';

export default function CompileScheduleList() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSearchClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      const isSuccess = Math.random() > 0.5;

      if (isSuccess) {
        dispatch(showToast({ message: "Search completed successfully!", variant: "success" }));
      } else {
        dispatch(showToast({ message: "Error occurred during search!", variant: "danger" }));
      }
    }, 3000);
  };

  return (
    <>
    
      <ToastComponent />

      <Breadcrumb title="Compile Schedule" />

      <Card className='rounded-4'>
        <Card.Header>
          <Card.Title className='mb-0'>Filter - Compile Schedule</Card.Title>
        </Card.Header>
        <Card.Body>
          <Row>
            {/* Dropdown Filters */}
            {[
              "State", "District", "Sector", "Scheme", "Survey Year", "PSL No.", "SRO", "Status", "Unit Name"
            ].map((label, index) => (
              <Col md={3} key={index}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    {label} {["State", "District", "Sector", "Scheme", "Survey Year", "SRO", "Status"].includes(label) && <span className='text-danger'>*</span>}
                  </Form.Label>
                  <Form.Select size="sm">
                    <option>Select</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            ))}

            {/* Search Input */}
            <Col md={3}>
              <Form.Group className="mb-3">
                <Form.Label className='w-100'>&nbsp;</Form.Label>
                <Form.Control size="sm" type="text" placeholder="Enter" />
              </Form.Group>
            </Col>

            {/* Search Button */}
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

      {/* Data Table */}
      <Card className='rounded-4'>
        <Card.Header>
          <Card.Title className='mb-0'>Compile Schedule</Card.Title>
        </Card.Header>
        <Card.Body className='p-0 siteCustomDatatable'>
          <DataTableComponent />
        </Card.Body>
      </Card>
    </>
  );
}
