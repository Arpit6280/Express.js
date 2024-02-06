const express = require("express");
const path = require("path");

const router = express.Router();

const contact = require("../controllers/contact");

router.get("/contactus", contact.getContact);

router.post("/success", contact.postSuccess);

module.exports = router;
