const db = require("../models");

module.exports = (app)=>{
   app.get("api/workouts", (req,res)=>{
       db.Workout.find({})
        .populate("exercises")
        .then(dbWorkout =>{
            res.json(dbWorkout);
        })
       .catch(err=>{
           console.log(err);
           res.json(err);
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

   app.post("/api/workouts/:id", (req,res)=>{
       db.Workout.create(req.body)
        .then(data=>{
            db.Workout.findOneAndUpdate(
                {_id: req.params.id},
                {$push:{exercises:data._id}, $inc:{totalDuration:data.duration}},
                {new:true}
                .then(dbWorkout =>{
                    res.json(dbWorkout)
                })
                .catch(err=>{
                    res.json(err)
                })
            )
        })
   })
   
   
}