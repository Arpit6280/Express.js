const express = require("express");


const router = express.Router();

router.get("/login", (req, res) => {
  res.send(
    "<form onSubmit='localStorage.setItem('username', document.getElementById('username').value)' action ='/login' method='POST'><input type='text' placeholder='User Name' name='username' id='username' /> <button type='submit'>Login </button> </form> "
  );
});

router.post("/login", (req, res) => {
  let { username } = req.body;
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
