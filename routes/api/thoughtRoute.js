const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  //addVideoResponse,
  //removeVideoResponse,
} = require('../../controllers/thoughtController');

// /api/thought
router.route('/').get(getThought).post(createThought);

// /api/thought/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/videos/:videoId/responses
//router.route('/:videoId/responses').post(addVideoResponse);

// /api/videos/:videoId/responses/:responseId
//router.route('/:videoId/responses/:responseId').delete(removeVideoResponse);

module.exports = router;
