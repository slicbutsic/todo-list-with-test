import { addTodo, getAllTodos } from '@/api';
import { ITask } from '@/types/tasks';

describe('getAllTodos', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ id: '1', title: 'Test Todo', userId: 'testUser' }]),
      })
    ) as jest.Mock;
  });

  it('should fetch all todos', async () => {
    const todos = await getAllTodos('testUser');
    expect(fetch).toHaveBeenCalledWith('http://localhost:3001/tasks?userId=testUser', { cache: 'no-store' });
    expect(todos).toEqual([{ id: '1', title: 'Test Todo', userId: 'testUser' }]);
  });
});

describe('addTodo', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ id: '1', title: 'Test Todo', userId: 'testUser' }),
      })
    ) as jest.Mock;
  });

  it('should create a new todo', async () => {
    const newTodo: ITask = {
      id: '1',
      title: 'Test Todo',
      userId: 'testUser'
    };
    const createdTodo = await addTodo(newTodo);
    expect(fetch).toHaveBeenCalledWith('http://localhost:3001/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    });
    expect(createdTodo).toEqual(newTodo);
  });

  it('should throw an error when todo title is blank', async () => {
    const newTodo: ITask = {
      id: '1',
      title: '',
      userId: 'testUser'
    };
    await expect(addTodo(newTodo)).rejects.toThrow('Todo title cannot be blank');
  });
});

