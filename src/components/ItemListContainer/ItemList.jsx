import React from 'react'
import './Item.css';
import Item from './Item'
const ItemList = ({productos}) => {
    console.log(productos)
    return (    
        <>
            
            <div className="contenedorProductos">
                {productos.map((productos) => 
                <Item key={productos.id} productos={productos} />
                )}
            </div>
            </>
        
    )
}

export default ItemList;