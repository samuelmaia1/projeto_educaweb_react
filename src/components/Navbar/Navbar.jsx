import './Navbar.css'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <nav className='navbar'>
            <Link to='/' className='navbar-link'>Página inicial</Link>
            <Link to='/cursos' className='navbar-link'>Cursos</Link>
            <Link to='/sobre' className='navbar-link'>Sobre nós</Link>
        </nav>
    )
}