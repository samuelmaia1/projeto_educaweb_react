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

    const url = 'http://localhost:3000/teachers'

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [skills, setSkills] = useState('')
    const [password, setPassword] = useState('')

    const handleFirstname = (e) => {
        setFirstname(e.target.value)
    }      

    const handleLastname = (e) => {
        setLastname(e.target.value)
    }
        
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }       

    const handleSkills = (e) => {
        setSkills(e.target.value)
    }
        
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    
    const formSubmit = async (e) => {
        e.preventDefault()

        await axios.post(url, {
            firstname,
            lastname,   
            email,
            skills,
            password,
        })
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
                <Link to='/cadastro/aluno'><Button>Aluno</Button></Link>
                <Link to='/cadastro/professor'><Button>Professor</Button></Link>
                <Link to='/cadastro/empresa'><Button>Empresa</Button></Link>
            </div>

            <form onSubmit={formSubmit}>
                <h2 className='form-title'>Cadastre-se</h2>
                <InputFormSignup name='firstname' placeholder='Fulano' label='Nome: ' onChange={handleFirstname}/> 
                <InputFormSignup name='lastname' placeholder='Da Silva' label='Sobrenome: ' onChange={handleLastname}/> 
                <InputFormSignup name='email' placeholder='fulano@email.com' label='E-mail: ' onChange={handleEmail}/>
                <InputFormSignup name='skills' placeholder='Banco de dados SQL, Python...' label='Habilidades: ' onChange={handleSkills}/>
                <InputFormSignup name='password' placeholder='fulano1234@' label='Senha: ' onChange={handlePassword}/>
                <Button colorScheme='teal' variant='solid' type='submit'>
                    Cadastrar
                </Button>
                <p className='text-for-signup'>Já possui uma conta? <Link to='/entrar'><span>Faça login</span></Link></p>
            </form>
        </>
    )
}