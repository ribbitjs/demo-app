const express = require("express");
const app = new express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../dist")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/main.html"));
});

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../ribbit.statics/index.html"));
// });

// app.get("/two", (req, res) => {
//   res.sendFile(path.join(__dirname, "../ribbit.statics/two.html"));
// });

app.listen(3500);
console.log("listening on port 3500...");
