import DashboardCalendar from '@/components/Dashboard/DashboardCalendar';
import { getUserWorkoutCount } from '@/lib/data';
import getServerUser from '@/lib/getServerUser';
import { redirect } from 'next/navigation';
import React from 'react';



const DashboardPage = async () => {
  const count = await getUserWorkoutCount()
  const user = await getServerUser()
  if(!user){
    return (
      redirect("/")
    )
  }

  return (
    <div className='flex flex-col justify-center mx-auto w-full p-6'>
        <h1 className='text-center font-bold'>Workouts Tracked</h1>
            <DashboardCalendar />
     </div>
  );
};

export default DashboardPage;
