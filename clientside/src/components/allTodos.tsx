import React, { Fragment, useEffect, useState } from "react";

import EditTodo from "./editTodo";

const AllTodos = () => {
  const [todos, setTodos] = useState([]);
  console.log(todos);
  //delete

  const deleteTodo = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo["todo_id"] !== id));
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  //edit

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);
  return (
    <Fragment>
      <table className="table text-center mt-5 control">
        <thead>
          <tr>
            <th>Todos</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        {todos.map((todo) => (
          <tbody key={todo["todo_id"]}>
            <tr>
              <td>{todo["description"]}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button
                  className="btn btn-danger m-2"
                  onClick={() => deleteTodo(todo["todo_id"])}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </Fragment>
  );
};
export default AllTodos;
