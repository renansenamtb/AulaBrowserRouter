import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListarProdutos from '../components/ListaProdutos';

export default function Produtos() {
  const [produtos, SetProdutos] = useState([
{
  id: 1,
        imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_77911-3b15f214b93923c78216899691742708-640-0.webp',
      nome: 'CONSOLE - EMULADOR COM 90 MIL JOGOS C/ CONTROLE SEM FIO',
       preco: 499.90,
        },
{
        id: 2,
               imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_8665-22b0399bfe356ff04717151777345978-640-0.webp',
      nome: 'CONSOLE - SUPER NINTENDO',
       preco: 599.90,
        },
           {
  id: 3,
    imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_8647-0721a8b96f150f101d17151754438813-640-0.webp',
      nome: 'CONSOLE - MEGA DRIVE 3',
       preco: 359.90,
       },
{
         id: 4,
    imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/dsc03073-21-eb39f8ecfd8723906b16518535815168-640-0.webp',
        nome: 'CONSOLE - PLAYSTATION 3 SLIM - EDIÇÃO LIMITADA FINAL FANTASY XIII-2 320GB',
       preco: 3599.99,
       },
    {
           id: 5,
      imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_1425-13ff75f37e51a4873217000648950878-640-0.webp',
          nome: 'CONSOLE - NINTENDO 64',
       preco: 1999.99,
       },
 {
        id: 6,
         imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/dsc082441-84609364ebdd08511816789943596123-640-0.webp',
        nome: 'CONSOLE - EMULADOR PORTÁTIL COM 10 MIL JOGOS',
       preco: 199.99,
         },
       {
      id: 7,
      imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_2143-7abc97be4a72bbffa717226985466211-640-0.webp',
      nome: 'CONSOLE - NOKIA N-GAGE',
      preco: 3999.99,
      
    },
    {
      id: 8,
      imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_9198-94c47954b938ac3d7017158058623782-640-0.webp',
      nome: 'CONSOLE - SUPER GAME VG-5600',
      preco: 1599.80,
      
       },
    {
      id: 9,
      imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/dsc084301-db06eac36790b9c68916928235248645-640-0.webp',
      nome: 'CONSOLE - CONSOLE TELEJOGO PHILCO',
      preco: 769.99,
      
    },
       {
      id: 10,
      imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_1140-0ea2356aa7a86f27c916993779188211-640-0.webp',
      nome: 'CONSOLE - XBOX CLASSIC (DESBLOQUEADO)',
      preco: 1599.75,
     
      },
    {
      id: 11,
      imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_5257-6205fa443e237d705a17092157283747-640-0.webp',
      nome: 'CONSOLE - SONY PLAYSTATION CLASSIC',
      preco: 599.90,
      
    },
    {
      id: 12,
      imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_78921-64be3f4fc860fef99e16903986606944-640-0.webp',
      nome: 'CONSOLE - PLAYSTATION 2 FAT',
      preco: 2999.89,
      
    },
  {
      id: 13,
      imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_8898-3f0a01e22f9eab941517153537935861-640-0.webp',
      nome: 'CONSOLE - PLAYSTATION 2 SLIM + KIT OPL',
      preco: 549.99,
     
    },
    {
      id: 14,
      imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_91051-a330b43360239ae62d16948091210425-640-0.webp',
      nome: 'CONSOLE - PSP MADDEN NFL 09 LIMITED ED. 16 GB',
      preco: 1599.90,
      
    },
    {
      id: 15,
      imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_1777-9d87a6dac0f7024a6b17004953452628-640-0.webp',
      nome: 'GRAND THEFT AUTO SAN ANDREAS PS3',
      preco: 199.99,
     
    },
  ]);

  return (
    <div>
      <Header />
      <main className="main-content">
        <h1>TODOS OS PRODUTOS DISPONÍVEIS</h1>
        <ListarProdutos produtos={produtos} />
      </main>
      <Footer />
    </div>
  );
}
