import CartWidget from '../CartWidget/CartWidget'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <nav>
            <h1>Natural Life</h1>
            <div>
                <button onClick={() => navigate('/category/vela')}>Velas</button>
                <button onClick={() => navigate('/category/difusor')}>Difusores</button>
                <button onClick={() => navigate('/category/combo')}>Combos</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar