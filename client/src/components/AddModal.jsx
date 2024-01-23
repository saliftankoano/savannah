import "./AddModal.css";
import { useEffect, useState } from "react";

import Modal from "react-bootstrap/Modal";
import BasicForm from "./BasicForm";
//ToolTips
import AddTlt from "./AddTlt";

export default function AddModal() {
  const [show, setShow] = useState(false);
  const [entity, setEntity] = useState("ENTITY");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {}, [entity]);
  return (
    <>
      <span onClick={handleShow}>
        <AddTlt />
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton id="add-modal-header">
          <Modal.Title id="add-modal-title">ADD {entity}</Modal.Title>
        </Modal.Header>
        <Modal.Body id="add-modal-body">
          <BasicForm />
        </Modal.Body>
      </Modal>
    </>
  );
}
