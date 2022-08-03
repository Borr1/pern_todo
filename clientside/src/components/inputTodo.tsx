import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location.assign("/");
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <div className="container mt-5 text-center">
        <h1>Pern Todo List</h1>
        <form className="d-flex mt-5">
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={onSubmit} className="btn btn-success">
            Add
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default InputTodo;
