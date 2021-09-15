const mongoose = require('mongoose');
const staffSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    phonenumber:{type: Number}, email:{type: String},
    teaches:[], usertype:{type: String}
});

const Staff = mongoose.model('Staff', staffSchema);
module.exports = Staff;