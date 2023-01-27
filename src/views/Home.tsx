import { AddTaskButton } from '../components/AddTaskButton/AddTaskButton';
import { TaskList } from '../components/TaskList/TaskList';
import { tasks } from './tasks-mock-data';

export const Home = () => {
  return (
    <div>
      <h1>Active tasks</h1>
      <TaskList tasks={tasks}/>
      <AddTaskButton />
    </div>
  );
};
