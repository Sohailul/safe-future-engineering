import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Products from './Pages/Products/Products';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <>
      <div className="App max-w-7xl mx-auto">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='services' element={<Services />}></Route>
          <Route path='products' element={<Products />}></Route>
          <Route path='contact' element={<Contact />}></Route>
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
