const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/", (req, res) => {
  fs.readFile("message.txt", (err, data) => {
    if (err) {
      console.log(err);
    }
    res.send(
      `${data} <form action ='/' method='POST' onSubmit="document.getElementById('username').value= localStorage.getItem('username')" ><input type='text' placeholder='Enter message'  name='message'  /> <input type='hidden'  name='username' id='username' /> <button type='submit'> Send Message </button> </form> `
    );
  });
});

router.post("/", (req, res) => {
  let { message, username } = req.body;
  console.log(req.body);
  fs.appendFile("message.txt", `${username}: ${message}`, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
  console.log(message);
});

module.exports = router;
