import carrito from "../data/carrito";

function Totalizar(){
    var sumatoria=0;
    carrito.map(celda=>{
        sumatoria+= celda.precio*celda.cantidad
    }) 
    return(
        '$'+ sumatoria
    )
}

export default Totalizar;