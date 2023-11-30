import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../../layouts/RootLayout";
import Main from "../../pages/Main/Main";
import ControlledForm from "../../pages/ControlledForm/ControlledForm";
import UncontrolledForm from "../../pages/UncontrolledForm/UncontrolledForm";
import ErrorPage from "../../pages/ErrorPage";

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
        element: <ControlledForm />,
      },
      {
        path: "form-uncontrolled",
        element: <UncontrolledForm />,
      },
    ],
  },
]);

export default router;
