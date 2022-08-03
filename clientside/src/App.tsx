import React, { Fragment } from "react";
import "./App.css";

import InputTodo from "./components/inputTodo";
import allTodos from "./components/allTodos";
function App() {
  return (
    <Fragment>
      <div className="container mt-5 text-center">{InputTodo()}</div>
      <div className="container mt-5 text-center">{allTodos()}</div>
    </Fragment>
  );
}

export default App;
