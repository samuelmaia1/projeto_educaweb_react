import {useState} from 'react'
import Navbar from '../components/Navbar/Navbar'
import Logo from '../components/Logo/Logo'
import LoginBtn  from '../components/LoginBtn/LoginBtn'
import InputFormSignup from '../components/InputFormSignup/InputFormSignup'
import {Button} from '@chakra-ui/react'
import axios from 'axios'
import './Signup.css'
import {Link} from 'react-router-dom'
import { Spinner } from '../components/Spinner/Spinner'

export default () => {

    const url = 'http://localhost:8081/api/services/cep/'

    const urlRegister = 'http://localhost:8081/api/company/register'

    const [companyName, setCompanyName] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [neighborhood, setNeighborhood] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [cep, setCep] = useState('')
    const [password, setPassword] = useState('')
    const [loadingCep, setLoadingCep] = useState(false)

    function handleCompanyName(e) {
        setCompanyName(e.target.value)
    }

    function handleState(e) {
        setState(e.target.value)
    }

    function handleCity(e){
        setCity(e.target.value)
    }

    function handleNeighborhood(e){
        setNeighborhood(e.target.value)
    }

    function handleAddress(e){
        setAddress(e.target.value)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handleCep(e) {
        const inputValue = e.target.value
        if (inputValue.length <= 8){
            setCep(e.target.value)
        }
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    async function validCep(e) {
        e.preventDefault()
        setLoadingCep(true)
        try {
            const response = await axios.get(url + cep)

            const data = response.data

            console.log(response.data)

            if (response.status === 200){
                setState(data.estado)
                setAddress(data.logradouro)
                setCity(data.localidade)
                setNeighborhood(data.bairro)
            }

            setLoadingCep(false)
        } catch (error) {
            if (error.response.status === 404){
                alert(`CEP ${cep} não encontrado.`)
            }
            setLoadingCep(false)
        }
    }

    async function formSubmit(){
        const response = await axios.post(urlRegister, {
            name: companyName,
            email: email,
            state: state,
            city: city,
            address: address,
            password: password
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
                <InputFormSignup name='companyname' placeholder='Minha Empresa Ltda.' label='Nome da empresa: ' onChange={handleCompanyName} value={companyName}/> 
                <InputFormSignup name='email' placeholder='minhaempresa@email.com' label='E-mail: ' onChange={handleEmail} value={email}/>
                <div className="div-cep">
                    <div className="cep">
                        <InputFormSignup name='cep' placeholder='xxxxxxxx' label='CEP (Apenas números): ' onChange={handleCep} type="number" value={cep}/>
                        <Button colorScheme='green' onClick={validCep}>Validar CEP</Button>
                        {loadingCep? <Spinner/> : <></> }
                        
                    </div>
                </div>
                <InputFormSignup name='state' placeholder='São Paulo' label='Estado: ' onChange={handleState} value={state}/> 
                <InputFormSignup name='city' placeholder='São Paulo' label='Cidade: ' onChange={handleCity} value={city}/> 
                <InputFormSignup name='neighborhood' placeholder='Sé' label='Bairro: ' onChange={handleNeighborhood} value={neighborhood}/> 
                <InputFormSignup name='address' placeholder='Praça da sé' label='Rua: ' onChange={handleAddress} value={address}/> 
                <InputFormSignup name='password' placeholder='minhasenha123' label='Senha: ' onChange={handlePassword} type="password" value={password}/>
                <Button colorScheme='teal' variant='solid' type='submit'>
                    Cadastrar
                </Button>
                <p className='text-for-signup'>Já possui uma conta? <Link to='/entrar'><span>Faça login</span></Link></p>
            </form>
        </>
    )
}