"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require("cors");
const app = (0, express_1.default)();
const pool = require("./db");
app.use(cors());
app.use(express_1.default.json());
//create todo
app.post("/todos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { description } = req.body;
        const newTodo = yield pool.query(`INSERT INTO todo(description) VALUES ('${description}') RETURNING *;`);
        res.json(newTodo.rows[0]);
    }
    catch (err) {
        console.error(err.message);
    }
}));
//get todos
app.get("/todos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allTodos = yield pool.query("SELECT * FROM todo;");
        res.json(allTodos.rows);
    }
    catch (err) {
        console.error(err.message);
    }
}));
// get todo with id
app.get(`/todos/:id`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const todoId = yield pool.query(`SELECT * FROM todo WHERE todo_id=${id};`);
        res.json(todoId.rows);
    }
    catch (err) {
        console.error(err.message);
    }
}));
//update todo
app.put("/todos/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = yield pool.query(`UPDATE todo SET description='${description}' WHERE todo_id=${id} RETURNING *;`);
        res.json(updateTodo.rows[0]);
    }
    catch (err) {
        console.error(err.message);
    }
}));
//delete todo
app.delete("/todos/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleteTodo = yield pool.query(`DELETE FROM todo where todo_id=${id};`);
        res.json("Deleted successfully");
    }
    catch (err) {
        console.error(err.message);
    }
}));
app.listen(5000, () => {
    console.log("Server has started in port 5000");
});
