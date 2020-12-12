const mongoose = require('mongoose')
const mongooseAutoInc = require('mongoose-auto-increment');

const Schema = mongoose.Schema;

const contentSchema = new Schema({
    title: {
        type: String,
        unique: true, 
        required : true,
    },
    desc: {
        type: String,
        required: true,
    },
    director: {
        type: [String],
        required: true,
    },
    actors: {
        type: [String],
        required : true,
    },
    year: {
        type : Number,
        required: true,
    },
    genre: {
        type: [String],
        required: true,
    },
    movieRating: {
        type: Number,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        default: 0
    },
    ratingNumber: {
        type: Number,
        default: 0
    },
    reviews: {
        type: [Object],
        default: []
    },
    addDate: { 
        type: Date, 
        default: Date.now 
    },
});

contentSchema.plugin(mongooseAutoInc.plugin, 'content');
module.exports = mongoose.model('content', contentSchema);