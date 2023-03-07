import React from 'react';
import ReactDom from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './styles/global.css';

import App from './app';
import ErrorPage from './components/error';
import Home from './components/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Post from './components/post';

const root = ReactDom.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/catagory/:filter',
        element: <Home isfilter />,
      },
      {
        path: '/about-me',
        element: <AboutMe />,
      },
      {
        path: '/post/:postId',
        element: <Post />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

root.render(<RouterProvider router={router} />);
