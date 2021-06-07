const express = require("express");

const friendsController = require("../controllers/friends.controller");

// sort of middleware ( instance of middleware & routes )
const friendsRouter = express.Router();

// create custom middleware only for friends router
friendsRouter.use((req, res, next) => {
  console.log(`FriendsRouter ${req.ip}`); // get the ip
  next();
});

friendsRouter.get("/", friendsController.getFriends);
friendsRouter.post("/", friendsController.postFriend);
friendsRouter.get("/:friendId", friendsController.getFriend);

module.exports = friendsRouter;
