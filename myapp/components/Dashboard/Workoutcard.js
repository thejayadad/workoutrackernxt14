
import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';

const WorkoutCard = (title, duration, calories, reps, sets) => {
  return (
    <Accordion variant="splitted">
      <AccordionItem title={title}>
        Duration: {duration} | Sets: {sets} | Calories: {calories} | Reps: {reps}
      </AccordionItem>
      
    </Accordion>
  );
};

export default WorkoutCard;
