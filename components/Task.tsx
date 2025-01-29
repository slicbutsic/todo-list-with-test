import { ITask } from '@/types/tasks';

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <tr key={task.id}>
      <td>{task.id}</td>
      <td>{task.title}</td>
      <td>{task.completed ? "Yes" : "No"}</td>
    </tr>
  )
}
export default Task
