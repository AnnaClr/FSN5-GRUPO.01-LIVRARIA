import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetails from './Pages/ProductDetails/ProductDetail.jsx';
import Cart from './pages/Cart/Cart.jsx';
import Contact from './pages/Contact';
import About from './pages/About/About.jsx';
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
