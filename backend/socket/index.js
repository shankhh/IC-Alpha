const { io } = require("../index");

io.on("connection", () => {
  console.log("User connected ", Math.floor(Math.random() * 1000));
});
