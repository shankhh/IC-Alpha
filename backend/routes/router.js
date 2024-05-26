const InfluencerRouter = require("./influencer");
const ClientRouter = require("./client");
const CampaignRouter = require("./campaign");

const routerSetup = (app) => {
  app.use("/influencer", InfluencerRouter);

  // client routes
  app.use("/client", ClientRouter);

  // campaigns route
  app.use("/campaigns", CampaignRouter);
};

module.exports = routerSetup;
