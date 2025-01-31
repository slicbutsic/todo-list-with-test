'use client';
import { ITask } from "@/types/tasks";
import Button from './AddTaskButton';
import EditTaskButton from "./EditTaskButton";
import DeleteTaskButton from "./DeleteTaskButton";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { getAllTodos } from "@/api";

interface TodoListProps {
  tasks: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  const { user } = useUser();
  const userId = user?.id;

  const [fetchedTasks, setFetchedTasks] = useState<ITask[]>(tasks);

  useEffect(() => {
    if (!userId) return;

    const fetchTasks = async () => {
      const userTasks = await getAllTodos(userId);
      setFetchedTasks(userTasks);
    };

    fetchTasks();
  }, [userId]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex flex-col justify-center items-center text-white p-8">
      <div className="bg-white text-gray-800 shadow-2xl rounded-3xl p-10 w-full max-w-4xl">
        <Button />
        <div className="overflow-x-auto mt-6">
          {fetchedTasks.length === 0 ? (
            <div className="text-center p-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">No tasks found!</h2>
              <p className="text-gray-600">It seems like you haven&apos;t added any tasks yet. Click the button above to add a new task.</p>
            </div>
          ) : (
            <table className="table w-full text-sm">
              <thead>
                <tr className="text-left border-b-2 border-gray-200">
                  <th className="w-[70%] p-2 font-semibold text-gray-800">Title</th>
                  <th className="w-[20%] p-2 font-semibold text-gray-800">Actions</th>
                </tr>
              </thead>
              <tbody>
                {fetchedTasks.map((task) => (
                  <tr key={task.id} className="text-left border-b border-gray-100">
                    <td className="w-[70%] p-2">{task.title}</td>
                    <td className="flex gap-5 p-2">
                      <EditTaskButton task={task} />
                      <DeleteTaskButton task={task} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
