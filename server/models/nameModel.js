const mongoose = require('mongoose');

const nameSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('name', nameSchema);