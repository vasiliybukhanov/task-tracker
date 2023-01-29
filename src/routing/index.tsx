import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../views/Home';
import { TaskDetailedInfo } from '../views/TaskDetailedInfo';

export const router = createBrowserRouter([{
  path: '/',
  element: <Home />,
},
{
  path: 'task-info/:taskId',
  element: <TaskDetailedInfo />
}
]);
