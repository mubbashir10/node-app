const express = require("express");
const app = new express();

app.get("/", (req, res) => {
  const SERVICE = process.env.SERVICE; // here to demo env variables
  res.send({ message: `💯 yaaay! it works! - ${SERVICE}` });
});

app.listen(80, "localhost", () => {
  console.log("Listening on 80");
});
