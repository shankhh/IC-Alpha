const InfluencerRouter = require("./influencer");

const routerSetup = (app) => {
    app.use('/influencer', InfluencerRouter)
}

module.exports = routerSetup;