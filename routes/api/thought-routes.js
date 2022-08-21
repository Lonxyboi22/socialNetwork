const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    removeThought,
    addReaction,
    removeReaction,
    updateThought,

} = require('../../controllers/thought-controller');

// /api/thoughts/<userId>
router.route('/').get(getAllThought).post(createThought);

// /api/thoughts/<userId>/<thoughtId>
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought);

//remove reply :)
router.route('/:thoughtId/reactions').delete(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;