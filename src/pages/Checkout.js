import React from 'react';

function Checkout({ cart, setCart, setPage }) {
  const total = cart.reduce((s, i) => s + Number(i.price) * (i.qty || 1), 0);

  const placeOrder = (e) => {
    e.preventDefault();
    setPage('success'); // Idu mukhya kaka! Success ge hogutte
  };

  return (
    <div className="container mt-4">
      <h2>Checkout</h2>
      <div className="row">
        <div className="col-md-6">
          <h5>Delivery Details</h5>
          <form onSubmit={placeOrder}>
            <input className="form-control mb-2" placeholder="Full Name" required />
            <input className="form-control mb-2" placeholder="Address" required />
            <input className="form-control mb-2" placeholder="Phone" required />
            <select className="form-control mb-3">
              <option>Cash on Delivery</option>
              <option>UPI Payment</option>
            </select>
            <button className="btn btn-success w-100" type="submit">Place Order - ${total.toFixed(2)}</button>
          </form>
        </div>
        <div className="col-md-6">
          <h5>Order Summary ({cart.length})</h5>
          {cart.map((item, i) => (
            <div key={i} className="d-flex justify-content-between border p-2 mb-1">
              <span>{item.name || item.title} x {item.qty||1}</span>
              <span>${item.price}</span>
            </div>
          ))}
          <h4 className="mt-3">Total: ${total.toFixed(2)}</h4>
        </div>
      </div>
    </div>
  );
}
export default Checkout;