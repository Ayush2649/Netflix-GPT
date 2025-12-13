import React from 'react'
import SignUp from './SignUp';
import Browse from './Browse';
import SignIn from './SignIn';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <SignUp />,
        },
        {
            path: "/browse",
            element: <Browse />,
        },
        {
            path: "/signin",
            element: <SignIn />,
        },
    ]);

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body;