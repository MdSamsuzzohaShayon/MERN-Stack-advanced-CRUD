const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true, //https://mongoosejs.com/docs/guide.html#timestamps
});


module.exports = mongoose.model('user', userSchema);