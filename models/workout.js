const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

  exercises:[
    { 
          name: {
          type: String,
          trim: true,
          required: "Enter a name for excercise"
        },
        type: {
          type: String,
          trim: true,
          required: "Enter excercise type"
        },
        duration: {
          type: Number,
          trim: true,
          required: "Enter the duration"

        },

        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
        type: Number,
        },
        distance: {
          type: Number,
        },


    }

   



  ],
    day: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
