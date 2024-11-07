import React from 'react'
import { useEffect, useState } from 'react';
import { pedirItemPorId } from '../helpers/pedirDatos';
import ItemDetail from './itemDetail';
const itemDeailContainer = ({itemId}) => {
  
const [item, setItem] = useState(null);
    useEffect(() =>{
        pedirItemPorId(itemId)
        .then((res) => setItem(res))
    },[itemId])

    return (
        <>
        {item &&  <ItemDetail  item={item}/>}
        </>
    
  )
}

export default itemDeailContainer
 