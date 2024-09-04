import './Login.css'
import {useState} from 'react'
import axios from 'axios'
import Logo from '../components/Logo/Logo'
import Navbar from '../components/Navbar/Navbar'
import LoginBtn from '../components/LoginBtn/LoginBtn'
import InputFormSignup from '../components/InputFormSignup/InputFormSignup'
import {Button} from '@chakra-ui/react'
import {Link, useNavigate} from 'react-router-dom'

export default () => {

    const navigate = useNavigate()

    const url = 'http://localhost:8081/user/validate'

    const [loginUserName , setLoginUserName] = useState('')
    const [loginPass , setLoginPass] = useState('')

    const handleLoginUserName = (e) => {
        setLoginUserName(e.target.value)
    }

    const handleLoginPass = (e) => {
        setLoginPass(e.target.value)
    }

    const loginSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(`${url}?login=${loginUserName}&password=${loginPass}`)

        if (response.json()){
            navigate('/sobre')
        }
        
    }


    return (
        <>
            <header className='header'>
                <Logo/>
                <Navbar/>
                <LoginBtn/>
            </header>

            <form onSubmit={loginSubmit}>
                <h2 className='form-title'>Entrar</h2>
                <InputFormSignup name='login' placeholder='fulanosilva' label='Nome de usuário: ' onChange={handleLoginUserName}/> 
                <InputFormSignup name='password' placeholder='fulano1234@' label='Senha: ' onChange={handleLoginPass} type="password"/>
                <Button colorScheme='teal' variant='solid' type='submit'>
                    Entrar
                </Button>
                <p className='text-for-signup'>Não possui uma conta? <Link to='/cadastro'><span>Cadastre-se</span></Link></p>
            </form>

        </>
    )
}