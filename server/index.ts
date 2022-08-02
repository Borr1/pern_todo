import express, { Express, Request, Response } from "express";
const cors = require("cors");
const app = express();
const pool = require("./db");

app.use(cors());
app.use(express.json());

//create todo

app.post("/todos", async (req: Request, res: Response) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      `INSERT INTO todo(description) VALUES ('${description}') RETURNING *;`
    );
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get todos
app.get("/todos", async (req: Request, res: Response) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo;");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});
// get todo with id

app.get(`/todos/:id`, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const todoId = await pool.query(`SELECT * FROM todo WHERE todo_id=${id};`);
    res.json(todoId.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//update todo

app.put("/todos/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      `UPDATE todo SET description='${description}' WHERE todo_id=${id} RETURNING *;`
    );
    res.json(updateTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//delete todo
app.delete("/todos/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query(
      `DELETE FROM todo where todo_id=${id};`
    );
    res.json("Deleted successfully");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("Server has started in port 5000");
});
