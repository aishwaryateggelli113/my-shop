

import React from 'react';

function Cart({ cart, removeFromCart, clearCart, setPage, updateQty }) {
  const total = cart.reduce((s, i) => s + Number(i.price) * (i.qty || 1), 0);

  return (
    <div className="container mt-4">
      <h2>Your Cart ({cart.length})</h2>
      {cart.length === 0 ? <p>Cart empty kaka!</p> : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="d-flex justify-content-between border p-2 mb-2 align-items-center">
              <span><b>{item.name || item.title}</b> - ${item.price} x {item.qty || 1}</span>
              <div>
                <button className="btn btn-sm btn-secondary me-1" onClick={()=>updateQty(index, -1)}>-</button>
                <button className="btn btn-sm btn-secondary me-2" onClick={()=>updateQty(index, 1)}>+</button>
                <button className="btn btn-danger btn-sm" onClick={()=>removeFromCart(index)}>Remove</button>
              </div>
            </div>
          ))}
          <h4 className="mt-3">Total: ${total.toFixed(2)}</h4>
          <button className="btn btn-warning mt-2" onClick={clearCart}>Clear Cart</button>
          <button className="btn btn-success mt-2 ms-2" onClick={()=>setPage('checkout')}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
}
export default Cart;