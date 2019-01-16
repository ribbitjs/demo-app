const express = require("express");
const app = new express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/main.html"));
});
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../ribbit.statics/Home.html"));
// });

// app.get("/two", (req, res) => {
//   res.sendFile(path.join(__dirname + "../ribbit.statics/hi.html"));
// });

// app.get("/merp/three", (req, res) => {
//   res.sendFile(path.join(__dirname, "../ribbit.statics/merp/three.html"));
// });

app.listen(4000);
console.log("listing on port 4000...");
