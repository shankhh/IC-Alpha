const express = require("express");
const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

const router = express.Router();

const { Influencer } = require("../models/Influencer");
const { Client } = require("../models/Client");

const { ClientConstants } = require("../constants/client_constants");

// get all influencers

router.post("/signup", async function (req, res) {
  try {
    const { email, password, type } = req.body;
    if (!email || !password || !type) {
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
    const { email, password, type } = req.body;
    if (Object.values(ClientConstants).includes(type)) {
      // check if client exists
      const clientExists = await Client.findOne({
        email,
      });

      const isValidPassword = bcrypt.compareSync(
        password,
        clientExists.password
      );

      if (!isValidPassword) {
        return res.status(400).json({
          success: false,
          message: "Invalid email or password",
        });
      }

      if (!clientExists) {
        return res.status(400).json({
          success: false,
          message: "client does not exist",
        });
      }

      return res.status(200).json({
        success: false,
        message: "user signed in",
        client: clientExists,
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

module.exports = router;
