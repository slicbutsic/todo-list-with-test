'use client';
import { v4 as uuidv4 } from 'uuid';
import { Plus } from 'lucide-react';
import Modal from './Modal';
import { useState } from 'react';
import { addTodo } from '@/api';
import { FormEventHandler } from 'react';
import { useUser } from "@clerk/nextjs";

export default function AddTaskButton() {
  const { user } = useUser()
  const userId = user?.id;

  const [modalOpen, setModalOpen] = useState(false);
  const [newTaskValue, setNewTaskValue] = useState<string>('');

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!userId) return;
    await addTodo({
      id: uuidv4(),
      title: newTaskValue,
      userId: userId
    });
    setNewTaskValue('');
    setModalOpen(false);
    location.reload();
  }

  return (
    <div className="flex justify-center items-center">
      <button onClick={() => setModalOpen(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 flex items-center justify-center">
        Add a new task <Plus size={20} className="ml-2" />
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="font-bold text-xl text-gray-800 mb-4">Add new task</h3>
          <div className="modal-action">
            <input
              value={newTaskValue}
              onChange={e => setNewTaskValue(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full py-3 px-4 text-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <button type='submit' className="btn bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">Submit</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
