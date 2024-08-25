import React from 'react';
import { Link } from 'react-router-dom';
import '../global.css';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4LwdIqsoNZl5kGQ-ceJPYSJLi0ochrD5Bjg&s" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li> 
          <li><Link to="/produtos">Produtos</Link></li> 
          <li><Link to="/ofertas">Ofertas</Link></li> 
        </ul>
      </nav>
    </header>
  );
}
