const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/add-product", (req, res, next) => {
  res.send(
    "<form action ='/product' method='POST'><input type='text' placeholder='Product Name' name='title' /> <input type='text' placeholder='Quantity' name='size' /> <button type='submit'>Add Product</button> </form> "
  );
});

app.post("/product", (req, res) => {
  console.log(req.body); // undefined w/o bodyParser package
  let { title, size } = req.body;
  console.log(title, size);
  res.redirect("/");
});

app.get("/", (req, res, next) => {
  res.send("Hii From Express");
});

app.listen(3000);
