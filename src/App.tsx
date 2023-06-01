import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Singup from './pages/singup/Singup';
import Users from './pages/users/Users';
import Navbar from './components/Navbar';
import { Center } from '@chakra-ui/react'

function App() {

  return (
    <>
        <Navbar/>
        <Center w='100%'>
          <Routes>
            <Route index path="/" element={<Home />}></Route>
            <Route path="/signup" element={<Singup />}></Route>
            <Route path="/users" element={<Users />}></Route>
          </Routes>
        </Center>
    </>
  )
}

export default App
