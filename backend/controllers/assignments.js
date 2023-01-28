const Assignment = require('../models/Assignment')

const { StatusCodes } = require('http-status-codes')

const { BadRequestError, NotFoundError } = require('../errors')

const getAllAssignments = async (req, res) => {
	const assignments= await Assignment.find({ createdBy: req.user.userID }).sort('createdAt')
	res.status(StatusCodes.OK).json({ count: assignments.length, assignments})
}
const createAssignment = async (req, res) => {
	req.body.createdBy = req.user.userID
	console.log(req.body)
	const assignment = await Assignment.create(req.body)
	res.status(StatusCodes.CREATED).json({ assignment })
}

const getAssignment = async (req, res) => {
	const { user: { userID }, params: { id: assignmentID } } = req
	// console.log(userID, assignmentID)
	const assignment = await Assignment.findOne({
		_id: assignmentID,
		createdBy: userID
	})
	if (!assignment) {
		throw new NotFoundError('No assignment found')
	}
	res.status(StatusCodes.OK).json({ assignment })
}

const updateAssignment = async (req, res) => {
	const { user: { userID }, params: { id: assignmentID }, body: { } } = req
	const assignment = await Assignment.findByIdAndUpdate({ _id: assignmentID, createdBy: userID }, req.body, { new: true, runValidators: true })
	if (!assignment) {
		throw new NotFoundError('No Assignment Found')
	}
	res.status(StatusCodes.OK).json({ assignment })
}

const deleteAssignment = async (req, res) => {
	const { user: { userID }, params: { id: assignmentID } } = req
	const assignment = await Assignment.findOneAndDelete({
		_id: assignmentID,
		createdBy: userID,
	})
	if (!assignment) {
		throw new NotFoundError('No assignment Found')
	}
	res.status(StatusCodes.OK).json({ assignment })
}
module.exports = {
	getAllAssignments,
	getAssignment,
	createAssignment,
	updateAssignment,
	deleteAssignment
}
