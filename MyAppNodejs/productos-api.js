const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const path = require("path");
const prompt = require("prompt-sync")();

const app = express();
const port = 3000;

let productos = [];
let ventas = [{
    id:"Arroz Dulce",
    precio:"5000",
    cantidad:"10",
    fecha:"25/10/2022",
    total:"50000"
},
{
    id:"Arroz Con Camarones",
    precio:"15000",
    cantidad:"5",
    fecha:"25/10/2022",
    total:"45000"
}];


//Ubicaremos los datos de productos
app.use(cors());
app.get('/', function (req, res) {//desplegamos el index
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/crearProducto', function (req, res) {//desplegamos el crearProducto.html
    res.sendFile(path.join(__dirname, '/crearProducto.html'));
})

app.get('/modificarProducto', function (req, res) {//desplegamos el modificarProducto.html
    res.sendFile(path.join(__dirname, '/modificarProducto.html'));
})

app.get('/modificarStock', function (req, res) {//desplegamos el modificarProducto.html
    res.sendFile(path.join(__dirname, '/modificarStock.html'));
})



//configuración del middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/crearProducto', (req, res) => {
    const producto = req.body;

    //salida del producto por consola

    //console.log(producto);
    productos.push(producto);

    res.send('El producto ha sido agregado a la bd');
})

app.get('/listarVentas', (req, res) => {
    res.json(ventas);
})

app.get('/listarProductos', (req, res) => {
    res.json(productos);
})

app.get('/listarProductosConStock', (req, res) => {
    var productosConStock=[];
    for (var i = 0; i < productos.length; i++) {
        if (productos[i].stock > 0) {
            productosConStock.push(productos[i]);
        }}
    res.json(productosConStock);
})

app.post('/modificarStock', (req, res) => {

    const idproductoModificado = req.body.id;
    const stockAdicional = parseInt(req.body.stock);
    var nuevoStock;
    function agregarStock() {
        //Creo un Array para guardar los stocks
        let stockInt = [];
        productos.forEach(producto => stockInt.push(parseInt(producto.stock) + stockAdicional));

        console.log(stockInt)

        for (var i = 0; i < productos.length; i++) {
            if (productos[i].id == idproductoModificado) {
                productos[i].stock = stockInt[i].toString();
            }
        }
    }
    agregarStock();

    res.json(productos);
})


app.post('/modificarProducto', (req, res) => {

    const productoModificado = req.body;
    function ModificarProductos() {
        for (var i = 0; i < productos.length; i++) {
            if (productos[i].id == productoModificado.Id) {
                productos[i].image = productoModificado.image,
                    productos[i].name = productoModificado.name,
                    productos[i].description = productoModificado.description,
                    productos[i].value = productoModificado.value,
                    productos[i].stock = productoModificado.stock
            }
        }
    }
    ModificarProductos();
    productos[(productoModificado.id) - 1] = productoModificado;
    //console.log(productos);
    res.json(productos);
})


app.listen(port, () => console.log(`La app productos esta en el puerto ${port}`))