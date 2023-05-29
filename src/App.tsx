import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Singup from './pages/singup/Singup';
import Users from './pages/users/Users';

function App() {

  return (
    <>
      HEADER
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Singup />}></Route>
        <Route path="/users" element={<Users />}></Route>
      </Routes>
    </>
  )
}

export default App
