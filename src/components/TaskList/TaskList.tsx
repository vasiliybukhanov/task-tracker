import { Task } from '../../interfaces/task';
import { TaskCard } from '../TaskCard/TaskCard';
import './TaskList.css';

export const TaskList = ({ tasks } : {tasks : Task[]}) => {
  return (
    <div className="task-list">
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <TaskCard task={task}/>
          </li>
        ))}
      </ul>
    </div>
  );
};
