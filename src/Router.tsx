import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Posts from './pages/Community/Posts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/posts',
    element: <Posts />,
  }
]);

export default router;
