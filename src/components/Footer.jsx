import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sobre Nós</h3>
          <p>
            Somos uma loja de e-commerce dedicada a oferecer os melhores produtos para nossos clientes.
          </p>
        </div>
        <div className="footer-section">
          <h3>Contato</h3>
          <p>Email: contato@loja.com</p>
          <p>Telefone: (11) 99999-9999</p>
          <p>Endereço: Rua Exemplo, 123, São Paulo, SP</p>
        </div>
        <div className="footer-section">
          <h3>Siga-nos</h3>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#instagram">Instagram</a>
            <a href="#twitter">Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p></p>
      </div>
    </footer>
  );
};

export default Footer;
