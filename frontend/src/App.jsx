import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import Placeorder from './Pages/Placeorder/Placeorder';
import Footer from './components/Footer/Footer';
import Showpopup from './components/Showpopup/Showpopup';

function App() {
  const [count, setCount] = useState(0);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <Showpopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Placeorder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
