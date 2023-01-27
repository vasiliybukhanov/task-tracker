import { Task } from '../interfaces/task';

export const tasks: Task[] = [
  {
    id: 1,
    name: 'Todo #1',
    isDone: false,
    startDate: new Date(),
    endDate: new Date(),
    description: 'Description for Todo #1',
  },
  {
    id: 2,
    name: 'Todo #2',
    isDone: true,
    startDate: new Date(),
    endDate: new Date(),
    description: 'Description for Todo #2',
  },
  {
    id: 3,
    name: 'Todo #3',
    isDone: false,
    startDate: new Date(),
    endDate: new Date(),
    description: 'Description for Todo #3',
  },
  {
    id: 4,
    name: 'Todo #4',
    isDone: true,
    startDate: new Date(),
    endDate: new Date(),
    description: 'Description for Todo #4',
  }
];
