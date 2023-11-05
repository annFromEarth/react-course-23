import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Spinner from './components/Spinner/Spinner';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home/Home';

import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    loader: Spinner,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: Spinner,
      },
    ],
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
