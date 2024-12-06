import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Jobs from './pages/Jobs'
import Browse from './pages/Browse'
import Profile from './pages/Profile'

const appRouter=createBrowserRouter(
  createRoutesFromElements(
<>
<Route>

    <Route path="/login" element={<Login/>} />
    <Route path="/"  element={<Home/>} /> 
    <Route path="/signup" element={<Signup/>} />
  <Route path="/browse" element={<Browse/>} />
    <Route path="/jobs" element={<Jobs/>}   />
    <Route path="/profile" element={<Profile/>} />
</Route>
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
