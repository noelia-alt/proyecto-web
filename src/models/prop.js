const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propSchema = new Schema({
    type: String,
    street: String,
    old: Number,
    size: Number,
    broker: {

        type: Schema.Types.ObjectId,
        ref: 'user'
    }

});

module.exports = mongoose.model('prop', propSchema);