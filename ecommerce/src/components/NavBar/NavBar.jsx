import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
    return (
        <nav>
            <h1>Natural Life</h1>
            <div>
                <button>Productos</button>
                <button>Nosotros</button>
                <button>Contacto</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar