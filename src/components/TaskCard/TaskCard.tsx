import { Task } from '../../interfaces/task';
import { formatDate } from '../../utils/format-date';
import { Link } from 'react-router-dom';
import { TaskStatusToggle } from '../TaskStatusToggle/TaskStatusToggle';
import './TaskCard.css';

export const TaskCard = ({ task } : {task : Task}) => {
  return (
    <div className="task-card">
      <div className="task-card__info">
        <Link to={`task-info/${task.id}`} >
          <h2>{task.name}</h2>
          <h3>Start date: {formatDate(task.startDate)}</h3>
          <h3>End date: {formatDate(task.startDate)}</h3>
        </Link>
      </div>
      <div className="task-card__status-toggle-area">
        <TaskStatusToggle />
        {/* <input type="checkbox"></input> */}
      </div>
    </div>
  );
};
