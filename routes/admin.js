const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
  // res.send(
  //   "<form action ='/admin/product' method='POST'><input type='text' placeholder='Product Name' name='title' /> <input type='text' placeholder='Quantity' name='size' /> <button type='submit'>Add Product</button> </form> "
  // );
});

router.post("/product", (req, res) => {
  console.log(req.body);
  let { title, size } = req.body;
  console.log(title, size);
  res.redirect("/");
});

module.exports = router;
