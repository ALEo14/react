import Footer from "./Footer";
const NavBar = () => {
    return(
        <aside className="asideMobile" >
        <button className="cerrarMenuMobile" id="cerrarMenuMobile">
          <i className="bi bi-x"></i>
        </button>
        <header>
          <h1 className="logo">Alejoshop</h1>
        </header>
        <nav>
          <ul className="menu">
            <li>
              <button id="todos" className="botonMenu botonCategoria active"><i className="bi bi-hand-index-thumb-fill">
              </i> Todos los productos</button>
            </li>
            <li>
              <button id="camisetas" className="botonMenu botonCategoria">
                <i className="bi bi-hand-index-thumb"></i> camisetas</button>
            </li>
            <li>
              <button id="short" className="botonMenu botonCategoria"><i className="bi bi-hand-index-thumb"></i> short
              </button>
            </li>
            <li>
              <button id="Campera" className="botonMenu botonCategoria">
                <i className="bi bi-hand-index-thumb"></i>Campera
              </button>
            </li>
            <li>
              <a className="botonMenu botonCarrito" href="carrito.html"
                ><i className="bi bi-cart-fill"></i>Carrito
                <span id="numerito" className="numerito">0</span></a>
            </li>
          </ul>
        </nav>
        <Footer />
      </aside>
      
    )
}
export default NavBar;