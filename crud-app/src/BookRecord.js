import React from "react";
import Button from "react-bootstrap/Button";
import UpdateBookModal from "./UpdateBookModal";

class BookRecord extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.book.id,
      books: [],
      show: false
    };

    console.log(this.props.book.releaseYear);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleShow() {
    this.setState({ show: true });
  }
  handleClose() {
    this.setState({ show: false });
  }

  async deleteRecord(params) {
    await fetch("books/" + this.props.book.id, { method: "DELETE" });
    this.props.action();
  }

  render() {
    return (
      <tr>
        <td>{this.props.book.id}</td>
        <td>{this.props.book.title}</td>
        <td>{this.props.book.author}</td>
        <td>{this.props.book.releaseYear}</td>
        <td>{this.props.book.translated ? "Yes" : "No"}</td>
        <td>
          <Button onClick={this.deleteRecord.bind(this)}>Delete</Button>
          <Button style={{ marginLeft: "20px" }} onClick={this.handleShow}>
            Update
          </Button>
          <UpdateBookModal
            book={this.props.book}
            show={this.state.show}
            handleClose={this.handleClose}
          />
        </td>
      </tr>
    );
  }
}

export default BookRecord;
