import { ITask } from "@/types/tasks";
// import Task from "./Task";
import Button from './Button';

interface TodoListProps {
  tasks: ITask[];
}

export default function TodoList({ tasks }) {
  return (
    <div className='mt-24'>
      <Button />
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-left">
              <th className="w-[10%] p-2">ID</th>
              <th className="w-[70%] p-2">Title</th>
              <th className="w-[20%] p-2">Completed</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className="text-left">
                <td className="w-[10%] p-2">{task.id}</td>
                <td className="w-[70%] p-2">{task.title}</td>
                <td className="w-[20%] p-2">{task.completed ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
