import React from 'react';


const ListarProdutos = ({ produtos }) => {
  return (
    <div className="lista-produtos">
      {produtos.map((produto) => (
        <div key={produto.id} className="produto">
          <img src={produto.imagem} alt={produto.nome} />
          <h3>{produto.nome}</h3>
          <p>{produto.descricao}</p>
          <p>Preço: R${produto.preco}</p>
          <p>Categoria: {produto.categoria}</p>
          <ul>
            {produto.atributos.map((atributo, index) => (
              <li key={index}>{atributo}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ListarProdutos;
