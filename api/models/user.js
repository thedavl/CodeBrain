const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { 
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    name: { type: String, required: true },
    password: { type: String, required: true },
    todo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Problem'
    }],
    finished: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Problem'
    }]
})

module.exports = mongoose.model('User', userSchema);