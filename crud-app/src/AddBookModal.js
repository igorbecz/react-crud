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
    //window.location.reload(false);
  };

  async addNewBook(params) {
    const node = this.formRef.current;
    console.log(node.state);
    if (
      /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]*$/g.test(node.state.author) &&
      /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]*$/g.test(node.state.title) &&
      /^[0-9]*\.?[0-9]*$/g.test(node.state.releaseYear)
    ) {
      await fetch("books/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(node.state)
      });
      window.location.reload(false);
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
