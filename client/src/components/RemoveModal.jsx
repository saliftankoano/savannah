import "./RemoveModal.css";
import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import CustomForm from "./CustomForm";
import RemoveTlt from "./RemoveTlt";

export default function RemoveModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span onClick={handleShow}>
        <RemoveTlt />
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton id="modal-header">
          <Modal.Title id="modal-title">REMOVE EMPLOYEE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CustomForm />
        </Modal.Body>
      </Modal>
    </>
  );
}
