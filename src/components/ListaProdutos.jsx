import React from 'react';

export default function ListarProdutos({ produtos }) {
  return (
    <div className="produtos-container">
      {produtos.map(produto => (
        <div key={produto.id} className="produto">
          <div className="produto-imagem-container">
            <img src={produto.imagem} alt={produto.nome} className="produto-imagem" />
          </div>
          <div className="produto-detalhes">
            <h2 className="produto-nome">{produto.nome}</h2>
            <p className="produto-preco">R$ {produto.preco}</p>
          </div>
     
        </div>
      ))}
    </div>
  );
}
