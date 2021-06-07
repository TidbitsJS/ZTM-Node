const model = require("../models/friends.model");

function getFriend(req, res) {
  const friendId = +req.params.friendId;
  const friend = model[friendId];

  if (friend) {
    res.status(200).json(friend);
  } else {
    // chaining status code with json response
    res.status(404).json({
      error: "Friend does not exist",
    });
  }
}

function postFriend(req, res) {
  // check whether name field is provided or not
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing friend name",
    });
  }

  const newFriend = {
    name: req.body.name,
    id: model.length,
  };

  model.push(newFriend);
  res.status(200).json(newFriend);
}

function getFriends(req, res) {
  // Content-Type will be set to 'application/json'
  // res.send(friends);

  // to explicitly declare it as json
  res.json(model);
}

module.exports = {
  getFriend,
  getFriends,
  postFriend,
};
