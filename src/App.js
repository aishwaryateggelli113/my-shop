import React, { useState } from 'react';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import MyOrders from './pages/MyOrders';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('home');

  const addToCart = (product) => {
    const exist = cart.find(c => c.id === product.id);
    if (exist) {
      setCart(cart.map(c => c.id === product.id ? {...c, qty: (c.qty||1)+1} : c));
    } else {
      setCart([...cart, {...product, qty: 1}]);
    }
  };

  const removeFromCart = (i) => setCart(cart.filter((_, index) => index !== i));
  const clearCart = () => setCart([]);
  const updateQty = (i, d) => {
    const newCart = [...cart];
    newCart[i].qty = Math.max(1, (newCart[i].qty||1) + d);
    setCart(newCart);
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark px-3 d-flex justify-content-between">
        <span className="navbar-brand" style={{cursor:'pointer'}} onClick={()=>setPage('home')}>My Shop</span>
        <div>
          <button className="btn btn-dark me-2" onClick={()=>setPage('orders')}>My Orders</button>
          <button className="btn btn-dark" onClick={()=>setPage('cart')}>Cart ({cart.length})</button>
        </div>
      </nav>
      {page === 'home' && <Home addToCart={addToCart} />}
      {page === 'cart' && <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} setPage={setPage} updateQty={updateQty} />}
      {page === 'checkout' && <Checkout cart={cart} setCart={setCart} setPage={setPage} />}
      {page === 'success' && <OrderSuccess cart={cart} setCart={setCart} setPage={setPage} />}
      {page === 'orders' && <MyOrders setPage={setPage} />}
    </div>
  );
}
export default App;