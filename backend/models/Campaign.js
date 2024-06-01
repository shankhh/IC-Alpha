const mongoose = require("mongoose");

/*
 * Schema for Influencer for Mongo
 */
const CampaignSchema = new mongoose.Schema({
  niche: [String],
  country: [String],
  title: String,
  details: String,
  age_group: [String],
  gender: [String],
  interestedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
    },
  ],
  amount: String,
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
});

module.exports.Campaign = mongoose.model("Campaign", CampaignSchema);
