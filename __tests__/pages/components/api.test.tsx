import { addTodo, getAllTodos, editTodo, deleteTodo } from '@/api';
import { ITask } from '@/types/tasks';

// Checking getAllTodos function
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

// Checking AddTodo function
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

// Checking EditTodo function
describe('editTodo', () => {
  it('should edit a todo', async () => {
    const todo: ITask = {
      id: '1',
      title: 'Test Todo',
      userId: 'testUser'
    };
    const updatedTodo = await editTodo(todo);
    expect(fetch).toHaveBeenCalledWith('http://localhost:3001/tasks/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    });
    expect(updatedTodo).toEqual(todo);
  });

  it('should throw an error when todo title is blank', async () => {
    const blankTodo: ITask = {
      id: '1',
      title: '',
      userId: 'testUser'
    };
    await expect(editTodo(blankTodo)).rejects.toThrow('Todo title cannot be blank');
  });
});

// Checking DeleteTodo function

describe('deleteTodo', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve()
    ) as jest.Mock;
  });

  it('should delete a todo', async () => {
    await deleteTodo('1');
    expect(fetch).toHaveBeenCalledWith('http://localhost:3001/tasks/1', {
      method: 'DELETE'
    });
  });
})
