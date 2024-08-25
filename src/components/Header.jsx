import React from 'react';
import '../global.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4LwdIqsoNZl5kGQ-ceJPYSJLi0ochrD5Bjg&s" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/produtos">Produtos</a></li>
          <li><a href="/ofertas">Ofertas</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
