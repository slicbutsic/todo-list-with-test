'use client';
import { v4 as uuidv4 } from 'uuid';
import { Plus } from 'lucide-react';
import Modal from './Modal';
import { useState } from 'react';
import { addTodo } from '@/api';
import { useRouter } from 'next/navigation';
import { FormEventHandler } from 'react';
import { useUser } from "@clerk/nextjs";



export default function AddTaskButton() {
  const { user } = useUser()
  const userId = user?.id;
  const router = useRouter();
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
    router.refresh();
  }

  return (
    <div className="flex justify-center items-center">
      <button onClick={() => setModalOpen(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-40 rounded-md flex items-center justify-center">
        Add a new task <Plus size={20} className="ml-2"/>
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className='font-bold text-lg'>Add new task</h3>
          <div className='modal-action'>
            <input value={newTaskValue} onChange={e => setNewTaskValue(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full" />
            <button type='submit' className='btn'>Submit</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
