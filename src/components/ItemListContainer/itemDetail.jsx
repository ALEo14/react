import "./Item.css";
const ItemDetail = ({item}) =>{
    return (
      
        <div className="productos ">
            <div className="productosDetalles">
                <img src={item.imagen} className="imgProducto" alt="" ></img>
                <h1 className="nombreProducto">{item.titulo}</h1>
                <h1 className="precioProducto">{item.precio}</h1>   

            </div>
            
        </div>
        
    )
}
export default ItemDetail