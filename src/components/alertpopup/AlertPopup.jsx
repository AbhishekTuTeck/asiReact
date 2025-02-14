import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FeatherIcon from "feather-icons-react";


function AlertPopup({ title, desription, confirmbtnText, closeBtnText, show, handleClose, variant}) {

  const isDanger = variant === "danger";

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={isDanger ? "alert-danger-popup popupCustomModal" : "alert-success-popup popupCustomModal"}
    >
      {/* <Modal.Header closeButton></Modal.Header> */}
      <Modal.Body className="text-center pt-5">
        <>
        {isDanger ? (
          <div className="outerCircle outerDanger">
            <div className="innerCircle innerDanger">
              <i class="bi bi-trash3"></i>
            </div>
          </div>
        ) : (
          <div className="outerCircle outerSuccess">
            <div className="innerCircle innerSuccess">
              <i class="bi bi-check-lg"></i>
            </div>
          </div>
        )}
        <h4 className="text-dark">{title}</h4>
        <p className="m-0">{desription}</p>
        {isDanger ? (
        
        <div className="d-grid gap-2 mt-5 mb-3">
          <Button 
            variant="danger" 
            onClick={handleClose}
          >
            {confirmbtnText}
          </Button>
          <Button 
            variant="link" 
            onClick={handleClose}
            className="td-none"
          >
            {closeBtnText}
          </Button>
        </div>
      
    ) : (
      
        <div className="d-grid gap-2 mt-5 mb-3">
          <Button 
            variant="success" 
            onClick={handleClose} 
          >
            {confirmbtnText} <i class="bi bi-arrow-right ms-1"></i>
          </Button> 
          <Button 
            variant="link" 
            onClick={handleClose}
            className="td-none"
          >
            {closeBtnText}
          </Button>
        </div>
      
    )}
        </>
      </Modal.Body>
      
    </Modal>
  );
}

export default AlertPopup;
