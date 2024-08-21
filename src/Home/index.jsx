import React from 'react';
import Header from "../components/Header";
import Footer from '../components/Footer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ListaProdutos from '../components/ListaProdutos';
import '../global.css';

export default function Home() {
    return (
        <>
           
           
          
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
            <Header/>
        </>
    );
}
