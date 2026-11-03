import React from 'react';

function MyOrders({ setPage }) {
  const orders = JSON.parse(localStorage.getItem("myOrders") || "[]");

  return (
    <div className="container mt-4">
      <h2>My Orders ({orders.length})</h2>
      {orders.length === 0 ? <p>No orders yet kaka!</p> : orders.map((o, idx) => (
        <div key={idx} className="border p-3 mb-3">
          <h5>{o.id} - {o.date}</h5>
          <p>Total: ${o.total.toFixed(2)}</p>
          {o.items.map((it,i)=><div key={i}>- {it.name||it.title} x {it.qty||1}</div>)}
        </div>
      ))}
      <button className="btn btn-dark mt-3" onClick={()=>setPage('home')}>Back to Shop</button>
    </div>
  );
}
export default MyOrders;