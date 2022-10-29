import carrito from "../data/carrito";
import React, { Component } from "react";
import { TableContainer,Table,TableHead,TableBody,TableRow,TableCell, Backdrop} from "@material-ui/core";
import Totalizar from "./TotalCompra";


const MostrarCarrito = () => {

    return(
        <aside id="sidebar1">
        <div>
            <h2>Carrito de Compras</h2>
            <TableContainer >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><h3>Producto</h3></TableCell>
                            <TableCell><h3>Cantidad</h3></TableCell>
                            <TableCell><h3>Precio</h3></TableCell>
                            <TableCell><h3>SubTotal</h3></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {carrito.map(celda=>(
                            <TableRow>
                                <TableCell>{celda.producto}</TableCell>
                                <TableCell>{celda.cantidad}</TableCell>
                                <TableCell>$ {celda.precio}</TableCell>
                                <TableCell>$ {celda.precio* celda.cantidad}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
                            <div>
                                <h2 id="importante">El valor del pedido es: <Totalizar></Totalizar></h2>
                            </div>

        </div>
        </aside>
    )

    

};

export default MostrarCarrito;