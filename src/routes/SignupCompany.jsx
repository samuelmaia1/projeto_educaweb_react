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

    const url = 'http://localhost:3000/companies'

    const [companyName, setCompanyName] = useState('')
    const [branch, setBranch] = useState('')
    const [email, setEmail] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [password, setPassword] = useState('')

    function handleCompanyName(e) {
        setCompanyName(e.target.value)
    }

    function handleBranch(e) {
        setBranch(e.target.value)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handleCnpj(e) {
        setCnpj(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    async function formSubmit(e) {
        e.preventDefault()

        await axios.post(url, {
            companyName,
            branch,
            email,
            cnpj,
            password
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
                <InputFormSignup name='companyname' placeholder='Minha Empresa Ltda.' label='Nome da empresa: ' onChange={handleCompanyName}/> 
                <InputFormSignup name='branch' placeholder='Tecnologia' label='Ramo: ' onChange={handleBranch}/> 
                <InputFormSignup name='email' placeholder='minhaempresa@email.com' label='E-mail: ' onChange={handleEmail}/>
                <InputFormSignup name='cnpj' placeholder='XX. XXX. XXX/0001-XX' label='CNPJ: ' onChange={handleCnpj}/>
                <InputFormSignup name='password' placeholder='minhasenha123' label='Senha: ' onChange={handlePassword}/>
                <Button colorScheme='teal' variant='solid' type='submit'>
                    Cadastrar
                </Button>
                <p className='text-for-signup'>Já possui uma conta? <Link to='/entrar'><span>Faça login</span></Link></p>
            </form>
        </>
    )
}