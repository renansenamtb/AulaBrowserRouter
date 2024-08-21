import { Link } from 'react-router-dom';

export default function Header() {
    return (
    <>
   
    <div id='top-bar'>
        <div className="img-retro-games">
            
            <img src='https://www.creativefabrica.com/wp-content/uploads/2022/08/29/Retro-games-arcade-never-die-design-logo-Graphics-37269896-3-580x387.jpg' alt='Retro Games'></img>
            
        </div>
    </div>
    <nav>
    <header>
        <img className="img-logo" src='https://acdn.mitiendanube.com/stores/002/082/206/themes/amazonas/1-slide-1681906082971-7983070685-c235dfee31cf426f6c15862f179753741681906084-1920-1920.webp?1575283242' alt='Loja Retro Games'></img>
       
            <ul className="Listas">
                <div className="search-form">
                    <input type='text' className="search-input" placeholder="Busque seu game favorito..."></input>
                </div>
                <li className="li-css">
                    <Link to="/Home"><ion-icon name="game-controller-outline"></ion-icon>Home</Link>
                    </li>
                <li className="li-css">
                    <Link to="/Ofertas"><ion-icon name="pricetags-outline"></ion-icon>Ofertas</Link>
                </li>  
               
            </ul>
        </header>
    </nav>
    <img src='' alt='Promoção de Games Retrô'></img>
    </>
    );
}