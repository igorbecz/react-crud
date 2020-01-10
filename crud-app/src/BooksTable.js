import React from "react";
import Table from "react-bootstrap/Table";
import BookRecord from "./BookRecord";

class BooksTable extends React.Component {
  constructor(props) {
    super(props);

    this.handler = this.handler.bind(this);

    this.state = {
      books: []
    };
  }

  async handler() {
    const response = await fetch("books");
    const books = await response.json();

    this.setState({
      books: books
    });
  }

  async componentDidMount() {
    this.handler();
  }

  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Release year</th>
            <th>Translated to polish?</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.state.books.map(book => (
            <BookRecord book={book} action={this.handler} key={book.id} />
          ))}
        </tbody>
      </Table>
    );
  }
}

export default BooksTable;
