import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { routes } from './routes'
import axios from "axios"

const App = () => {

  const router = createBrowserRouter(routes)
  axios.defaults.baseURL = import.meta.env.VITE_API_URL ;


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
