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

    const url = 'http://localhost:3000/users'

    const [firstname, setFirstame] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [description, setDescription] = useState('')

    const user = {
        userName: firstname,
        userLastName: lastname,
        userEmail: email,
        userPassword: password,
    }

    function handleFirstname(e) {
        setFirstame(e.target.value)
    }

    function handleLastname(e) {
        setLastname(e.target.value)
    }       

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    const formSubmit = async (e) => {
        e.preventDefault()

        const response = await axios.get(url)
        const users = response.data

        users.forEach((user) => {
            if (email == user.email) {
                alert('E-mail já cadastrado. Por favor, tente fazer login ou cadastre outro endereço de e-mail.')
                return
            }
        })

        await axios.post(url, {
            firstname,
            lastname,   
            email,
            password,
            description 
        })
    }

    return (
        <>
            <header className='header'>
                <Logo/>
                <Navbar/>
                <LoginBtn/>
            </header>

            <h2 className='options-title'>Como deseja se cadastrar?</h2>

            <div className="container-options">
                <Link to='/cadastro/aluno'><Button>Aluno</Button></Link>
                <Link to='/cadastro/professor'><Button>Professor</Button></Link>
                <Link to='/cadastro/empresa'><Button>Empresa</Button></Link>
            </div>

            <form onSubmit={formSubmit}>
                <h2 className='form-title'>Cadastre-se</h2>
                <InputFormSignup name='firstname' placeholder='Fulano' label='Nome: ' onChange={handleFirstname} value={firstname}/> 
                <InputFormSignup name='lastname' placeholder='Da Silva' label='Sobrenome: ' onChange={handleLastname} value={lastname}/> 
                <InputFormSignup name='email' placeholder='fulano@email.com' label='E-mail: ' onChange={handleEmail} value={email}/> 
                <InputFormSignup name='password' placeholder='fulano1234@' label='Senha: ' onChange={handlePassword} value={password}/>
                <Button colorScheme='teal' variant='solid' type='submit'>
                    Cadastrar
                </Button>
                <p className='text-for-signup'>Já possui uma conta? <Link to='/entrar'><span>Faça login</span></Link></p>
            </form>
        </>
    )
}