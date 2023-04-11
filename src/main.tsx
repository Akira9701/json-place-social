import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.scss';
import Root from './routes/root';
import EveryOnePosts from './pages/EveryOnePosts';

const routerPaths = {
    allPost: {
        link: 'all-posts',
        name: 'Posts',
    },
    Friends: {
        link: '',
        name: 'Friends',
    },
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root routerPaths={routerPaths} />,
        // errorElement: <ErrorPage />,
        // loader: rootLoader,
        children: [
            {
                path: `/${routerPaths.allPost.link}`,
                element: <EveryOnePosts />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
