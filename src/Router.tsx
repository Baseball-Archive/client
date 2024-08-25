import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/common/ErrorPage';
import Loading from './components/common/Loading';
import Layout from './components/layout/Layout';
import ROUTES from './constants/router';

const Archives = lazy(() => import('./pages/Archive/Archives'));
const AddArchive = lazy(() => import('./pages/Archive/AddArchive'));
const Community = lazy(() => import('./pages/Community/Community'));
const CommunityDetail = lazy(() => import('./pages/Community/CommunityDetail'));
const League = lazy(() => import('./pages/League/League'));
const Schedule = lazy(() => import('./pages/League/Schedule'));
const Standings = lazy(() => import('./pages/League/Standings'));
const User = lazy(() => import('./pages/User/User'));
const Login = lazy(() => import('./pages/User/Login'));
const Signup = lazy(() => import('./pages/User/Signup'));
const ResetPW = lazy(() => import('./components/common/ResetPW'));
const ArchiveDetail = lazy(() => import('./pages/Archive/ArchiveDetail'));
const EditArchive = lazy(() => import('./pages/Archive/EditArchive'));
const AddPost = lazy(() => import('./pages/Community/AddPost'));
const EditPost = lazy(() => import('./pages/Community/EditPost'));
const PublicArchives = lazy(() => import('./pages/Archive/PublicArchives'));
const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Archives />
          </Suspense>
        ),
      },
      {
        path: ROUTES.ADD_ARCHIVE,
        element: (
          <Suspense fallback={<Loading />}>
            <AddArchive />
          </Suspense>
        ),
      },
      {
        path: ROUTES.EDIT_ARCHIVE,
        element: (
          <Suspense fallback={<Loading />}>
            <EditArchive />
          </Suspense>
        ),
      },
      {
        path: ROUTES.PUBLIC_ARCHIVES,
        element: (
          <Suspense fallback={<Loading />}>
            <PublicArchives />
          </Suspense>
        ),
      },
      {
        path: ROUTES.ARCHIVE_DETAIL,
        element: (
          <Suspense fallback={<Loading />}>
            <ArchiveDetail />
          </Suspense>
        ),
      },
      {
        path: ROUTES.POSTS,
        element: (
          <Suspense fallback={<Loading />}>
            <Community />
          </Suspense>
        ),
      },
      {
        path: ROUTES.POST_DETAIL,
        element: (
          <Suspense fallback={<Loading />}>
            <CommunityDetail />
          </Suspense>
        ),
      },
      {
        path: ROUTES.ADD_POST,
        element: <AddPost />,
      },
      {
        path: ROUTES.EDIT_POST,
        element: <EditPost />,
      },
      {
        path: ROUTES.LEAGUE,
        element: (
          <Suspense fallback={<Loading />}>
            <League />
          </Suspense>
        ),
        children: [
          {
            path: ROUTES.SCHEDULE,
            element: (
              <Suspense fallback={<Loading />}>
                <Schedule />
              </Suspense>
            ),
          },
          {
            path: ROUTES.STANDINGS,
            element: (
              <Suspense fallback={<Loading />}>
                <Standings />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: ROUTES.LOGIN,
        element: (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: ROUTES.JOIN,
        element: (
          <Suspense fallback={<Loading />}>
            <Signup />
          </Suspense>
        ),
      },
      {
        path: ROUTES.USER,
        element: (
          <Suspense fallback={<Loading />}>
            <User />
          </Suspense>
        ),
      },
      {
        path: ROUTES.RESET,
        element: (
          <Suspense fallback={<Loading />}>
            <ResetPW />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
