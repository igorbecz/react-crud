import React from "react";
import Form from "react-bootstrap/Form";

class UpdateBookForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.book.title,
      author: this.props.book.author,
      releaseYear: this.props.book.releaseYear,
      translated: this.props.book.translated
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleCheckboxChange = ({ target }) => {
    this.setState({ [target.name]: target.checked });
  };

  render() {
    return (
      <Form>
        <Form.Group controlId="formTitle">
          <Form.Label>Book's title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formAuthor">
          <Form.Label>Book's author</Form.Label>
          <Form.Control
            type="text"
            name="author"
            value={this.state.author}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formReleaseYear">
          <Form.Label>Book's release year</Form.Label>
          <Form.Control
            type="text"
            name="releaseYear"
            value={this.state.releaseYear}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formCheckbox">
          <Form.Check
            type="checkbox"
            label="Translated to polish?"
            name="translated"
            value={this.state.translated}
            onChange={this.handleCheckboxChange}
          />
        </Form.Group>
      </Form>
    );
  }
}

export default UpdateBookForm;
