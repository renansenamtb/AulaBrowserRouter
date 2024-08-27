import React from 'react';
import '../global.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contato da Loja</h4>
          <p>Telefone: (67) 4002-8922</p>
          <p>Email: retrogames@gmail.com</p>
        </div>
        <div className="footer-section">
          <h4>Endereço da Loja</h4>
          <p>Rua da Saudade, 233</p>
          <p>Bairro Sem Futuros, Nova Andradina-Mato Grosso do Sul</p>
          <p>CEP: 79750-000</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Renan Sena. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
