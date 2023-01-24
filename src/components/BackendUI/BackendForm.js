import React, { useState } from "react";
import { Col, Row, Form, Button, Container } from "react-bootstrap";

import "./BackendForm.css";

const BackendForm = (props) => {
  const [url, setUrl] = useState("");
  const [apiParam, setApiParam] = useState([{}]);

  const removeFieldHandler = (index) => {
    const rows = [...apiParam];

    rows.splice(index, 1);
    setApiParam(rows);
  };
  const handleChangeMultiple = (index, event) => {
    const { name, value } = event.target;
    const list = [...apiParam];
    list[index][name] = value;
    setApiParam(list);
  };

  const handleChange = (e) => {
    setUrl(e.target.value);
  };
  const addApiFieldParam = () => {
    setApiParam([
      ...apiParam,
      {
        // apiparam: "",
      },
    ]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      url: url,
      apiparameter: apiParam,
    };
  };

  return (
    <Container id="container-backend">
      <h4>Consume API</h4>

      <Form onSubmit={onSubmit}>
        <Row>
          <Col>
            <Form.Group as={Row} controlId="apiurl">
              <Form.Label column sm="6" className="text-left">
                API URL*
              </Form.Label>
              <Col sm="7">
                <Form.Control
                  type="text"
                  name="apiurl"
                  onChange={handleChange}
                  style={{ height: "1.8rem" }}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter API URL!
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          </Col>
        </Row>
        {apiParam.map((data, index) => {
          let count = index + 1;
          return (
            <Row key={index}>
              <Col sm="10">
                <Form.Group as={Row} controlId="apiurl">
                  <Form.Label column sm="6" className="text-left">
                    API PARAMETER {" " + count}*
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control
                      name={"apiparam" + count}
                      onChange={(evnt) => handleChangeMultiple(index, evnt)}
                      type="text"
                      style={{ height: "1.8rem" }}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter API PARAMETER!
                    </Form.Control.Feedback>
                  </Col>
                  <Col>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={removeFieldHandler}
                    >
                      Remove
                    </Button>
                  </Col>
                </Form.Group>
              </Col>
            </Row>
          );
        })}
        <Row className="mt-2">
          <Col>
            <Button size="md" variant="info" onClick={addApiFieldParam}>
              Add
            </Button>
          </Col>
          <Col></Col>
        </Row>

        <Row>
          <Col></Col>
          <Col>
            <Button
              type="submit"
              variant="success"
              size="md"
              className="mt-2 btn-block"
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
      <Row className="mt-2">
        <Col>
          <Form.Group as={Row} controlId="output">
            <Form.Label column sm="6" className="text-left">
              Output
            </Form.Label>
            <Col sm="7">
              <Form.Control as="textarea" rows={3} />
            </Col>
          </Form.Group>
        </Col>
      </Row>
    </Container>
    // </Container>
  );
};

export default BackendForm;
