const path = require("path");
exports.getContact = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "contactus.html"));
};

exports.postSuccess = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "success.html"));
};
