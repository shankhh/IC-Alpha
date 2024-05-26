const mongoose = require("mongoose");

/*
 * Schema for Influencer for Mongo
 */
const ClientSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  type: String,
  instagram: mongoose.Schema.Types.ObjectId,
});

module.exports.Client = mongoose.model("Client", ClientSchema);
