import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListarProdutos from '../components/ListaProdutos';

export default function Ofertas() {
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      nome: 'CONSOLE - EMULADOR PORTATÍL COM 10 MIL JOGOS',
      descricao: 'PRODUTO NOVO',
      preco: 199.99,
      categoria: 'Consoles',
      atributos: ['Cor: Azul'],
      imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/dsc082441-84609364ebdd08511816789943596123-640-0.webp',
    },
    {
        id: 2,
        nome: 'CONSOLE - NOKIA N-GAGE',
        descricao: 'PRODUTO USADO',
        preco: 3999,
        categoria: 'Consoles',
        atributos: ['Cor: Cinza', 'Jogos Inclusos: Sim'],
        imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_2143-7abc97be4a72bbffa717226985466211-640-0.webp',
      },
      {
        id: 3,
        nome: 'CONSOLE - SUPER GAME VG-5600',
        descricao: 'PRODUTO USADO',
        preco: 1599,
        categoria: 'Consoles',
        atributos: ['Cor: Preto'],
        imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_9198-94c47954b938ac3d7017158058623782-640-0.webp',
      },
      {
        id: 4,
        nome: 'CONSOLE - CONSOLE TELEJOGO PHILCO',
        descricao: 'PRODUTO USADO',
        preco: 769.99,
        categoria: 'Consoles',
        atributos: ['Cor: Preto'],
        imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/dsc084301-db06eac36790b9c68916928235248645-640-0.webp',
      },
      {
        id: 5,
        nome: 'CONSOLE - XBOX CLASSIC (DESBLOQUEADO)',
        descricao: 'PRODUTO USADO',
        preco: 1599,
        categoria: 'Console',
        atributos: ['Cor: Preto'],
        imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_1140-0ea2356aa7a86f27c916993779188211-640-0.webp',
      },
      {
        id: 6,
        nome: 'CONSOLE - SONY PLAYSTATION CLASSIC',
        descricao: 'PRODUTO USADO',
        preco: 599.90,
        categoria: 'Consoles',
        atributos: ['Cor: Branco'],
        imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_5257-6205fa443e237d705a17092157283747-640-0.webp',
      },
      {
        id: 7,
        nome: 'CONSOLE - PLAYSTATION 2 FAT',
        descricao: 'PRODUTO USADO',
        preco: 2999,
        categoria: 'Consoles',
        atributos: ['Cor: Ocean Blue'],
        imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_78921-64be3f4fc860fef99e16903986606944-640-0.webp',
      },
      {
        id: 8,
        nome: 'CONSOLE - PLAYSTATION 2 SLIM + KIT OPL',
        descricao: 'PRODUTO USADO SEM LEITOR',
        preco: 549.99,
        categoria: 'Consoles',
        atributos: ['Cor: Preto'],
        imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_8898-3f0a01e22f9eab941517153537935861-640-0.webp',
      },
      {
        id: 9,
        nome: 'CONSOLE - PSP MADDEN NFL 09 LIMITED ED. 16 GB',
        descricao: 'PRODUTO USADO',
        preco: 1599,
        categoria: 'Consoles',
        atributos: ['Cor: Azul'],
        imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_91051-a330b43360239ae62d16948091210425-640-0.webp',
      },
      {
        id: 10,
        nome: 'GRAND THEFT AUTO SAN ANDREAS PS3',
        descricao: 'PRODUTO USADO',
        preco: 199.99,
        categoria: 'Jogos',
        atributos: ['Midia: Fisíca'],
        imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_1777-9d87a6dac0f7024a6b17004953452628-640-0.webp',
      },
      
  
  ]);

  return (
    <div>
      <Header />
      <main className="main-content">
        <h1>MELHORES OFERTAS DE GAMES!!!!!!</h1>
        <ListarProdutos produtos={produtos} />
      </main>
      <Footer />
    </div>
  );
};


