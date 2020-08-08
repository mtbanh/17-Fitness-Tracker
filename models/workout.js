const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {type: Date, default:Date.now},
    exercises: 
        [
            {
            type: {type:String, trim:true, require: "Please enter an exercise type"},
            name: {type:String, trim:true, require: "Please enter an exercise name"},
            duration: {type:Number, require: "Please enter the exercise duration in minutes"},
            weight: {type:Number, default:0},
            reps: {type:Number, default:0},
            sets: {type:Number, default:0},
            distance: {type:Number, default:0}
            }
        ],
        totalDuration: {type: Number, default: 0}
    },
);


const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;