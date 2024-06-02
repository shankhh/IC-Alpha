const express = require("express");
const { faker } = require("@faker-js/faker");
const { SOCKET_CONSTANTS } = require("../constants/SOCKET_CONSTANTS");
const mongoose = require("mongoose");
const { ClientConstants } = require("../constants/client_constants");
const router = express.Router();
const { Influencer } = require("../models/Influencer");
// const { Client } = require("../models/Client");
const { Campaign } = require("../models/Campaign");
const { io } = require("../index");
const { injectToken, isAuth } = require("../middleware/index");

// get all influencers

// creating a new campaign
router.post("/create", injectToken, isAuth, async function (req, res) {
  try {
    const { niche, country, title, details, gender, age_group } = req.body;

    if (!niche || !country || !title || !details || !gender || !age_group) {
      return res.status(400).json({
        success: false,
        message: "Missing fields!",
      });
    }
    const newCampaign = new Campaign({
      ...req.body,
      client: req.user.id,
    });
    const alreadyExist = await Campaign.findOne({
      title: title,
    });
    if (alreadyExist) {
      return res.status(400).json({
        success: false,
        message: "Ths campaign already exist!",
      });
    }
    const savedCampaign = await newCampaign.save();
    req.io.emit(SOCKET_CONSTANTS.NEW_CAMPAIGN, { id: newCampaign._id });
    return res.status(201).json({
      success: true,
      message: "campaign created",
      client: savedCampaign,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

// getting all the campaigns
router.get("/all", async function (req, res) {
  try {
    const campaigns = await Campaign.find({})
      .populate("interestedBy")
      .populate("client")
      .sort("-_id");

    if (campaigns.length < 1) {
      return res.status(400).json({
        success: true,
        message: "",
        campaigns: [],
      });
    }

    return res.status(200).json({
      success: false,
      message: "campaigns fetched successfully",
      campaigns,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

// linking with campaign and influencer
router.post("/influencer/interested", async function (req, res) {
  try {
    const { influencerId, campaignId } = req.body;

    // check if campaignExist
    const campaignExist = await Campaign.findOne({
      _id: new mongoose.Types.ObjectId(campaignId),
    });

    if (!campaignExist) {
      return res.status(404).json({
        success: false,
        message: "Campaign does not exist",
      });
    }

    const influencerExist = await Influencer.findOne({
      _id: new mongoose.Types.ObjectId(influencerId),
    });

    if (!influencerExist) {
      return res.status(404).json({
        success: false,
        message: "Influencer does not exist",
      });
    }

    const newInterestedBy = [
      ...campaignExist.interestedBy,
      influencerExist._id,
    ];

    if (campaignExist.interestedBy.includes(influencerId)) {
      return res.status(201).json({
        success: false,
        message: "Already interested in this campaign",
      });
    }

    campaignExist.interestedBy = newInterestedBy;
    const updated = await Campaign.findOneAndUpdate(
      {
        _id: new mongoose.Types.ObjectId(campaignExist._id),
      },
      {
        interestedBy: newInterestedBy,
      },
      {
        new: true,
      }
    ).populate("interestedBy");

    return res.status(200).json({
      success: true,
      message: "Updated Successfully",
      campaign: updated,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
});

router.post("/apply/:post_id", injectToken, isAuth, async (req, res) => {
  const { id, type } = req.user;
  const { post_id } = req.params;
  console.log(req.user);
  try {
    if (type == ClientConstants.business) {
      return res.status(400).json({
        success: false,
        message: "Join Us today as an Influencer 😊",
      });
    }
    await Campaign.findByIdAndUpdate(post_id, {
      $addToSet: { interestedBy: id },
    });
    return res.json({
      success: true,
      id: post_id,
      message: "Applied!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const campaign = await Campaign.findById(id).populate({
      path: "interestedBy",
      populate: {
        path: "instagram",
        model: "Influencer",
      },
    });
    return res.json({
      success: true,
      campaign: campaign,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "terribly went wrong!",
    });
  }
});
router.post("/accept", injectToken, isAuth, async (req, res) => {
  const { user_id, id } = req.body;
  try {
    await Campaign.findByIdAndUpdate(id, {
      selected: user_id,
    });
    return res.json({
      success: false,
      message: "Accepted influencer successfully!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "terribly went wrong!",
    });
  }
});
router.get("/message/:id", async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    return res.json({
      success: true,
      messages: campaign.messages,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "terribly went wrong!",
    });
  }
});
module.exports = router;
