import {useState} from 'react'
import Navbar from '../components/Navbar/Navbar'
import Logo from '../components/Logo/Logo'
import LoginBtn  from '../components/LoginBtn/LoginBtn'
import InputFormSignup from '../components/InputFormSignup/InputFormSignup'
import {Button} from '@chakra-ui/react'
import axios from 'axios'
import './Signup.css'
import {Link} from 'react-router-dom'

export default () => {

    const url = import.meta.env.VITE_API_URL

    const [firstname, setFirstname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState('')

    const handleFirstname = (e) => {
        setFirstname(e.target.value)
    }      
   
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }       

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin  = (e) => {
        setLogin(e.target.value)
    }
    
    const formSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(url + 'instructor/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                login: login,
                email: email,
                name: firstname,
                password: password, 
            })
        })

        if (response.ok){
            alert('Conta criada com sucesso! Prossiga para login.')
            navigate('/entrar')
        } 
        else {
            const data = await response.json()
            alert(data.message)
        }
    }

    return (
        <>
            <header className="header">
                <Logo/>
                <Navbar/>
                <LoginBtn/>
            </header>

            <h2 className='options-title'>Como deseja se cadastrar?</h2>

            <div className="container-options">
                <Link to='/cadastro/aluno'>
                    <Button>Aluno</Button>
                </Link>
                <Link to='/cadastro/professor'>
                    <Button>Professor</Button>
                </Link>
                <Link to='/cadastro/empresa'>
                    <Button>Empresa</Button>
                </Link>
            </div>

            <form onSubmit={formSubmit}>
                <h2 className='form-title'>Cadastre-se</h2>
                <InputFormSignup name='firstname' placeholder='Fulano' label='Nome: ' onChange={handleFirstname} value={firstname}/> 
                <InputFormSignup name='email' placeholder='fulano@email.com' label='E-mail: ' onChange={handleEmail} value={email}/>
                <InputFormSignup name='login' placeholder='fulano' label='Login: ' onChange={handleLogin} value={login}/>
                <InputFormSignup name='password' placeholder='fulano1234@' label='Senha: ' onChange={handlePassword} value={password} type="password"/>
                <Button colorScheme='teal' variant='solid' type='submit'>
                    Cadastrar
                </Button>
                <p className='text-for-signup'>Já possui uma conta? <Link to='/entrar'><span>Faça login</span></Link></p>
            </form>
        </>
    )
}