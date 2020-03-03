const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const exerciseSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, {
    timestamps: true, //https://mongoosejs.com/docs/guide.html#timestamps
});


module.exports = mongoose.model('exercise', exerciseSchema);