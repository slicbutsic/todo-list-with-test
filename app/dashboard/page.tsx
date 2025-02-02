import { Suspense } from 'react';
import TodoList from '@/components/TodoList';
import Loading from './loading';

export default function Dashboard() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <TodoList />
      </Suspense>
    </div>
  );
}
