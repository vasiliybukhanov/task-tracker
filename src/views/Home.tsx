import { AddTaskButton } from '../components/AddTaskButton/AddTaskButton';
import { Filters } from '../components/Filters/Filters';
import { TaskList } from '../components/TaskList/TaskList';
import { tasks } from './tasks-mock-data';

export const Home = () => {
  return (
    <main>
      <section>
        <h1>Active tasks</h1>
        <TaskList tasks={tasks}/>
        <AddTaskButton />
      </section>
      <aside>
        <Filters />
      </aside>
    </main>
  );
};
