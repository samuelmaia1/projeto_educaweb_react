import './Signup.css'
import {Link} from 'react-router-dom'
import { Button, ButtonGroup } from '@chakra-ui/react'
import LoginBtn from '../components/LoginBtn/LoginBtn'
import Logo from '../components/Logo/Logo'
import Navbar from '../components/Navbar/Navbar'
import { Header } from '../components/Header/Header'

export default () => {
    return (
        <>
            <Header/>

            <h2 className='options-title'>Como deseja se cadastrar?</h2>

            <div className="container-options">
                <Link to='/cadastro/aluno'><Button>Aluno</Button></Link>
                <Link to='/cadastro/professor'><Button>Professor</Button></Link>
                <Link to='/cadastro/empresa'><Button>Empresa</Button></Link>
            </div>

            
        </>
    )
}