import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

const appRouter=createBrowserRouter(
  createRoutesFromElements(
<>
    <Route path="/"  element={<Home/>} /> 
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    </>
  )
)

function App() {
  
  
  return (
  <>
  {/* <Navbar/> */}
  <RouterProvider router={appRouter}/>
  </>
      
  )
}

export default App
