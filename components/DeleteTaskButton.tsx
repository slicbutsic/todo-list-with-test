import { Trash2 } from 'lucide-react';
import { deleteTodo } from '@/api'
import { useState } from 'react';
import Modal from './Modal';
import { useRouter } from 'next/navigation';

interface Task {
  id: string;
  title: string; 
}

const DeleteTaskButton = ({ task }: { task: Task }) => {
  const router = useRouter();
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id)
    setOpenModalDelete(false);
    router.refresh();
  }

  return (
    <div>
      <Trash2
      size={18}
      className="cursor-pointer"
      onClick={() => setOpenModalDelete(true)}
      />
      <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
        <h3 className='text-lg'>Are you sure you want to delete this task?</h3>
        <div className="modal-action">
          <button
          onClick={() => handleDeleteTask(task.id)}
          className='bg-red-500 text-white px-4 py-2 rounded-md mr-2'>
            Yes
          </button>
        </div>
      </Modal>
    </div>
  )
}
export default DeleteTaskButton
