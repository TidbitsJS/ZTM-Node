const express = require("express");

const messagesController = require("../controllers/messages.controller");

// sort of middleware ( instance of middleware & routes )
const messagesRouter = express.Router();

messagesRouter.get("/", messagesController.getMessages);
messagesRouter.post("/", messagesController.postMessages);

module.exports = messagesRouter;
