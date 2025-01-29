'use client';
import { ITask } from "@/types/tasks";
import Button from './AddTaskButton';
import EditTaskButton from "./EditTaskButton";
import DeleteTaskButton from "./DeleteTaskButton";

interface TodoListProps {
  tasks: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className='mt-24'>
      <Button />
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-left">
              <th className="w-[70%] p-2">Title</th>
              <th className="w-[20%] p-2">actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className="text-left">
                <td className="w-[70%] p-2">{task.title}</td>
                <td className="flex gap-5">
                  <EditTaskButton task={task} />
                  <DeleteTaskButton task={task} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TodoList;
