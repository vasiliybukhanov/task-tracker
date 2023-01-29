import { Task } from '../../interfaces/task';
import { formatDate } from '../../utils/format-date';
import './TaskCard.css';

export const TaskCard = ({ task } : {task : Task}) => {
  return (
    <div className="task-card">
      <div className="task-card__info">
        <h2>{task.name}</h2>
        <h3>Start date: {formatDate(task.startDate)}</h3>
        <h3>End date: {formatDate(task.startDate)}</h3>
      </div>
      <div className="task-card__completion-toggle-area">
        <input type="checkbox"></input>
      </div>
    </div>
  );
};
