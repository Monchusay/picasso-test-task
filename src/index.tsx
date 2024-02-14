import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageMain from "./pages/pageMain/pageMain";
import { Provider } from "react-redux";
import { store } from "./app/store";
import PageContainer from "./widgets/pageContainer/pageContainer";
import PagePost from "./pages/pagePost/pagePost";

const router = createBrowserRouter(
  [
    {
      element: <PageContainer />,
      children: [
        {
          path: "/",
          element: <PageMain />,
        },
        {
          path: "/post/:postId",
          element: <PagePost />,
        },
      ],
    },
  ],
  {
    basename: "https://monchusay.github.io/picasso-test-task",
  },
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
