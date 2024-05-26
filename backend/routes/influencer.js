const express = require("express");
const { faker } = require("@faker-js/faker");

const router = express.Router();

const { Influencer } = require("../models/Influencer");
const { Client } = require("../models/Client");
// get all influencers

router.get("/all", async function (req, res) {
  try {
    const result = await Influencer.find();

    return res.json({
      influencers: result,
    });
  } catch (error) {
    return res.json({
      influencers: [],
    });
  }
});

// MOCK
// postman / admin ui
router.post("/create", async function (req, res) {
  // logic for creating a new influencer for now
  try {
    const { email, username } = req.body;

    const newInfluencer = new Influencer({
      username: username,
      email: email,
      totalPosts: faker.number.int({ min: 10, max: 1000 }),
      follower: faker.number.int({ min: 0, max: 1000000 }),
      following: faker.number.int({ min: 0, max: 1000000 }),
      totalPosts: faker.number.int({ min: 0, max: 100000 }),
      reach: faker.number.int({ min: 0, max: 100000000 }),
      engagement: faker.number.int({ min: 0, max: 100000 }),
      password: faker.number.int({ min: 100000, max: 999999 }),
    });

    // save to our database
    const influencer = await newInfluencer.save();

    return res.json({
      data: influencer,
    });
    // return the data
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      su,
    });
  }
});

/**
 * Route to seed the database with some fake data
 * Will create 10 fake influencers
 */
router.get("/seed", async function (req, res) {
  try {
    const newInfluencer = new Influencer({
      username: faker.internet.userName(),
      email: faker.internet.email(),
      totalPosts: faker.number.int({ min: 10, max: 1000 }),
      follower: faker.number.int({ min: 0, max: 1000000 }),
      following: faker.number.int({ min: 0, max: 1000000 }),
      totalPosts: faker.number.int({ min: 0, max: 100000 }),
      reach: faker.number.int({ min: 0, max: 100000000 }),
      engagement: faker.number.int({ min: 0, max: 100000 }),
      password: faker.number.int({ min: 100000, max: 999999 }),
    });
    console.log(newInfluencer);
    const influencer = await newInfluencer.save();
    return res.json({
      data: influencer,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "internal server error!",
    });
  }
});

/*
 * To fetch the influencer data
 * METHOD: POST
 */
router.post("/", async function (req, res) {
  try {
    const { email } = req.body;

    const influencer = await Influencer.find({
      email,
    });

    if (influencer.length === 0) {
      return res.json({
        data: [],
      });
    }

    return res.json({
      data: influencer,
    });
  } catch (error) {
    return res.json({
      data: [],
    });
  }
  // retrieve data from db
});

router.post("/connect/insta/:id", async (req, res) => {
  try {
    const { email, password } = req.body;
    const { id } = req.params;
    if (!email || !password || !id) {
      return res.status(400).json({
        success: false,
        message: "Email , password or id  is missing!",
      });
    }
    const existingInsta = await Influencer.findOne({ email: email });
    if (!existingInsta) {
      return res.status(400).json({
        success: false,
        message: "This email does not exist!" /*  */,
      });
    }
    if (existingInsta.password != password) {
      return res.status(400).json({
        success: false,
        message: "Oops! This password didnot matched!" /*  */,
      });
    }
    //connect it
    await Client.findByIdAndUpdate(id, {
      instagram: existingInsta._id,
    });
    return res.status(200).json({
      success: true,
      message: "Instagram connected successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "terribly went wrong!",
    });
  }
});

module.exports = router;
