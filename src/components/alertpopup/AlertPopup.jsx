import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


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
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body className="text-center pt-0">
        <>
        {isDanger ? (
          <div className="deleteCircle">
            <div className="innerCircle">
              <FeatherIcon icon="trash-2" />
            </div>
          </div>
        ) : (
          <div className="outerSuccessCircle">
            <div className="innerSuccessCircle">
              <i class="bi bi-check-lg"></i>
            </div>
          </div>
        )}
        <h4>{title}</h4>
        <p className="m-0">{desription}</p>
        </>
      </Modal.Body>
      {isDanger ? (
        <Modal.Footer>
          <div className="d-grid gap-2">
            <Button 
              variant="danger" 
              onClick={handleClose}
            >
              {confirmbtnText}
            </Button>
            <Button 
              variant="link" 
              onClick={handleClose}
            >
              {closeBtnText}
            </Button>
          </div>
        </Modal.Footer>
      ) : (
        <Modal.Footer>
          <div className="d-grid gap-2">
            <Button 
              variant="success" 
              onClick={handleClose} 
            >
              {confirmbtnText} <i class="bi bi-arrow-right ms-1"></i>
            </Button> 
            <Button 
              variant="link" 
              onClick={handleClose}
            >
              {closeBtnText}
            </Button>
          </div>
        </Modal.Footer>
      )}
    </Modal>
  );
}

export default AlertPopup;
