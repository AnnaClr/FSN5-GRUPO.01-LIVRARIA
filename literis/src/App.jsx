import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register';
import ProductDetails from './Pages/ProductDetails/ProductDetail.jsx';
import Cart from './Pages/Cart/Cart.jsx';
import Contact from './Pages/Contact';
import About from './Pages/About/About.jsx';
import Header from './components/Header/Header';
import Footer from './Components/Footer/Footer';
import Bookstore from './Pages/Bookstore/Bookstore.jsx';
import SuggestBook from './Pages/SuggestBook/SuggestBook.jsx';
import AdminPanel from './Pages/AdminPanel/AdminPanel.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/bookstore" element={<Bookstore />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/suggest-book" element={<SuggestBook />} />
        <Route path="/admin" element={<AdminPanel />} /> {/* Rota do painel administrativo */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
