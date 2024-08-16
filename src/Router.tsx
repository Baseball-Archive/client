import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Archive/Home";
import Layout from "./components/layout/Layout";
import AddArchive from "./pages/Archive/AddArchive";
import Community from "./pages/Community/Community";
import CommunityDetail from "./pages/Community/CommunityDetail";
import AddPost from "./pages/Community/AddPost";

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
        path: "/archive",
        element: <AddArchive />,
      },
      {
        path: "/posts",
        element: <Community />,
      },
      {
        path: "/posts/:id",
        element: <CommunityDetail />,
      },
      {
        path: "/post",
        element: <AddPost />,
      },
    ],
  },
]);

export default router;
