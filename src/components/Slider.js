import React, {Component} from "react";
//import Objetos from './components/objetos';
import ObjetosApp from './objetosApp.js';
class Slider extends Component{
    render(){
        return(
            <div id="slider" class="slider-small">
                <h2>Portal de compras</h2>
                {/*<ObjetosApp/>*/}
                <a href="#" class="btn-white">Ir a Pagar</a>

            </div>
        )
    }

}

export default Slider;