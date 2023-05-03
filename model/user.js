const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    clue_num: {
        type: Number,
        default: 1
    },
    role: {
        type: Boolean,
        default: false
    },
    start_time: {
        type: Date,
        default: null,
    },
    time_taken: [{
        clue_num: Number,
        time: Number,
    }],
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);