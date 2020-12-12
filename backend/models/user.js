const mongoose = require('mongoose')
const mongooseAutoInc = require('mongoose-auto-increment');

const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    email: { 
        type: String, 
        unique: true, 
        required: true 
    },
    password: { 
        type: String, 
        required: true
     },
    name: { 
        type: String,
        required: true 
    },
    isAdmin: { 
        type: Boolean, 
        default: false 
    },
    reviews: {
        type: [Object],
        default: []
    }
});

UserSchema.plugin(mongooseAutoInc.plugin, 'User');
module.exports = mongoose.model('User', UserSchema);