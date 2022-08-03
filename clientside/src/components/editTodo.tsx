import React, { Fragment, useState } from "react";

type TodoType = {
  todo_id: number;
  description: string;
};

const EditTodo = ({ todo }: { todo: TodoType }) => {
  const [description, setDescription] = useState(todo.description);

  const updateTodo = async (id: number) => {
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location.assign("/");
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Fragment>
      <div className="container">
        <button
          type="button"
          className="btn btn-warning m-2"
          data-bs-toggle="modal"
          data-bs-target={`#id${todo.todo_id}`}
        >
          Edit
        </button>

        <div
          className="modal fade"
          id={`id${todo.todo_id}`}
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Todo
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    setDescription(todo.description);
                  }}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={(e) => updateTodo(todo.todo_id)}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
