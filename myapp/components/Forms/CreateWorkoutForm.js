'use client'
import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";

import { addWorkout } from '@/lib/action';

const CreateWorkoutForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Button
        className='w-full'
        onPress={onOpen}
        color="success"
      >
        <FiPlus />
        <span>Create</span>
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        placement="top-center"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Post Your Workout</ModalHeader>
          <ModalBody>
         <form
         className='flex flex-col'
         action={addWorkout}
         >
          <input
            name='title'
            placeholder='Title...'
            autoComplete='off'
          />
          <input
            type='number'
            placeholder='Duration...'
            autoComplete='off'
            name='duration'

          />
        <input
            type='number'
            placeholder='Calories...'
            autoComplete='off'
            name='calories'
          />
          <Button
          className='w-full'
          type='submit'>Create</Button>
         </form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="flat" onPress={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreateWorkoutForm;
