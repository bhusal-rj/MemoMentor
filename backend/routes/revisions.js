const express = require('express')

const router = express.Router()

const {getRevision, getAllRevisions, createRevision, updateRevision, deleteRevision} = require("../controllers/revisions")

router.route('/').post(createRevision).get(getAllRevisions)
router.route('/:id').get(getRevision).delete(deleteRevision).patch(updateRevision)

module.exports = router
