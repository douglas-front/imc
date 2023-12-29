import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Calc from './pages/Calc/index.tsx'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const route = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/calc",
    element: <Calc/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
