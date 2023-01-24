import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./message.css";

const Message = () => {
  return (
    <Container>
      <Row>
        <Col id="chatbox" >
          <div>Akeem Tolani</div>
          <div>Akeem </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Message;
