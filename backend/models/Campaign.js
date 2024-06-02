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
  completed: {
    type: Boolean,
    default: false,
  },

  completedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
    },
  ],
  selected: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
  messages: [
    {
      user_id: mongoose.Schema.Types.ObjectId,
      id: mongoose.Schema.Types.ObjectId,
      message: String,
    },
  ],
});

module.exports.Campaign = mongoose.model("Campaign", CampaignSchema);
