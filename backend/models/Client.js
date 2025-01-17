const mongoose = require("mongoose");

/*
 * Schema for Influencer for Mongo
 */
const ClientSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  type: String,
  instagram: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Influencer",
  },
  bio: String,
  dob: Date,
  niche: String,
  country: String,
  gender: String,
  oboarded: {
    type: Boolean,
    default: false,
  },
  companyName: String,
  companyWebsite: String,
});

module.exports.Client = mongoose.model("Client", ClientSchema);
