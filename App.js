import { Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/footer/Footer';
import men_banner from './components/assets/banner_mens.png';
import women_banner from './components/assets/banner_women.png';
import kid_banner from './components/assets/banner_kids.png';

function App() {
  return (
    <div className='App'>

        <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/>} />
            <Route path="/women" element={<ShopCategory banner={women_banner} category="women"/>} />
            <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid"/>} />
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />}/>
            </Route>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/login' element={<LoginSignup />}/>
          </Routes>
          <Footer />
      
    </div>
  );
}

export default App;
