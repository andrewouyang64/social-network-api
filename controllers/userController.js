const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user found with this ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Delete a user and associated thoughts
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user found with this ID' })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() => res.json({ message: 'User and associated thoughts deleted!' }))
      .catch((err) => res.status(500).json(err));
  },


// Update a user
updateUser(req, res) {
  User.findOneAndUpdate({ _id: req.params.userId })
    .then((user) =>
      !user?
        res.status(404).json({ message: 'No user found with this ID' })
        : res.json(user))
   
    .catch((err) => res.status(500).json(err));
},

// Adds a friend to a user with user id.
addFriend(req, res) {
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $addToSet: { friends: req.body } },
    { runValidators: true, new: true }
  )
    .then((user) =>
      !user
        ? res.status(404).json({ message: 'No user found with this id!' })
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
},
// Deletes a friend with user id. Then updates the friends array associated with.
removeReaction(req, res) {
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $pull: { friends: { friendId: req.params.friendId } } },
    { runValidators: true, new: true }
  )
    .then((user) =>
      !user
        ? res.status(404).json({ message: 'No user found with this id!' })
        : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
},

};
