import React from 'react'

import Item from './Item'
const ItemList = ({productos}) => {
    console.log(productos)
    return (    
        <div>
            <h1 className="tituloPrincipal">Productos</h1>
            <div className="productos">
                {productos.map((productos) => 
                <Item key={productos.id} productos={productos} />
                )}
            </div>
        </div>
    )
}

export default ItemList;