const db = require("../models");

module.exports = (app)=>{


   app.get("/api/workouts", (req,res)=>{
       db.Workout.find({})
        .populate("exercises")
        .then(dbWorkout =>{
            res.json(dbWorkout);
        })
        .catch(err=>{
            res.json(err)
        })
   });
   
   app.get("/api/workouts/range", (req,res)=>{
       db.Workout.find({})
        .populate("exercises")
        .then(dbWorkout =>{
            res.json(dbWorkout)
        })
        .catch(err=>{
            res.json(err)
        })
   })

   app.post("/api/workouts", (req,res)=>{
       db.Workout.create({day:Date.now()})
        .then(workout=>{
            res.json(workout);
        })
        .catch(err=>{
            res.json(err)
        })
   })

   app.put("/api/workouts/:id", (req,res)=>{
       db.Exercise.create(req.body)
        .then(data=>{
            db.Exercise.findOneAndUpdate(
                {_id: req.params.id},
                {$push:{exercises:data._id}, $inc:{totalDuration:data.duration}},
                {new:true})
                .then(dbWorkout =>{
                    res.json(dbWorkout)
                })
                .catch(err=>{
                    res.json(err)
                })
        })
   })
   
   
}