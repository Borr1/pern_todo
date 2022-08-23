const pool = require("../db");
import { Request, Response } from "express";

export const postUser = async (req: Request, res: Response) => {
  try {
    const { first_name, last_name, username, email, password } = req.body;
    const newUser = await pool.query(
      `INSERT INTO users(first_name,last_name,username,email,password) VALUES ('${first_name}','${last_name}','${username}','${email}','${password}',) RETURNING *;`
    );
    res.status(200).send("ok");
  } catch (err) {
    console.error(err.message);
  }
};
