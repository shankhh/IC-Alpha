const { SOCKET_CONSTANTS } = require("../constants/SOCKET_CONSTANTS");
const jwt = require("jsonwebtoken");
const express = require("express");
const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");
const JWT_SECRET = process.env.JWT_SECRET;
const router = express.Router();
const { injectToken, isAuth } = require("../middleware/index");
const { Influencer } = require("../models/Influencer");
const { Client } = require("../models/Client");
const { Campaign } = require("../models/Campaign");
const { ClientConstants } = require("../constants/client_constants");
const { io } = require("../index");
// get all influencers

router.post("/signup", async function (req, res) {
  try {
    const { email, password, type, name, companyName, companyWebsite } =
      req.body;
    console.log(type);
    if (type == ClientConstants.business && (!companyName || !companyWebsite)) {
      console.log("hello");
      return res.status(400).json({
        success: false,
        message: "Missing fields!",
      });
    }
    if (
      type == ClientConstants.influencer &&
      (!email || !password || !type || !name)
    ) {
      console.log(type);
      return res.status(400).json({
        success: false,
        message: "Missing fields!",
      });
    }

    if (email.length < 1 || password.length < 1 || type.length < 1) {
      return res.status(400).json({
        success: false,
        message: "Something went wrong",
      });
    }
    const emailExist = await Client.findOne({
      email: email,
    });
    if (emailExist) {
      return res.status(400).json({
        success: false,
        message: "This email already exist!",
      });
    }
    if (Object.values(ClientConstants).includes(type)) {
      const hashedPassword = bcrypt.hashSync(password, 10);

      const newClient = await Client({
        email,
        password: hashedPassword,
        type,
        name,
        companyName,
        companyWebsite,
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
        type: clientExists.type,
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

router.get("/profile/campaigns", injectToken, isAuth, async (req, res) => {
  try {
    const { id } = req.user;
    const campaigns = await Campaign.find({
      $or: [{ client: id }, { selected: id }] /*  */,
    })
      .populate("interestedBy")
      .populate("client");
    return res.json({
      success: true,
      campaigns: campaigns,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

router.put("/completed/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { user_id } = req.body;
    const updatedCampaign = await Campaign.findByIdAndUpdate(
      id,
      {
        $addToSet: {
          completedBy: user_id,
        },
      },
      {
        new: true,
      }
    );

    if (updatedCampaign.completedBy.length == 2) {
      updatedCampaign.completed = true;
      await updatedCampaign.save();
      io.to(id).emit(SOCKET_CONSTANTS.COMPLETED_CAMPAIGN, {
        message: "Completed",
      });
    }

    if (updatedCampaign.completedBy.length == 1) {
      io.to(id).emit(SOCKET_CONSTANTS.GENERAL_INFO_FORUM, {
        message:
          "Other side has completed this campaign please click on complete to close this campaign",
      });
    }

    return res.json({
      success: true,
      campaign: updatedCampaign,
      message: "Completed from your side!",
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
