import { getAllTodos } from '@/api';
import TodoList from '../../components/TodoList';


export default async function Dashboard() {
  const tasks = await getAllTodos();
  console.log(tasks);

  return (
    <div>
      <TodoList tasks={tasks} />
    </div>

  )
}
