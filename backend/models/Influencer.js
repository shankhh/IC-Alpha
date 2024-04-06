const mongoose = require(
'mongoose'
);

/* 
* Schema for Influencer for Mongo
*/
const InfluencerSchema = new mongoose.Schema({
    username: String,
    email: String,
    totalPosts: Number,
    follower: Number,
    following: Number,
    totalPosts: Number,
    reach: Number,
    engagement: Number,
});

module.exports.Influencer = mongoose.model('Influencer', InfluencerSchema);