const mongoose = require('mongoose');

const problemSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    link: { type: String, required: true },
    notes: { type: String, required: false },
    solution: { type: String, required: false },
    isComplete: { type: Boolean, required: false, default: false},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Problem', problemSchema);