import { Header } from '../components/Header/Header';
import { AddTaskButton } from '../components/AddTaskButton/AddTaskButton';
import { Filters } from '../components/Filters/Filters';
import { TaskList } from '../components/TaskList/TaskList';
import { tasks } from './tasks-mock-data';

import './Home.css';

export const Home = () => {
  return (
    <>
      <Header />
      <main className="home-page-body">
        <section>
          <h1>Active tasks</h1>
          <TaskList tasks={tasks}/>
          <AddTaskButton />
        </section>
        <aside>
          <Filters />
        </aside>
      </main>
    </>
  );
};
