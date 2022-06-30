import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Billing from './pages/Billing/Billing';
import Navbar from './pages/Home/Navbar';
import Login from './pages/Register/Login';
import Signup from './pages/Register/Signup';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='font-[poppin]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/billing' element={<Billing />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
