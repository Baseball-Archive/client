import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AddArchive from "./pages/Archive/AddArchive";
import Community from "./pages/Community/Community";
import CommunityDetail from "./pages/Community/CommunityDetail";
import League from "./pages/League/League";
import Schedule from "./pages/League/Schedule";
import Standings from "./pages/League/Standings";
import Archives from "./pages/Archive/Archives";

export const ROUTES = {
  HOME: "/",
  ADD_ARCHIVE: "/addarchive",
  POSTS: "/posts",
  POST_DETAIL: "/posts/:id",
  LEAGUE: "/league",
  SCHEDULE: "schedule",
  STANDINGS: "standings",
};

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Archives />,
      },
      {
        path: ROUTES.ADD_ARCHIVE,
        element: <AddArchive />,
      },
      {
        path: ROUTES.POSTS,
        element: <Community />,
      },
      {
        path: ROUTES.POST_DETAIL,
        element: <CommunityDetail />,
      },
      {
        path: ROUTES.LEAGUE,
        element: <League />,
        children: [
          {
            path: ROUTES.SCHEDULE,
            element: <Schedule />,
          },
          {
            path: ROUTES.STANDINGS,
            element: <Standings />,
          },
        ],
      },
    ],
  },
]);

export default router;
