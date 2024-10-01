import Logo from '../Logo/Logo'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'

export function StudentHeader(){
    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-link'>Página inicial</Link>
                <Link to='/cursos' className='navbar-link'>Cursos</Link>
                <Link to='/cursos/criar' className='navbar-link'>Vagas</Link>
                <Link to='/sobre' className='navbar-link'>Sobre nós</Link>
            </nav>
        </>
    )
}