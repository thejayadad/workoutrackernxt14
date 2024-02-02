import mongoose from "mongoose";

const WorkoutSchema = new mongoose.Schema({
   creator: {type: String, required: true},
   title: String,
   duration: Number,
   calories: Number,
  }, {timestamps: true})

export default mongoose?.models?.Workout || mongoose.model("Workout", WorkoutSchema)