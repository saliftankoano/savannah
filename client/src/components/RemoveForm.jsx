import "./RemoveForm.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";

const departments = await getAllDepts();
async function getAllDepts() {
  const response = await fetch("http://localhost:5172/depts");
  const depts = await response.json();

  let finalResults = [];
  depts.forEach((element) => {
    finalResults.push(element.name);
  });

  return finalResults;
}

export default function RemoveForm() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    fullName: yup.string().required(),
    location: yup.string().required(),
    phone: yup.string().required(),
    extension: yup.string().required(),
    email: yup.string().required(),
    dept: yup.string().required(),
  });
  const initValues = {
    fullName: "",
    location: "",
    phone: "",
    extension: "",
    email: "",
    dept: "",
  };
  const [department, setDepartment] = useState("");

  function displayDepts(departments) {
    let sortedDepts = [...departments.sort()];
    return sortedDepts.map((option) => (
      <option key={option} value={option.name}>
        {option}
      </option>
    ));
  }
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={initValues}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit} className=" m-l-2">
          <Row className="mb-3">
            <Form.Group
              md="4"
              controlId="validationFormik101"
              className="position-relative col-lg-12"
            >
              <FloatingLabel controlId="floatingInput" label="Full name">
                <Form.Control
                  type="text"
                  name="fullName"
                  value={values.fullName}
                  onChange={handleChange}
                  isValid={touched.fullName && !errors.fullName}
                  maxLength={90}
                  required
                  placeholder="Mark Morris"
                />
              </FloatingLabel>

              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              md="4"
              controlId="validationFormik102"
              className="position-relative col-lg-12"
            >
              <FloatingLabel controlId="floatingInput" label="Location">
                <Form.Control
                  type="text"
                  name="location"
                  value={values.location}
                  onChange={handleChange}
                  placeholder="CSI-234"
                  maxLength={20}
                  required
                  isValid={touched.location && !errors.location}
                />
              </FloatingLabel>

              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              className="position-relative col-lg-12"
              md="4"
              controlId="validationFormikphone2"
            >
              <InputGroup hasValidation className="position-relative">
                <FloatingLabel controlId="floatingInput" label="Phone">
                  <Form.Control
                    type="text"
                    placeholder="747-712-9812"
                    aria-describedby="inputGroupPrepend"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    isInvalid={!!errors.phone}
                    maxLength={12}
                    required
                  />
                </FloatingLabel>
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.phone}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              md="6"
              controlId="validationFormik103"
              className="position-relative col-lg-12"
            >
              <FloatingLabel controlId="floatingInput" label="Extension">
                <Form.Control
                  type="text"
                  placeholder="9812"
                  name="extension"
                  value={values.extension}
                  onChange={handleChange}
                  isInvalid={!!errors.extension}
                  maxLength={4}
                  required
                />
              </FloatingLabel>

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.extension}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group
              controlId="validationFormik104"
              className="position-relative col-lg-12"
            >
              <FloatingLabel controlId="floatingInput" label="Email">
                <Form.Control
                  type="email"
                  placeholder="example@savannah.com"
                  pattern="/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                  maxLength={255}
                  required
                />
              </FloatingLabel>

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3 modal-select-container">
            <Form.Group
              md="3"
              controlId="validationFormik105"
              className="position-relative d-flex-column align-items-end col-lg-12"
            >
              <Form.Select
                aria-label="Default select example"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option defaultValue="Select Department">
                  Select Department...
                </option>
                {displayDepts(departments)}
              </Form.Select>

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.dept}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Button type="submit" className="col-lg-11 m-auto update-form-btn">
              ADD
            </Button>
          </Row>
        </Form>
      )}
    </Formik>
  );
}
