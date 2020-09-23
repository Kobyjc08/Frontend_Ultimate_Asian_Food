const router = require("express").Router();
const authorize = require("../middleware/authorize");
const pool = require("../db");

router.post("/", authorize, async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT firstname, lastname,user_email,address,dni,orders.id,order_items.quantity,products.product_name,order_date      FROM users join orders on users.user_id = orders.customer_id join order_items on orders.id = order_items.order_id join products on order_items.product_id = products.id WHERE user_id = $1",
      [req.user.id]
    );

    console.log(user.rows[0]);
    res.json(user.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
