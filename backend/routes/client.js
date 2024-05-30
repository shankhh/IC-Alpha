const jwt = require("jsonwebtoken");
const express = require("express");
const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");
const JWT_SECRET = process.env.JWT_SECRET;
const router = express.Router();
const { injectToken, isAuth } = require("../middleware/index");
const { Influencer } = require("../models/Influencer");
const { Client } = require("../models/Client");

const { ClientConstants } = require("../constants/client_constants");

// get all influencers

router.post("/signup", async function (req, res) {
  try {
    const { email, password, type, name } = req.body;
    if (!email || !password || !type || !name) {
      return res.status(400).json({
        success: false,
        message: "Something went wrong",
      });
    }

    if (email.length < 1 || password.length < 1 || type.length < 1) {
      return res.status(400).json({
        success: false,
        message: "Something went wrong",
      });
    }

    if (Object.values(ClientConstants).includes(type)) {
      const hashedPassword = bcrypt.hashSync(password, 10);

      const newClient = await Client({
        email,
        password: hashedPassword,
        type,
        name,
      });

      const savedClient = await newClient.save();

      return res.status(201).json({
        success: false,
        message: "user signed up",
        client: savedClient,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Type is not valid.",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

router.post("/signin", async function (req, res) {
  try {
    const { email, password } = req.body;

    // check if client exists
    const clientExists = await Client.findOne({
      email,
    });

    const isValidPassword = bcrypt.compareSync(password, clientExists.password);

    if (!clientExists) {
      return res.status(400).json({
        success: false,
        message: "client does not exist",
      });
    }
    if (!isValidPassword) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      {
        email: clientExists.email,
        id: clientExists._id,
      },
      JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
    return res.status(200).json({
      success: false,
      message: "Signed in",
      client: clientExists,
      token: token,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

router.get("/profile", injectToken, isAuth, async (req, res) => {
  try {
    const { id } = req.user;
    const client = await Client.findById(id)
      .populate("instagram", "-password")
      .select("-password");
    return res.json({
      success: true,
      profile: client,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

module.exports = router;
