const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propSchema = new Schema({
    type: String,
    street: String,
    sizeM2: Number,
    rent: Number,
    salePrice: Number,
    broker: {

        type: Schema.Types.ObjectId,
        ref: 'user'
    }

});

module.exports = mongoose.model('prop', propSchema);