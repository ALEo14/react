import React from "react";
const Item = ({productos}) => {    
    return ( 

        <div className="producto">
            <div className="productoDetalles">
            <img src={productos.imagen} className="imgProducto" alt="" ></img>
            <h1 className="nombreProducto">{productos.titulo}</h1>
            <h1 className="precioProducto">{productos.precio}</h1>
            </div>
        </div> 
    )
}
export default Item;