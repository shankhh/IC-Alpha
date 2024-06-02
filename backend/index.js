require("dotenv").config(); //->env configure // to access env variables
const { createServer } = require("http");
const { Server } = require("socket.io");
const express = require("express");
const morgan = require("morgan"); // logging
const cors = require("cors");
const app = express();
const httpServer = createServer(app);
const port = process.env.PORT || 4000;
const DB_URL = process.env.DATABASE_URL || "";
const mongoose = require("mongoose");
mongoose
  .connect(DB_URL)
  .then(() => console.log("📔 DATABASE UP"))
  .catch((err) => console.log("💀 DB failed misserbly", err));

app.use(
  cors({
    origin: "*",
  })
);
const io = new Server(httpServer, {
  /* options */
  cors: {
    origin: "*",
  },
});

app.use(express.json());
app.use(morgan("tiny"));
app.use((req, res, next) => {
  req.io = io;
  return next();
});

app.get("/", (req, res) => {
  res.json({ message: "hi world" });
});

httpServer.listen(port, () => {
  console.log("⚡ server up : ", port);
});
module.exports = { io };
require("./socket/");
const routes = require("./routes/router.js");
routes(app);
