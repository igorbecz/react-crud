import React from "react";
import Modal from "react-bootstrap/Modal";
import UpdateBookForm from "./UpdateBookForm";
import Button from "react-bootstrap/Button";

class UpdateBookModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0
    };

    //console.log(this.props.book.id);

    this.formRef = React.createRef();
  }

  handleClick = () => {
    this.updateBook();
    //window.location.reload(false);
  };

  async updateBook(params) {
    const node = this.formRef.current;
    console.log(node.state);
    if (
      /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]*$/g.test(node.state.author) &&
      /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]*$/g.test(node.state.title) &&
      /^[0-9]*\.?[0-9]*$/g.test(node.state.releaseYear)
    ) {
      await fetch("books/" + this.props.book.id, {
        method: "PUT",
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
          <UpdateBookForm ref={this.formRef} book={this.props.book} />
          <Button onClick={this.handleClick}>Update book</Button>
        </Modal.Body>
      </Modal>
    );
  }
}

export default UpdateBookModal;
