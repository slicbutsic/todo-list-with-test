// 'use client';
// import { ITask } from "@/types/tasks";
// import Button from './AddTaskButton';
// import EditTaskButton from "./EditTaskButton";
// import DeleteTaskButton from "./DeleteTaskButton";

// import { useUser } from "@clerk/nextjs";
// import { useEffect, useState } from "react";
// import { getAllTodos } from "@/api";

// interface TodoListProps {
//   tasks: ITask[];
// }

// const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
//   const { user } = useUser();
//   const userId = user?.id;

//   useEffect(() => {
//     if (!userId) return;

//     const fetchTasks = async () => {
//       const userTasks = await getAllTodos(userId);
//       setTasks(userTasks);
//     };

//     fetchTasks();
//   }, [userId]);

//   return (
//     <div className='mt-24'>
//       <Button />
//       <div className="overflow-x-auto">
//         <table className="table w-full">
//           <thead>
//             <tr className="text-left">
//               <th className="w-[70%] p-2">Title</th>
//               <th className="w-[20%] p-2">actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tasks.map((task) => (
//               <tr key={task.id} className="text-left">
//                 <td className="w-[70%] p-2">{task.title}</td>
//                 <td className="flex gap-5">
//                   <EditTaskButton task={task} />
//                   <DeleteTaskButton task={task} />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default TodoList;


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

  const [fetchedTasks, setFetchedTasks] = useState<ITask[]>(tasks); // Initialize the state for tasks

  useEffect(() => {
    if (!userId) return;

    const fetchTasks = async () => {
      const userTasks = await getAllTodos(userId); // Fetch tasks using the userId
      setFetchedTasks(userTasks); // Update state with fetched tasks
    };

    fetchTasks();
  }, [userId]);

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
            {fetchedTasks.map((task) => (
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
