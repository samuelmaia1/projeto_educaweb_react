import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Logo from './components/Logo/Logo.jsx'
import { Button, ButtonGroup } from '@chakra-ui/react'
import Navbar from './components/Navbar/Navbar.jsx'
import LoginBtn from './components/LoginBtn/LoginBtn.jsx'
import GradientText from './components/GradientText/GradientText.jsx'
import Card from './components/Card/Card.jsx'
import BtnLink from './components/BtnLink/BtnLink.jsx'
import { Box } from '@chakra-ui/react'
import {Link, useNavigate} from 'react-router-dom'
import AccBtn from './components/AccBtn/AccBtn.jsx'
import { Header } from './components/Header/Header.jsx'

function App() {

  const url = import.meta.env.VITE_API_URL

  const [validToken, setValidToken] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {

    const validToken = async() => {
      try {
        const token = localStorage.getItem('token')

        if (!token) {
          return 
        }

        const response = await axios.post(url + 'auth/validatetoken',{}, {
          headers: {
              'Authorization': `Bearer ${token}`
          }
        })

        console.log(response.data)

        if (response.status == 200){
          setValidToken(true)
        }
      } catch (error) {
        console.error(error)
      }
    }

    validToken()

  }, [validToken])

  return (
    <>

      <Header/>

      <main className="main-content">
        <h1 className="main-title">
          Transformando vidas através da educação e <GradientText text='tecnologia'/>
        </h1>
        <p className="main-text">
          Diversos cursos online para <GradientText text='</transformar>'/> sua carreira e sua vida!
        </p>

        <Box className='container-card'>
          <Card title='Cursos gratuitos' text='Desenvolva sua carreira adquindo conhecimentos com nossos cursos 100% gratuitos!' textbtn='Conhecer cursos' path='/cursos'/> 
          <Card title='Ofertas de emprego' text='Enconte ótimas oportunidades para entrar no mercado de trabalho e alcançar seu sucesso!' textbtn='Encontrar vagas'/> 
          <Card title='Seja voluntário' text='Se seu sonho (assim como o nosso) é compartilhar conhecimento e contribuir, este é o lugar certo para isso!' textbtn='Professor voluntário' to='/cadastro'/> 
          <Card title='Aumente a família' text='Publique vagas de emprego e entre em contato com os candidatos, um a mais na família é sempre bom!' textbtn='Publicar vaga' to='/cadastro'/> 
        </Box>

        {
          !validToken? (
            <Box display='flex' gap='100' justifyContent='center' marginTop='20'>
              <Link to='/entrar'>
                <BtnLink textbtn='Entrar'/>
              </Link>
              <Link to='/cadastro'>
                <BtnLink textbtn='Cadastre-se'/>
              </Link>
            </Box>
          ) : (
            <Box display='flex' gap='100' justifyContent='center' marginTop='20'>
              <BtnLink textbtn='Acessar cursos'></BtnLink>
              <BtnLink textbtn='Acessar vagas'></BtnLink>
            </Box>
          )
        }

        
      </main>
    </>
  )
}

export default App
