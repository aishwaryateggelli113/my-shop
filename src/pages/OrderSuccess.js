import React from 'react';

function OrderSuccess({ cart, setCart, setPage, setOrders }) {
  const total = cart.reduce((s, i) => s + Number(i.price) * (i.qty || 1), 0);
  const orderId = "ORD" + Math.floor(Math.random()*100000);

  const saveOrder = () => {
    const newOrder = {
      id: orderId,
      date: new Date().toLocaleString(),
      items: cart,
      total: total
    };
    const oldOrders = JSON.parse(localStorage.getItem("myOrders") || "[]");
    localStorage.setItem("myOrders", JSON.stringify([...oldOrders, newOrder]));
    if(setOrders) setOrders([...oldOrders, newOrder]);
    setCart([]);
    setPage('orders');
  };

  return (
    <div className="container text-center mt-5">
      <h1>✅ Order Placed Successfully!</h1>
      <h4>Order ID: {orderId}</h4>
      <h5>Total Paid: ${total.toFixed(2)}</h5>
      <p>Thank you Ningappa 🙏</p>
      <button className="btn btn-success mt-3" onClick={saveOrder}>View My Orders</button>
      <button className="btn btn-primary mt-3 ms-2" onClick={()=>{setCart([]); setPage('home')}}>Continue Shopping</button>
    </div>
  );
}
export default OrderSuccess;