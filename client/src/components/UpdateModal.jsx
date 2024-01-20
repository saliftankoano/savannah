import "./UpdateModal.css";
import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import CustomForm from "./CustomForm";
import UpdateTlt from "./UpdateTlt";

export default function UpdateModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span onClick={handleShow}>
        <UpdateTlt />
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton id="modal-header">
          <Modal.Title id="modal-title">UPDATE EMPLOYEE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CustomForm />
        </Modal.Body>
      </Modal>
    </>
  );
}
