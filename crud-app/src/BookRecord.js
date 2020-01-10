import React from "react";
import Button from "react-bootstrap/Button";

class BookRecord extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.book.id,
      books: []
    };
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
        <td>{this.props.book.release_year}</td>
        <td>{this.props.book.translated ? "Yes" : "No"}</td>
        <td>
          <Button onClick={this.deleteRecord.bind(this)}>Delete</Button>
          <Button style={{ marginLeft: "20px" }}>Update</Button>
        </td>
      </tr>
    );
  }
}

export default BookRecord;
