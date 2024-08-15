import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Archive/Home';
import Layout from './components/layout/Layout';
import Community from './pages/Community/Community';
import User from './pages/User/User';
import Login from './pages/User/Login';
import Signup from './pages/User/Signup';
import ResetPW from './components/common/ResetPW';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'test',
        element: <Home />,
      },
      {
        path: 'posts',
        element: <Community />,
      },
      {
        path: 'users/login',
        element: <Login />,
      },
      {
        path: 'users/signup',
        element: <Signup />,
      },
      {
        path: 'users/user',
        element: <User />,
      },
      {
        path: 'users/reset',
        element: <ResetPW />,
      },
    ],
  },
]);

export default router;
