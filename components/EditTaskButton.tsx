import { Pencil } from 'lucide-react';
import { editTodo } from '@/api';
import { ITask } from "@/types/tasks";
import Modal from './Modal';
import { FormEventHandler, useState } from 'react';
import { useRouter } from 'next/navigation';

interface TaskProps {
  task: ITask;
}

const EditTaskButton: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [taskEdit, setTaskEdit] = useState<string>(task.title);

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      title: taskEdit,
    });
    setTaskEdit('');
    setOpenModalEdit(false);
    router.refresh();
  }

  return (
    <div>
      <Pencil
      onClick={() => setOpenModalEdit(true)}
      size={18}
      className="cursor-pointer"
      />
      <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
        <form onSubmit={handleSubmitEditTodo}>
          <h3 className='font-bold text-lg'>Edit task</h3>
          <div className='modal-action'>
            <input value={taskEdit}
            onChange={e => setTaskEdit(e.target.value)}
            type="text"
            className="input input-bordered w-full" />
            <button type='submit' className='btn'>Submit</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}
export default EditTaskButton;
