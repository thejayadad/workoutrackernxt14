'use client'
import React, { useEffect, useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isToday, isSameMonth } from 'date-fns';
import { getUserWorkouts } from '@/lib/data';

const DashboardCalendar = () => {
  const [calendarDays, setCalendarDays] = useState([]);
  const [workoutCounts, setWorkoutCounts] = useState({});
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    const daysOfMonth = eachDayOfInterval({ start: startOfMonth(currentMonth), end: endOfMonth(currentMonth) });

    setCalendarDays(daysOfMonth);

    const fetchWorkouts = async () => {
      try {
        const workouts = await getUserWorkouts();
        const counts = {};

        workouts.forEach((workout) => {
          const date = new Date(workout.createdAt);
          const day = format(date, 'yyyy-MM-dd');

          if (!counts[day]) {
            counts[day] = 0;
          }

          counts[day]++;
        });

        setWorkoutCounts(counts);
      } catch (error) {
        console.error('Error fetching workouts:', error);
      }
    };

    fetchWorkouts();
  }, [currentMonth]);

  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => new Date(prevMonth.getFullYear(), prevMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1, 1));
  };

  return (
    <div>
      <div className="text-center mb-4">
        <button onClick={handlePrevMonth}>{'<'}</button>
        <span>{format(currentMonth, 'MMMM yyyy')}</span>
        <button onClick={handleNextMonth}>{'>'}</button>
      </div>
      <div className='grid grid-cols-7 gap-2'>
        {calendarDays.map((day, index) => (
          <div key={index} className={`p-2 text-center ${isToday(day) ? 'bg-blue-200' : isSameMonth(day, currentMonth) ? 'bg-grey' : 'text-gray-400'}`}>
            <div>{format(day, 'd')}</div>
            <div>{workoutCounts[format(day, 'yyyy-MM-dd')] || 0}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCalendar;
