import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListarProdutos from '../components/ListaProdutos';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      nome: 'CONSOLE - EMULADOR COM 90 MIL JOGOS C/ CONTROLE SEM FIO',
      descricao: 'PRODUTO NOVO',
      preco: 499.90,
      categoria: 'Consoles',
      atributos: ['Cor: Preto'],
      imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_77911-3b15f214b93923c78216899691742708-640-0.webp',
    },
    {
      id: 2,
      nome: 'CONSOLE - SUPER NINTENDO',
      descricao: 'PRODUTO USADO',
      preco: 599.90,
      categoria: 'Consoles',
      atributos: ['Cor: Branco'],
      imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_8665-22b0399bfe356ff04717151777345978-640-0.webp',
    },
    {
      id: 3,
      nome: 'CONSOLE - MEGA DRIVE 3',
      descricao: 'PRODUTO USADO',
      preco: 359.90,
      categoria: 'Consoles',
      atributos: ['Cor: Preto'],
      imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_8647-0721a8b96f150f101d17151754438813-640-0.webp',
    },
    {
      id: 4,
      nome: 'CONSOLE - PLAYSTATION 3 SLIM - EDIÇÃO LIMITADA FINAL FANTASY XIII-2 320GB',
      descricao: 'PRODUTO USADO',
      preco: 3599,
      categoria: 'Consoles',
      atributos: ['Cor: Personalizado'],
      imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/dsc03073-21-eb39f8ecfd8723906b16518535815168-640-0.webp',
    },
    {
      id: 5,
      nome: 'CONSOLE - NINTENDO 64',
      descricao: 'PRODUTO USADO',
      preco: 1999,
      categoria: 'Consoles',
      atributos: ['Cor: Cinza'],
      imagem: 'https://acdn.mitiendanube.com/stores/002/082/206/products/img_1425-13ff75f37e51a4873217000648950878-640-0.webp',
    },
  ]);

  return (
    <div>
      <Header />
      <main className="main-content">
        <Carousel
          infiniteLoop
          useKeyboardArrows
          autoPlay
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          dynamicHeight
        >
          <div>
            <img src="https://acdn.mitiendanube.com/stores/002/082/206/themes/amazonas/2-slide-1708449498977-4226813327-51cabb7ee3e683b5a2492b057395a8d01708449500-1920-1920.webp?1575283242" alt="Slide 1" />
          </div>
          <div>
            <img src="https://acdn.mitiendanube.com/stores/002/082/206/themes/amazonas/2-slide-1708449529592-8291749446-cc5b28f88e45b164c3261d528188da411708449529-1920-1920.webp?1575283242" alt="Slide 2" />
          </div>
          <div>
            <img src="https://acdn.mitiendanube.com/stores/002/082/206/themes/amazonas/1-slide-1681906025825-8276880475-b49d90824a921dc0660556024e5e57d91681906027-1920-1920.webp?1575283242" alt="Slide 3" />
          </div>
        </Carousel>
        <h1>Produtos com preço IMPERDIVEL!!!!!!</h1>
        <ListarProdutos produtos={produtos} />
      </main>
      <Footer />
    </div>
  );
}
