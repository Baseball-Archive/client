import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import User from './pages/User/User';
import Signup from './pages/User/Signup';
import Login from './pages/User/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/users/join',
    element: <Signup />,
  },
  {
    path: '/users/login',
    element: <Login />,
  },
  {
    path: '/users/edit',
    element: <User />,
  },
  {
    path: '/users/resetpw',
    element: <User />,
  },
]);

export default router;
