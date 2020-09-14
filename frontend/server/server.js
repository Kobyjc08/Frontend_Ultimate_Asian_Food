const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
//middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
const { Pool } = require("pg");

// const pool = new Pool({
//   host: "localhost",
//   user: "postgres",
//   password: "Afnan786",
//   port: 3000,
//   database: "ultimate_asian_food_e_shop",
// });

const pool = new Pool({
  user: "JorgeMarioCobo",
  host: "localhost",
  database: "Asian_Food_E-shop",
  password: "",
  port: 5432,
});

//routes

app.use("/authentication", require("./routes/jwtAuth"));

app.use("/dashboard", require("./routes/dashboard"));

//GET FAVORITE PRODUCTS
app.get("/favorites", function (req, res) {
  pool
    .query("select * from products p2 where p2.id in (11,3,9,4)")
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});
//Already using-end

//GET ALL PRODUCT BY CATEGORIES ---DONE EHSAN
app.get("/productsByCategory/:categoriesName", function (req, res) {
  const product = req.params.categoriesName;
  pool
    .query(
      "select * from products join categories on products.category_id = categories.id where categories.name like $1",
      [`%${product}%`]
    )
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});
// dashboard display orders
app.get("/orderItems/:customerId", function (req, res) {
  const customerId = req.params.customerId;
  pool
    .query(
      "select o.order_reference, p.product_name, p.unit_price, oi.quantity from products p inner join order_items oi on p.id=oi.product_id inner join orders o on oi.order_id=o.id inner join users c on o.customer_id=users.user_id where users.user_id=$1",
      [customerId]
    )
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});

app.listen(5000, () => {
  console.log(`Server is starting on port 5000`);
});
