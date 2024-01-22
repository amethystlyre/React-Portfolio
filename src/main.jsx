import React from "react";
import ReactDOM from "react-dom/client";
//import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

// import Contact from "./components/pages/Contact";
// import About from "./components/pages/About";
// import Portfolio from "./components/pages/Portfolio";
// import Resume from "./components/pages/Resume";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         element: <About />,
//         path: "/About",
//       },
//       {
//         path: "/Portfolio",
//         element: <Portfolio />,
//       },
//       {
//         path: "/Contact",
//         element: <Contact />,
//       },
//       {
//         path: "/Resume",
//         element: <Resume />,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
