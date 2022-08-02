const Pool = require("pg").Pool;

const poool = new Pool({
  user: "postgres",
  password: "1362001bb",
  host: "localhost",
  database: "pern_todo",
  port: 5432,
});

module.exports = poool;
