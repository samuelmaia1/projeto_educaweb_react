import './Login.css'
import {useState} from 'react'
import axios from 'axios'
import Logo from '../components/Logo/Logo'
import Navbar from '../components/Navbar/Navbar'
import LoginBtn from '../components/LoginBtn/LoginBtn'
import InputFormSignup from '../components/InputFormSignup/InputFormSignup'
import {Button} from '@chakra-ui/react'
import {Link} from 'react-router-dom'

export default () => {

    const url = 'http://localhost:3000/users'

    const [loginEmail , setLoginEmail] = useState('')
    const [loginPass , setLoginPass] = useState('')

    const handleLoginEmail = (e) => {
        setLoginEmail(e.target.value)
    }

    const handleLoginPass = (e) => {
        setLoginPass(e.target.value)
    }

    const loginSubmit = async (e) => {
        e.preventDefault()

        const response = await axios.get(url)
        const users = response.data

        console.log(loginPass)
        
        users.forEach((user) => {
            if (loginEmail == user.email && loginPass == user.password){
                alert('Acesso liberado')
            }
        })
        
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
                <InputFormSignup name='email' placeholder='fulano@email.com' label='E-mail: ' onChange={handleLoginEmail}/> 
                <InputFormSignup name='password' placeholder='fulano1234@' label='Senha: ' onChange={handleLoginPass}/>
                <Button colorScheme='teal' variant='solid' type='submit'>
                    Entrar
                </Button>
                <p className='text-for-signup'>Não possui uma conta? <Link to='/cadastro'><span>Cadastre-se</span></Link></p>
            </form>

        </>
    )
}