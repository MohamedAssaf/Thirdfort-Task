const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {type: String, required: true},
    password: {type:String, required: true},
    notes: [{
        text : String,
        isArchived : Boolean,
        isDeleted: Boolean
        }]
});


// Export the model
module.exports = mongoose.model('user', userSchema);