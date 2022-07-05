const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser

} = require('../../controllers/userController');
const { route } = require('./thoughtRoute');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser);
// /api/users/:userId
router.route('/').delete(deleteUser);
// /api/users/:userId
router.route('/').put(updateUser);


module.exports = router;
