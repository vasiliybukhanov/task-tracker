import { Link, useParams } from 'react-router-dom';
import { TaskStatusToggle } from '../components/TaskStatusToggle/TaskStatusToggle';
import { formatDate } from '../utils/format-date';
import './TaskDetailedInfo.css';
import { tasks } from './tasks-mock-data';

export const TaskDetailedInfo = () => {
  const { taskId } = useParams();

  /*
    TODO connect component to store when it's ready
        and use getTaskById() function
   */
  const task = tasks.find(task => task.id === Number(taskId));

  /*
    TODO add redirect to 404 error page
   */
  if (!task) {
    return (
      <>
        <h1> Oops! </h1>
        <h2>Something went wrong</h2>
      </>);
  }

  return (
    <main className="task-info-page-body">
      <Link to="/"
        className="nav-link">← Back</Link>
      <div className="task-info-wrapper">

        <div className="task-header">
          <h1 className="task-title">
            {task.name}
          </h1>
          <TaskStatusToggle />
        </div>

        <div className="task-dates-section">
          <div>
            <h2 className="task-date__label">Start date:</h2>
            <h2 className="task-date__label">End date:</h2>
          </div>

          <div>
            <h2>{formatDate(task.startDate)}</h2>
            <h2>{formatDate(task.endDate)}</h2>
          </div>
        </div>

        <div className="task-description">
          <h2>Description</h2>
          <p>{task.description}</p>
        </div>
      </div>
    </main>
  );
};
