const express = require("express");
const { faker } = require("@faker-js/faker");

const router = express.Router();

const { Influencer } = require("../models/Influencer");

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
    });

    // save to our database
    const influencer = await newInfluencer.save();

    return res.json({
      data: influencer,
    });
    // return the data
  } catch (error) {
    console.log(error);
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
      totalPosts: 500,
      follower: 10085,
      following: 69,
      totalPosts: 109,
      reach: 235823,
      engagement: 69789,
    });

    console.log(newInfluencer);
    const influencer = await newInfluencer.save();

    console.log(influencer);

    return res.json({
      data: influencer,
    });
  } catch (error) {
    console.log(error);
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

module.exports = router;
