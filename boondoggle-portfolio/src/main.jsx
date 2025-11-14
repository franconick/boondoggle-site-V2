import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Thumbnails from './pages/Thumbnails.jsx'
import Banners from './pages/Banners.jsx'
import Other from './pages/Other.jsx'
import Info from './pages/Info.jsx'
import Contact from './pages/Contact.jsx'
import Layout from './components/Layout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'thumbnails',
        element: <Thumbnails />
      },
      {
        path: 'banners',
        element: <Banners />
      },
      {
        path: 'other',
        element: <Other />
      },
      {
        path: 'info',
        element: <Info />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
