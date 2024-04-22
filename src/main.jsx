import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.jsx'
import Blog from './pages/Blog/Blog.jsx'
import Faq from './pages/Faq/Faq.jsx'
import { DataProvider } from './Context/DataContext.jsx';
import Creators from './pages/Creators/Creators.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/creators",
        element: <Creators />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/faq",
        element: <Faq />
      },
    ]
  }

])

ReactDOM.createRoot(

  document.getElementById('root')).render(
    <React.StrictMode>
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider >
    </React.StrictMode>

  )