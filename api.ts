import { ITask } from './types/tasks';
const baseUrl = 'http://localhost:3001';

export const getAllTodos = async (userId: string): Promise<ITask[]> => {
  const res = await fetch(`${baseUrl}/tasks?userId=${userId}`, { cache: 'no-store'});
  const todos = await res.json();
  return todos;
}

export const addTodo = async (todo: ITask): Promise<ITask> => {
  if (!todo.title.trim()) {
    throw new Error('Todo title cannot be blank');
  }
  const res = await fetch(`${baseUrl}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  });

  const newTodo = await res.json();
  return newTodo;
}

export const editTodo = async (todo: ITask): Promise<ITask> => {
  if (!todo.title.trim()) {
    throw new Error('Todo title cannot be blank');
  }
  const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
  const updatedTodo = await res.json();
  return updatedTodo;
}

export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`${baseUrl}/tasks/${id}`, {
    method: 'DELETE',
  })
}
