const express = require("express");
const path = require("path");

const router = express.Router();

//product controller
const productsController = require("../controllers/produts");

router.get("/add-product", productsController.getAddPRoduts);

router.post("/product", productsController.postAddProduts);

module.exports = router;
