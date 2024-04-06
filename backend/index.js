require("dotenv").config() //->env configure // to access env variables
const express = require("express")
const morgan = require("morgan")
const app = express()
const port = process.env.PORT || 4000
const DB_URL = process.env.DATABASE_URL || ""
const mongoose = require("mongoose")
const routes = require("./routes/router.js")
const cors = require("cors");


mongoose
  .connect(DB_URL)
  .then(() => console.log("📔 DATABASE UP"))
  .catch((err) => console.log("💀 DB failed misserbly", err));

app.use(cors({
  origin: "*"
}));
app.use(express.json())
app.use(morgan("tiny"))

app.get("/", (req, res) => {
  res.json({ message: "msg" })
})

routes(app);
app.listen(port, () => {
  console.log("⚡ server up : ", port)
})


