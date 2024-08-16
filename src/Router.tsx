import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Archive/Home";
import Layout from "./components/layout/Layout";
import AddArchive from "./pages/Archive/AddArchive";
import Community from "./pages/Community/Community";

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
        path: "posts",
        element: <Community />,
      },
    ],
  },
]);

export default router;
