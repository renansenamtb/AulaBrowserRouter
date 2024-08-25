import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListarProdutos from '../components/ListaProdutos';

export default function Ofertas() {
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      nome: 'Oferta 1',
      descricao: 'Descrição da oferta 1',
      preco: 49.99,
      categoria: 'Categoria de Oferta 1',
      atributos: ['Atributo 1', 'Atributo 2', 'Atributo 3'],
      imagem: 'URL_DA_IMAGEM_OFERTA_1',
    },
    {
        id: 1,
        nome: 'Oferta 1',
        descricao: 'Descrição da oferta 1',
        preco: 49.99,
        categoria: 'Categoria de Oferta 1',
        atributos: ['Atributo 1', 'Atributo 2', 'Atributo 3'],
        imagem: 'URL_DA_IMAGEM_OFERTA_1',
      },
      {
        id: 2,
        nome: 'Oferta 1',
        descricao: 'Descrição da oferta 1',
        preco: 49.99,
        categoria: 'Categoria de Oferta 1',
        atributos: ['Atributo 1', 'Atributo 2', 'Atributo 3'],
        imagem: 'URL_DA_IMAGEM_OFERTA_1',
      },
      {
        id: 3,
        nome: 'Oferta 1',
        descricao: 'Descrição da oferta 1',
        preco: 49.99,
        categoria: 'Categoria de Oferta 1',
        atributos: ['Atributo 1', 'Atributo 2', 'Atributo 3'],
        imagem: 'URL_DA_IMAGEM_OFERTA_1',
      },
      {
        id: 4,
        nome: 'Oferta 1',
        descricao: 'Descrição da oferta 1',
        preco: 49.99,
        categoria: 'Categoria de Oferta 1',
        atributos: ['Atributo 1', 'Atributo 2', 'Atributo 3'],
        imagem: 'URL_DA_IMAGEM_OFERTA_1',
      },
      {
        id: 5,
        nome: 'Oferta 1',
        descricao: 'Descrição da oferta 1',
        preco: 49.99,
        categoria: 'Categoria de Oferta 1',
        atributos: ['Atributo 1', 'Atributo 2', 'Atributo 3'],
        imagem: 'URL_DA_IMAGEM_OFERTA_1',
      },
      {
        id: 6,
        nome: 'Oferta 1',
        descricao: 'Descrição da oferta 1',
        preco: 49.99,
        categoria: 'Categoria de Oferta 1',
        atributos: ['Atributo 1', 'Atributo 2', 'Atributo 3'],
        imagem: 'URL_DA_IMAGEM_OFERTA_1',
      },
      {
        id: 7,
        nome: 'Oferta 1',
        descricao: 'Descrição da oferta 1',
        preco: 49.99,
        categoria: 'Categoria de Oferta 1',
        atributos: ['Atributo 1', 'Atributo 2', 'Atributo 3'],
        imagem: 'URL_DA_IMAGEM_OFERTA_1',
      },
      {
        id: 8,
        nome: 'Oferta 1',
        descricao: 'Descrição da oferta 1',
        preco: 49.99,
        categoria: 'Categoria de Oferta 1',
        atributos: ['Atributo 1', 'Atributo 2', 'Atributo 3'],
        imagem: 'URL_DA_IMAGEM_OFERTA_1',
      },
      {
        id: 9,
        nome: 'Oferta 1',
        descricao: 'Descrição da oferta 1',
        preco: 49.99,
        categoria: 'Categoria de Oferta 1',
        atributos: ['Atributo 1', 'Atributo 2', 'Atributo 3'],
        imagem: 'URL_DA_IMAGEM_OFERTA_1',
      },
      {
        id: 10,
        nome: 'Oferta 1',
        descricao: 'Descrição da oferta 1',
        preco: 49.99,
        categoria: 'Categoria de Oferta 1',
        atributos: ['Atributo 1', 'Atributo 2', 'Atributo 3'],
        imagem: 'URL_DA_IMAGEM_OFERTA_1',
      },
  
  ]);

  return (
    <div>
      <Header />
      <main className="main-content">
        <h1>Ofertas Especiais</h1>
        <ListarProdutos produtos={produtos} />
      </main>
      <Footer />
    </div>
  );
};


