import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import DoctorsgPage from './pages/DoctorsPage.jsx'
import AppoinmentPage from './pages/AppoinmentPage.jsx'

const router = createBrowserRouter([


  
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<HomePage/>
      },
      {
        path:'/about',
        element:<AboutPage/>
      },
      {
        path:'/Doctors',
        element:<DoctorsgPage/>
      },
      {
        path:'/contact',
        element:<ContactPage/>
      },
      {
        path:'/Appoinment',
        element:<AppoinmentPage/>
      },

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
