const express = require("express");
const { faker } = require("@faker-js/faker");
const mongoose = require("mongoose");

const router = express.Router();

const { Influencer } = require("../models/Influencer");
// const { Client } = require("../models/Client");
const { Campaign } = require("../models/Campaign");

// get all influencers

// creating a new campaign
router.post("/create", async function (req, res) {
  try {
    const { title, description, tags, budget } = req.body;
    const newCampaign = await Campaign({
      title,
      description,
      tags,
      budget,
    });

    const savedCampaign = await newCampaign.save();

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
    const campaigns = await Campaign.find({}).populate("interestedBy");

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

module.exports = router;
