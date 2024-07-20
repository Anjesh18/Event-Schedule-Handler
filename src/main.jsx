import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EventList from './pages/EventList.jsx'
import FilterEvent from './pages/FilterEvent.jsx'
import EventDetails from './pages/EventDetails.jsx'
const router=createBrowserRouter([{
  path:'/',
  element: <EventList/>
},
{
  path: '/find-events',
  element: <FilterEvent/>
},
{
  path: "/events/:id",
  element: <EventDetails/>
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>
  
)
