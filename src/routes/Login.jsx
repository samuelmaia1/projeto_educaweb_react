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

    const apiUrl = import.meta.env.VITE_API_URL

    const navigate = useNavigate()

    const [loginUserName , setLoginUserName] = useState('')
    const [loginPass , setLoginPass] = useState('')
    const [selectedOption, setSelectedOption] = useState('student')

    const options = [
        {value: 'student', label: 'Aluno'},
        {value: 'instructor', label: 'Professor'},
        {value: 'company', label: 'Empresa'}
    ]

    const handleLoginUserName = (e) => {
        setLoginUserName(e.target.value)
    }

    const handleLoginPass = (e) => {
        setLoginPass(e.target.value)
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        setSelectedOption(e.target.value)
    }

    const loginSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(apiUrl + `${selectedOption}/login`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                login: loginUserName,
                password: loginPass
            })
        })

        const data = await response.json()

        localStorage.setItem('token', data.token)

        console.log(data)

        if (data.ok){
            navigate('/cursos')
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
                <select name="type-login" id="" value={selectedOption} onChange={handleChange}>
                    {
                        options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))
                    }
                </select>
                <Button colorScheme='teal' variant='solid' type='submit'>
                    Entrar
                </Button>
                
                <p className='text-for-signup'>Não possui uma conta? <Link to='/cadastro'><span>Cadastre-se</span></Link></p>
            </form>

        </>
    )
}