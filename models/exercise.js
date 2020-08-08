const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExcerciseSchema = new Schema({
    type: { type: String, trim: true, require: "Please enter an exercise type" },
    name: { type: String, trim: true, require: "Please enter an exercise name" },
    duration: { type: Number, require: "Please enter the exercise duration in minutes" },
    weight: { type: Number, default: 0 },
    reps: { type: Number, default: 0 },
    sets: { type: Number, default: 0 },
    distance: { type: Number, default: 0 }
});

const Exercise = mongoose.model("Exercise", ExcerciseSchema);

module.exports = Exercise;