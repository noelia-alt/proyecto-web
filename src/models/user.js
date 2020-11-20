const mongoose = require('mongoose');
const Schema =mongoose.Schema;


const userSchema = new Schema({
    firstName: String,
    lastName: String,
    realState: String,
    email: String,
    prop: [{
        type: Schema.Types.ObjectId,
        ref: 'prop'

    }]

});

module.exports = mongoose.model('user',userSchema);