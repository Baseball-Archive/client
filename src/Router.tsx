import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Archive/Home";
import Layout from "./components/layout/Layout";
import AddArchive from "./pages/Archive/AddArchive";
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
        path: "add",
        element: <AddArchive />, // 변경된 경로에 대한 컴포넌트
      },
    ],
  },
]);

export default router;
