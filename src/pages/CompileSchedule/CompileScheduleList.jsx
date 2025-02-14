import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button, Spinner, Row, Col, Card, Form } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb"; 
import ToastComponent from "../../components/toast/ToastContainer";
import DataTableComponent from "../../components/datatable/DataTableComponent"; 
import { useDispatch } from 'react-redux';
import { showToast } from '../../redux/toast-slice/toastSlice';
import Modal from 'react-bootstrap/Modal';
import AlertPopup from "../../components/alertpopup/AlertPopup";

const employeeColumns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Employee Name" },
  { key: "department", label: "Department" },
  { key: "salary", label: "Salary" },
  { key: "status", label: "Status" },
];

const employeeData = [
  { 
    id: 1, 
    name: "Alice Brown", 
    department: "HR", 
    salary: "₹50,000" ,
    status: "Pending"
  },
  { 
    id: 2, 
    name: "Bob Williams", 
    department: "IT", 
    salary: "₹80,000",
    status: "Completed"
  },
  { 
    id: 3, 
    name: "Charlie Davis", 
    department: "Marketing", 
    salary: "₹60,000",
    status: "Rejected"
  },
];

export default function CompileScheduleList() {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false); // Modal visibility state
  const [selectedRow, setSelectedRow] = useState(null); // Store the row to be deleted
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

  const handleEdit = (row) => {
    console.log("Edit:", row);
  };

  // Open delete confirmation modal
  const handleDelete = (row) => {
    setSelectedRow(row); // Store the row to be deleted
    setShow(true); // Show the modal
  };

  // Close the modal without deleting
  const handleClose = () => {
    setShow(false);
    setSelectedRow(null); // Clear the selected row
  };

  // Confirm deletion
  const handleConfirmDelete = () => {
    console.log("Delete:", selectedRow);
    setShow(false); // Close the modal
    setSelectedRow(null); // Clear the selected row
    dispatch(showToast({ message: "Item deleted successfully!", variant: "success" }));
  };

  return (
    <>
      {/* <ToastComponent /> */}

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
                    <FeatherIcon icon="search" className='me-1' /> Search
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
          <DataTableComponent 
            columns={employeeColumns} 
            data={employeeData} 
            onEdit={handleEdit} 
            onDelete={handleDelete} 
          />
        </Card.Body>
      </Card>

      {/* Alert Modal for Delete Confirmation */}
      {/* <AlertPopup
        title="Delete Modal"
        description="Are you sure you want to delete this item?"
        confirmbtnText="Yes Delete"
        closeBtnText="No! Cancel For Now"
        show={show}
        handleClose={handleClose}
        variant="danger"
        onConfirm={handleConfirmDelete} // Pass the delete action to the modal
      /> */}
      <AlertPopup
        title="Delete this Record from Draft?"
        desription="Are You Sure Delete this Record from Draft? one Delete no way to Recover this data."
        confirmbtnText="Yes Delete"
        closeBtnText="No , Cancel now"
        show={show}
        handleClose={handleClose}
        variant="danger"
        onConfirm={handleConfirmDelete} // Pass the delete action to the modal
      />
    </>
  );
}
