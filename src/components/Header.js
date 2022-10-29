import React,{Component} from "react";
import logo from '../assets/image/logo192.png';
import '../assets/css/App.css';
class Header extends Component{

    render(){
        return (
            <header id="header">
            <div class="center">
                <div id="logo">
                    <img src={logo} class="app-logo" alt="Logotipo" />
                    <span id="brand">
                        <strong> Dragon</strong>WEB
                    </span>
                </div>
                
                {/* MENU */}
                <nav id="menu">
                    <ul>
                        <li>
                            <a href="index.html">Inicio</a>
                        </li>
                        <li>
                            <a href="blog.html">Nosotros</a>
                        </li>
                        <li>
                            <a href="formulario.html">Contacto</a>
                        </li>
                        <li>
                            <a href="#">Pagina 1</a>
                        </li>
                        <li>
                            <a href="#">Pagina 2</a>
                        </li>                            
                    </ul>
                </nav>
                {/* LIMPIAR FLOTADOS */}
                <div class="clearfix"></div>
            </div>
        </header>
        )
    }

}

export default Header;