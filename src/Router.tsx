import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Archive/Home";
import Layout from "./components/layout/Layout";
import Community from "./pages/Community/Community";
import CommunityDetail from "./pages/Community/CommunityDetail";

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
        path: "/posts",
        element: <Community />,
      },
      {
        path: "/posts/:id",
        element: <CommunityDetail />,
      }
    ],
  }
]);

export default router;
