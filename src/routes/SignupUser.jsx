import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Logo from '../components/Logo/Logo'
import LoginBtn  from '../components/LoginBtn/LoginBtn'
import InputFormSignup from '../components/InputFormSignup/InputFormSignup'
import {Button} from '@chakra-ui/react'
import axios from 'axios'
import './Signup.css'
import {Link} from 'react-router-dom'
import { Header } from '../components/Header/Header'


export default () => {

    const url = import.meta.env.VITE_API_URL

    const navigate = useNavigate()

    const [firstName, setFirstame] = useState('')
    const [lastName, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState('')
    
    function handleName(e) {
        setFirstame(e.target.value)
    }

    function handleLastName(e) {
        setLastname(e.target.value)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    function handleLogin(e){
        setLogin(e.target.value)
    }

    const formSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(url + 'student/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                login: login,
                email: email,
                firstName: firstName,
                lastName: lastName,
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
            <Header/>

            <h2 className='options-title'>Como deseja se cadastrar?</h2>

            <div className="container-options">
                <Link to='/cadastro/aluno'><Button>Aluno</Button></Link>
                <Link to='/cadastro/professor'><Button>Professor</Button></Link>
                <Link to='/cadastro/empresa'><Button>Empresa</Button></Link>
            </div>

            <form onSubmit={formSubmit}>
                <h2 className='form-title'>Cadastre-se</h2>
                <InputFormSignup name='email' placeholder='fulano@email.com' label='E-mail: ' onChange={handleEmail} value={email}/>
                <InputFormSignup name='login' placeholder='fulanosilva' label='Nome de usuário: ' onChange={handleLogin} value={login}/> 
                <InputFormSignup name='firstName' placeholder='Fulano' label='Nome: ' onChange={handleName} value={firstName}/>
                <InputFormSignup name='lastName' placeholder='Silva' label='Sobrenome: ' onChange={handleLastName} value={lastName}/>
                <InputFormSignup name='password' placeholder='fulano1234@' label='Senha: ' onChange={handlePassword} value={password} type="password"/>
                <Button colorScheme='teal' variant='solid' type='submit'>
                    Cadastrar
                </Button>
                <p className='text-for-signup'>Já possui uma conta? <Link to='/entrar'><span>Faça login</span></Link></p>
            </form>
        </>
    )
}