import React from 'react';
function Header({ cartCount }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">My Shop</span>
        <span className="text-white">Cart ({cartCount || 0})</span>
      </div>
    </nav>
  );
}
export default Header;