import { Link } from "react-router-dom";


export default function Header(){
    return(
        <>
        <nav>
            <ul>
                <Link to="/Home ">
                
                <li>Home</li>
                </Link>
                <Link to="/Oferta">
                <li>Oferta</li>
                
                </Link>
            </ul>
        </nav>
        </>
    )
}