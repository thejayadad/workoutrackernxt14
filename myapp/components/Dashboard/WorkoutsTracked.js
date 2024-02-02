'use client'
import React, { useEffect, useState } from 'react';
import { getUserWorkoutCount } from '@/lib/data';

const WorkoutsTracked = () => {
  const [totalWorkouts, setTotalWorkouts] = useState(0);

  useEffect(() => {
    const fetchTotalWorkouts = async () => {
      try {
        const count = await getUserWorkoutCount();
        setTotalWorkouts(count);
      } catch (error) {
        console.error('Error fetching total workouts:', error);
      }
    };

    fetchTotalWorkouts();
  }, []);

  return (
    <div className='text-center'>
      <p>Total Workouts Tracked: {totalWorkouts}</p>
    </div>
  );
};

export default WorkoutsTracked;
