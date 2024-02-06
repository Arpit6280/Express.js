const express = require("express");
const path = require("path");

const router = express.Router();

//product controller
const productsController = require("../controllers/produts");

router.get("/", productsController.getProduts);

module.exports = router;
