const pool = require("../db");
import { Request, Response } from "express";

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await pool.query(`SELECT username,password FROM users;`);
    res.status(200).json(user);
  } catch (err) {
    console.error(err.message);
  }
};
