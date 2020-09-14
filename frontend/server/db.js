const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "Afnan786",
  port: 3000,
  database: "ultimate_asian_food_e_shop",
});

// const pool = new Pool({
//   user: "JorgeMarioCobo",
//   host: "localhost",
//   database: "Asian_Food_E-shop",
//   password: "",
//   port: 5432,
// });

module.exports = pool;
