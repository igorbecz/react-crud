import React from "react";
import "./App.css";
import { Layout } from "./components/Layout";
import AddBookModal from "./AddBookModal";
import BooksTable from "./BooksTable";
import Button from "react-bootstrap/Button";

function App() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <Layout>
        <Button style={{ margin: "20px" }} onClick={handleShow}>
          Add
        </Button>
        <AddBookModal show={show} handleClose={handleClose} />
        <BooksTable />
      </Layout>
    </React.Fragment>
  );
}

export default App;
