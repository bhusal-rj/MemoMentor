const mongoose = require('mongoose')

const RevisionSchema = new mongoose.Schema({
	subject: {
		type: String,
		maxlength: 50,
	},
	revisionTitle: {
		type: String,
		maxlength: 200,
		required:true
	},
	createdAt: {
		type: Date,
		default: () => Date.now(),
	},
	currentCount: {
		type: Number,
		default: 0,

	},
	completed: {
		type: [Boolean],
		default: [false, false, false, false, false],
	},
	repetitionNumber: {
		type: [Number],
		default: [1, 3, 6, 18, 30]
	},
	createdBy: {
		type: mongoose.Types.ObjectId,
		ref: 'User',
	},
})

module.exports = mongoose.model('Revision', RevisionSchema)
