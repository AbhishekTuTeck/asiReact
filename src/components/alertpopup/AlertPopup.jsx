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
      className={isDanger ? "alert-danger-popup" : "alert-success-popup"}
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{desription}</Modal.Body>
      {isDanger ? (
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose} >
          {confirmbtnText}
        </Button> <Button variant="link" onClick={handleClose}>
          {closeBtnText}
        </Button>
      </Modal.Footer>
      ) : (
        <Modal.Footer>
        <Button variant="success" onClick={handleClose} >
          {confirmbtnText}
        </Button> <Button variant="link" onClick={handleClose}>
          {closeBtnText}
        </Button>
      </Modal.Footer>
      )}
    </Modal>
  );
}

export default AlertPopup;
