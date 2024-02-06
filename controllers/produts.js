const path = require("path");
exports.getAddPRoduts = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
};

exports.postAddProduts = (req, res) => {
  console.log(req.body);
  let { title, size } = req.body;
  console.log(title, size);
  res.redirect("/");
};

exports.getProduts = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
};
