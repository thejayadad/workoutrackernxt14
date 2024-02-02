'use server'
import db from "./db"
import Workout from "@/models/Workout"

export const addWorkout = async (formData) => {
    const userId = await getServerUser(authOptions)
    const userEmail = userId.email
    console.log("UserId Email " + userEmail)
    const { title } =
    Object.fromEntries(formData);
    try {
        db.connect()
        const newWorkout = new Workout({
            title,
            creator:  userId.email 
        })
        await newWorkout.save()
    } catch (error) {
        throw new Error("Failed to create workout! " + error);
    }
    revalidatePath("/dashboard");
    redirect("/dashboard");

}