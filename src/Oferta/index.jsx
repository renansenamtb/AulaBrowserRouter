import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListarProdutos from '../components/ListaProdutos';

export default function Ofertas() {
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/dsc082441-84609364ebdd08511816789943596123-640-0.webp',
      nome: 'CONSOLE - EMULADOR PORTATÍL COM 10 MIL JOGOS',
      preco: 199.99,
     
    },
    {
      id: 2,
      imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_2143-7abc97be4a72bbffa717226985466211-640-0.webp',
      nome: 'CONSOLE - NOKIA N-GAGE',
      preco: 3999.90,
    
    },
    {
      id: 3,
      imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_9198-94c47954b938ac3d7017158058623782-640-0.webp',
      nome: 'CONSOLE - SUPER GAME VG-5600',
      preco: 1599.89,
    
    },
    {
      id: 4,
      imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/dsc084301-db06eac36790b9c68916928235248645-640-0.webp',
      nome: 'CONSOLE - CONSOLE TELEJOGO PHILCO',
      preco: 769.99,
      
    },
    {
      id: 5,
      imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_1140-0ea2356aa7a86f27c916993779188211-640-0.webp',
      nome: 'CONSOLE - XBOX CLASSIC (DESBLOQUEADO)',
      preco: 1599.00,
      
    },
    {
      id: 6,
      imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_5257-6205fa443e237d705a17092157283747-640-0.webp',
      nome: 'CONSOLE - SONY PLAYSTATION CLASSIC',
      preco: 599.90,
      
    },
    {
      id: 7,
      imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_78921-64be3f4fc860fef99e16903986606944-640-0.webp',
      nome: 'CONSOLE - PLAYSTATION 2 FAT',
      preco: 2999.99,
      
    },
    {
      id: 8,
      imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_8898-3f0a01e22f9eab941517153537935861-640-0.webp',
      nome: 'CONSOLE - PLAYSTATION 2 SLIM + KIT OPL',
      preco: 549.99,
      
    },
    {
      id: 9,
      imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_91051-a330b43360239ae62d16948091210425-640-0.webp',
      nome: 'CONSOLE - PSP MADDEN NFL 09 LIMITED ED. 16 GB',
      preco: 1599.99,
      
    },
    {
      id: 10,
      imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_1777-9d87a6dac0f7024a6b17004953452628-640-0.webp',
      nome: 'GRAND THEFT AUTO SAN ANDREAS PS3',
      preco: 199.99,
      
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
}
