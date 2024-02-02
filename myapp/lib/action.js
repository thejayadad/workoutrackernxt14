'use server'
import db from "./db"
import Workout from "@/models/Workout"
import getServerUser from "./getServerUser"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const addWorkout = async (formData) => {
    const userId = await getServerUser(authOptions)
    const userEmail = userId.email
    console.log("UserId Email " + userEmail)
    const { title, duration, calories } =
    Object.fromEntries(formData);
    try {
        db.connect()
        const newWorkout = new Workout({
            title,
            duration,
            calories,
            creator:  userId.email 
        })
        await newWorkout.save()
    } catch (error) {
        throw new Error("Failed to create workout! " + error);
    }
    revalidatePath("/dashboard");
    redirect("/dashboard");

}