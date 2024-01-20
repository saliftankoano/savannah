import "./AddModal.css";
import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import CustomForm from "./CustomForm";
//ToolTips
import AddTlt from "./AddTlt";

export default function AddModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span onClick={handleShow}>
        <AddTlt />
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton id="add-modal-header">
          <Modal.Title id="add-modal-title">ADD EMPLOYEE</Modal.Title>
        </Modal.Header>
        <Modal.Body id="add-modal-body">
          <CustomForm />
        </Modal.Body>
      </Modal>
    </>
  );
}
