const router = require('express').Router();

const {
    addThought,
    removeThought,
    addReply,
    removeReply
} = require('../../controllers/thought-controller');

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router
    .route('/:userId/:thoughtId')
    .put(addReply)
    .delete(removeThought);

//remove reply :)
router.route('/:userId/:thoughtId/:replyId').delete(removeReply);


module.exports = router;