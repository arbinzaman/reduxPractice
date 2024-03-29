import React from "react";
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom";
import router from "./routes/index";
import { Provider } from "react-redux";
import store from "./redux/Store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
