import CreateWorkoutForm from '@/components/Forms/CreateWorkoutForm';
import { getUserWorkouts } from '@/lib/data';

const WorkoutPage = async () => {
  const workouts = await getUserWorkouts();

  return (
    <div>
      {workouts.length === 0 ? (
        <div className='min-h-screen flex flex-col items-center mt-24'>
          <CreateWorkoutForm />
          <p>No workouts created yet.</p>
        </div>
      ) : (
        <div className='flex flex-col gap-4'>
          <CreateWorkoutForm />
          <div className='flex flex-wrap -m-2'>
            {workouts.map((workout) => (
              <div
                className='p-2 lg:w-1/3 md:w-1/2 sm:w-1/2 w-full bg-secondary rounded-md shadow-md'
                key={workout.id}
              >
                <h2 className='text-lg font-bold mb-2 text-center text-grey'>{workout.title}</h2>
                <div className='flex gap-6 justify-between items-center'>
                <p className='text-gray-600'>Duration: {workout.duration} mins</p>
                <p className='text-gray-600'>Calories: {workout.calories}</p>
                  <div className='flex items-center gap-2'>
                  <span className='text-gray-600'>Update</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkoutPage;
