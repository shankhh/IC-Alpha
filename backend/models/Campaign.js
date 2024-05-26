const mongoose = require("mongoose");

/*
 * Schema for Influencer for Mongo
 */
const CampaignSchema = new mongoose.Schema({
  title: String,
  description: String,
  tags: [
    {
      type: String,
    },
  ],
  budget: Number,
  interestedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Influencer",
    },
  ],
});

module.exports.Campaign = mongoose.model("Campaign", CampaignSchema);
