import React from "react";
import ReactDOM from "react-dom";
import Button from "../../UI/Button";
import "./ErrorModal.css";
import Wrapper from "../../Wrapper/Wrapper";

const ModalOverlay = (props) => {
  return (
    <div className="modal-error">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="modal-error_body">
        <p>{props.message}</p>
      </div>
      <footer className="modal-error_footer">
        <Button onClick={props.onClose}>Okay</Button>
      </footer>
    </div>
  );
};

const Backdrop = (props) => {
  <div className="backdrop" onClick={props.onClose} />;
  return;
};
const ErrorModal = (props) => {
  return (
    <Wrapper>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("modal")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onClose={props.onClose}
          title={props.title}
          message={props.message}
        />,
        document.getElementById("modal")
      )}
    </Wrapper>
  );
};
export default ErrorModal;
