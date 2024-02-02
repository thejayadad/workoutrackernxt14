import { getUserWorkouts } from '@/lib/data'
import getServerUser from '@/lib/getServerUser'
import React from 'react'

const WorkoutPage = async () => {
    const user = await getServerUser()
    const userEmail = user.email
    console.log("UserEmail " + userEmail)
    const workouts = await getUserWorkouts()

  return (
    <div>
       { workouts.length === 0 ? (
        <div className='min-h-screen flex justify-center mt-24'>
          <p>No workouts created yet.</p>
        </div>
      ) : (
        workouts.map((workout) => (
          <div className='' key={workout.id}>
            <p>{workout.title}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default WorkoutPage