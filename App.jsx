import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './furni/components/Layout';
import Home from './furni/components/Home';
import Products from './furni/Products/Products';
import Navbar from './furni/components/Navbar';
import Cart from './furni/Context/Cart';
import PropTypes from 'prop-types';
import Login from './furni/components/login/login';
import Signup from './furni/components/login/Signup';

function ErrorBoundary({ error }) {
  if (!error) {
    return null;
  }

  return (
    <div>
      <h1>Unexpected Application Error!</h1>
      <p>{error.message}</p>
    </div>
  );
}

ErrorBoundary.propTypes = {
  error: PropTypes.object
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'Signup',
        element: <Signup />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;