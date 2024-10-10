import React from "react";
import './Item.css';
const Item = ({productos}) => {    
    return ( 
        <div className="containerProductos">
            <div className="productosDetalles">
            <img src={productos.imagen} className="imgProducto" alt="" ></img>
            <h1 className="nombreProducto">{productos.titulo}</h1>
            <h1 className="precioProducto">{productos.precio}</h1>
            </div>
        </div>   
    )
}
export default Item;