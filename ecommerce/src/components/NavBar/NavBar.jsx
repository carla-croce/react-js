import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
    return (
        <nav>
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