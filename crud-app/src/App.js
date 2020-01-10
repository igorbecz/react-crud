import React from "react";
import "./App.css";
import { Layout } from "./components/Layout";
import BooksTable from "./BooksTable";

function App() {
  return (
    <React.Fragment>
      <Layout>
        <BooksTable />
      </Layout>
    </React.Fragment>
  );
}

export default App;
