import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../../layouts/RootLayout';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import Home from '../../pages/Home/Home';
import PlanetDetails from '../../components/PlanetDetails/PlanetDetails';
import planetDetailsLoader from '../../components/PlanetDetails/planetDetailsLoader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'search/:pageNumber',
        element: <Home />,
        children: [
          {
            path: ':planetName',
            element: <PlanetDetails />,
            loader: planetDetailsLoader,
          },
        ],
      },
    ],
  },
]);

export default router;
