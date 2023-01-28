const express = require('express')

const router = express.Router()

const {getAssignment, getAllAssignments, createAssignment, updateAssignment, deleteAssignment} = require("../controllers/assignments")

router.route('/').post(createAssignment).get(getAllAssignments)
router.route('/:id').get(getAssignment).delete(deleteAssignment).patch(updateAssignment)

module.exports = router

