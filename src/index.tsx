import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/router/router";
import SiteSetting from "./components/siteSetting/SiteSetting";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SiteSetting>
      <RouterProvider router={router} />
    </SiteSetting>
  </React.StrictMode>
);
reportWebVitals();
