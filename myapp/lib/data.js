'use server'
import db from "./db";
import Workout from "@/models/Workout";
import getServerUser from "./getServerUser";


export const getUserWorkoutCount = async () => {
  const user = await getServerUser();
  const userEmail = user.email;

  try {
    await db.connect();

    const workoutCount = await Workout.countDocuments({ userEmail });

    return workoutCount;
  } catch (error) {
    throw new Error("Failed to fetch workouts! " + error);
  } finally {
    await db.disconnect();
  }
};

export const getUserWorkouts = async () => {
    const user = await getServerUser();
    const userEmail = user.email;
    try {
        await db.connect();
        const userWorkouts = await Workout.find({creator: userEmail})
        return userWorkouts
    } catch (error) {
        throw new Error("Failed to fetch workouts! " + error);

    }finally {
        await db.disconnect();
    }
}
