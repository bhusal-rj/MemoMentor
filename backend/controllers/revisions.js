const Revision = require('../models/Revision')

const { StatusCodes } = require('http-status-codes')

const { BadRequestError, NotFoundError } = require('../errors')

const getAllRevisions = async (req, res) => {
	const revisions = await Revision.find({ createdBy: req.user.userID }).sort('createdAt')
	res.status(StatusCodes.OK).json({ count: revisions.length, revisions })
}

const createRevision = async (req, res) => {
	req.body.createdBy = req.user.userID
	const revision = await Revision.create(req.body)
	res.status(StatusCodes.CREATED).json({ revision })
}

const getRevision = async (req, res) => {
	const { user: { userID }, params: { id: revisionID }, body } = req
	const revision = await Revision.findOne({
		_id: revisionID,
		createdBy: userID
	})
	if (!revision) {
		throw new NotFoundError('No revision found')
	}

	res.status(StatusCodes.OK).json({ revision })
}

const updateRevision = async (req, res) => {
	const { user: { userID }, params: { id: revisionID }, body: { } } = req

	const revision = await Revision.findByIdAndUpdate({ _id: revisionID, createdBy: userID }, req.body, { new: true, runValidators: true })

	if (!revision) {
		throw new NotFoundError('No Revision Found')
	}
	res.status(StatusCodes.OK).json({ revision })
}

const deleteRevision = async (req, res) => {
	const { user: { userID }, params: { id: revisionID } } = req
	const revision = await Revision.findOneAndDelete(
		{
			_id: revisionID,
			createdBy: userID,
		}
	)
	if (!revision) {
		throw new NotFoundError('No revision found')
	}
	res.status(StatusCodes.OK).json({ revision })
}
module.exports = {
	getAllRevisions,
	createRevision,
	getRevision,
	updateRevision,
	deleteRevision
}

