const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Hii From Express");
});

module.exports = router;
