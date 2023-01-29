import { Task } from '../../interfaces/task';
import { TaskCard } from '../TaskCard/TaskCard';
import './TaskList.css';

export const TaskList = ({ tasks } : {tasks : Task[]}) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <div className="task-list__item"
          key={task.id}>
          <TaskCard task={task}/>
        </div>
      ))}

    </div>
  );
};
