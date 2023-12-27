import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import NotFound from "./routes/NotFound";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Characters from "./routes/Characters";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "characters",
        element: <Characters />,
      },
      {
        path: "/:id",
        element: <Detail />,
      },
    ],
  },
]);

export default router;
