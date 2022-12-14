import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Id from './id'
import Index from './index'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
	{
		path: "/:id",
		element: <Id />,
	}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
	  <RouterProvider router={router} />
  </React.StrictMode>
)
