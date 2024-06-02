const { Campaign } = require("../models/Campaign");
const { io } = require("../index");
const { SOCKET_CONSTANTS } = require("../constants/SOCKET_CONSTANTS");
const SOCKET_TO_USER_ID_MAP = {};
const ID_TO_SOCKET_MAP = {};
const ROOMIDS = {};
io.on("connection", (socket) => {
  console.log("User connected ", Math.floor(Math.random() * 1000));
  socket.on(SOCKET_CONSTANTS.USER_CONNECTED_FORUM, (data) => {
    console.log(data);
    socket.join(data?.id);
  });
  socket.on(SOCKET_CONSTANTS.USER_NEW_MESSAGE_SENT, async (data) => {
    const { id } = data;
    try {
      await Campaign.findByIdAndUpdate(id, {
        $push: {
          messages: data,
        },
      });
      io.to(id).emit(SOCKET_CONSTANTS.USER_NEW_MESSAGE, data);
    } catch (error) {
      io.to(id).emit(SOCKET_CONSTANTS.MESSAGE_FAILED, {
        message: "Failed to send Messages",
      });
    }
  });
});
