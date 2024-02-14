import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider} from "react-router-dom";
import PageMain from "./pages/pageMain/pageMain";
import { Provider } from "react-redux";
import { store } from "./app/store";
import PageContainer from "./widgets/pageContainer/pageContainer";
import PagePost from "./pages/pagePost/pagePost";

const router = createHashRouter(
  [
    {
      element: <PageContainer />,
      children: [
        {
          path: "/picasso-test-task",
          element: <PageMain />,
        },
        {
          path: "/picasso-test-task/post/:postId",
          element: <PagePost />,
        },
      ],
    },
  ],
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
