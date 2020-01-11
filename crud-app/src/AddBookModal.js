import React from "react";
import Modal from "react-bootstrap/Modal";
import AddBookForm from "./AddBookForm";
import Button from "react-bootstrap/Button";

class AddBookModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0
    };

    this.formRef = React.createRef();
  }

  handleClick = () => {
    this.addNewBook();
  };

  async addNewBook(params) {
    const node = this.formRef.current;
    console.log(node.state);
    if (node.state.author !== "") {
      await fetch("books/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(node.state)
      });
    }
  }

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.handleClose}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddBookForm ref={this.formRef} />
          <Button onClick={this.handleClick}>Add new book</Button>
        </Modal.Body>
      </Modal>
    );
  }
}

export default AddBookModal;
