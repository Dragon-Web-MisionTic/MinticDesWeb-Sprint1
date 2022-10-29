import { useState } from "react";
import Objetos from "./objetos";


export default function ObjetosApp() {
    const [etiqueta, setEtiqueta] = useState('Algo');
    const [cuerpo, setCuerpo] = useState([]);
    function handleEnviar(e) {
        e.preventDefault();
        const newObjeto = {
            id: crypto.randomUUID(),
            etiqueta: etiqueta
        };
        const copia =[...cuerpo];
        copia.unshift(newObjeto);
        setCuerpo(copia);
        setEtiqueta('');
    }

    /*function handleClic(e) {
        e.preventDefault();
        setEtiqueta("Cmabios")
    }*/
    function handleCambios(e) {
        const value= e.target.value;
        setEtiqueta(value);
    }
    return (
        <div className='App-header'>
            <form onSubmit={handleEnviar} className="objFormulario">
                <input className="objInput"
                onChange={handleCambios}
                value={etiqueta}>
                </input>
                <input //onClick={handleClic} 
                onClick={handleEnviar}
                className="objBoton"
                                type="submit"
                            value="Crear Objeto">
                        </input><br/>
                    {/* {etiqueta} */}
            </form>
            <div className="cuerpoContenedor">
                {
                    cuerpo.map(item=>(
                        //forma mas rapida <div>{item.id}<div/>
                        <Objetos key={item.id} 
                        item={item}/>
                    ))
                }
            </div>
        </div>
    );
}