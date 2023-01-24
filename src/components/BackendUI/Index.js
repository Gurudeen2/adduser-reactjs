import React from "react";
import { Col, Row, Form, Button, Container } from "react-bootstrap";
import "./BackendForm.css";

const Index = () => {
  return (
    <Container id="container-backend">
      <Form onSubmit={onSubmit}></Form>
    </Container>
  );
};

export default Index;
