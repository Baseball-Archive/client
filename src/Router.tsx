import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Archive/Home";
import Layout from "./components/layout/Layout";
import Community from "./pages/Community/Community";
import League from "./pages/League/League";
import Schedule from "./pages/League/Schedule";
import Standings from "./pages/League/Standings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "test",
        element: <Home />,
      },
      {
        path: "posts",
        element: <Community />,
      },
      {
        path: "league",
        element: <League />,
        children: [
          {
            path: "schedule",
            element: <Schedule />,
          },
          {
            path: "standings",
            element: <Standings />,
          },
        ],
      },
    ],
  },
]);

export default router;
