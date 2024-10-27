
import React, { useEffect , useState } from "react";
import {pedirDatos} from "../helpers/pedirDatos.js";
import ItemList from "./ItemList";
const ItemListContainer = () => {


    const [productos, setProductos] = useState([]);
    // console.log(productos);
    useEffect(() => {
        pedirDatos()
        .then((res) => {
            setProductos(res);
        })
    }, [])

    return (
            
    <main>
<h2 class="tituloPrincipal" id="tituloPrincipal">Todos los productos</h2>
        <ItemList productos={productos}/>
        
        </main>
    )
}

export default ItemListContainer;