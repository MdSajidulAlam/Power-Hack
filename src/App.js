import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Billing from './pages/Billing/Billing';
import Navbar from './pages/Home/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/billing' element={<Billing />}></Route>
      </Routes>
    </div>
  );
}

export default App;
