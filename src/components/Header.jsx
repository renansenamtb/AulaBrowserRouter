import { Link } from 'react-router-dom';

export default function Header() {
    return (
    <>
    <div id='top-bar'>
        <div className="img-retro-games">
            {/* Substitua o src pela URL da imagem do logo da sua loja de games retrô */}
            <img src='https://www.creativefabrica.com/wp-content/uploads/2022/08/29/Retro-games-arcade-never-die-design-logo-Graphics-37269896-3-580x387.jpg' alt='Retro Games'></img>
            
            A MELHOR COLEÇÃO DE GAMES CLÁSSICOS COM DESCONTOS ESPECIAIS!
        </div>
    </div>
    <nav>
        {/* Substitua este src pela URL do logo principal da sua loja de games retrô */}
        <img className="img-logo" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYIgNbOu-AYHOaQqkJJ4Lq5tnkAs3OxCsJLg&s' alt='Loja Retro Games'></img>
        <header>
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
