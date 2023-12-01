import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../../layouts/RootLayout";
import Main from "../../pages/Main/Main";
import ErrorPage from "../../pages/ErrorPage";
import ControlledFormPage from "../../pages/ControlledForm/ControlledFormPage";
import UncontrolledFormPage from "../../pages/UncontrolledForm/UncontrolledFormPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "form-controlled",
        element: <ControlledFormPage />,
      },
      {
        path: "form-uncontrolled",
        element: <UncontrolledFormPage />,
      },
    ],
  },
]);

export default router;
