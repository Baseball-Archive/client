import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Archive/Home';
import Layout from './components/layout/Layout';
import AddArchive from './pages/Archive/AddArchive';
import Community from './pages/Community/Community';
import CommunityDetail from './pages/Community/CommunityDetail';
import League from './pages/League/League';
import Schedule from './pages/League/Schedule';
import Standings from './pages/League/Standings';
import User from './pages/User/User';
import Login from './pages/User/Login';
import Signup from './pages/User/Signup';
import ResetPW from './components/common/ResetPW';
// import KakaoCallback from './components/kakao/kakaoCallback';

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
        path: '/archive',
        element: <AddArchive />,
      },
      {
        path: '/posts',
        element: <Community />,
      },
      {
        path: '/posts/:id',
        element: <CommunityDetail />,
      },
      {
        path: 'users/login',
        element: <Login />,
      },
      {
        path: 'users/join',
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
      {
        path: 'league',
        element: <League />,
        children: [
          {
            path: 'schedule',
            element: <Schedule />,
          },
          {
            path: 'standings',
            element: <Standings />,
          },
        ],
      },
    ],
  },
]);

export default router;
