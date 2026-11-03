import React, { useEffect, useState } from 'react';

function Home({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((item) => (
          <div className="col-md-3 mb-4" key={item.id}>
            <div className="card h-100">
              <img src={item.image} className="card-img-top p-3" height="200" alt={item.title} style={{objectFit: 'contain'}} />
              <div className="card-body">
                <h6 className="card-title">{item.title.substring(0, 30)}...</h6>
                <p className="card-text fw-bold">${item.price}</p>
                <button onClick={() => addToCart(item)} className="btn btn-dark w-100">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;