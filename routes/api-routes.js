const db = require("../models");

module.exports = (app)=>{
   app.get("api/workouts", (req,res)=>{
       db.Workout.find({})
       .then(dbWorkout =>{
           dbWorkout.forEach(workout=>{
               let total =0;
               workout.exercises.forEach(e=>{
                   total+=e.duration;
               })

               workout.totalDuration = total
           });

           res.json(dbWorkout);
       })
       .catch(err=>{
           console.log(err);
           res.json(err);
       })
   });
   
   
}