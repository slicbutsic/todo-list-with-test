import { getAllTodos } from '@/api';
import TodoList from '../../components/TodoList';


export default async function Dashboard() {
  const tasks = await getAllTodos();
  console.log(tasks);

  return (
    <div>
      <div>Dashboard Page</div>
      <TodoList tasks={tasks} />
    </div>

  )
}
