const mongoose = require(
    'mongoose'
    );
    
    /* 
    * Schema for Influencer for Mongo
    */
    const ClientSchema = new mongoose.Schema({
        email: String,
       password: String,
       type: String,
    });
    
    module.exports.Client = mongoose.model('Client', ClientSchema);