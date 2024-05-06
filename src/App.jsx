import { useState } from 'react'
import './App.css'
import Logo from './components/Logo/Logo.jsx'
import { Button, ButtonGroup } from '@chakra-ui/react'
import Navbar from './components/Navbar/Navbar.jsx'
import LoginBtn from './components/LoginBtn/LoginBtn.jsx'
import GradientText from './components/GradientText/GradientText.jsx'
import Card from './components/Card/Card.jsx'
import BtnLink from './components/BtnLink/BtnLink.jsx'
import { Box } from '@chakra-ui/react'
import {Link} from 'react-router-dom'

function App() {

  const url = ''

  return (
    <>
      <header className='header'>
        <Logo/>
        <Navbar/>
        <LoginBtn/>
      </header>

      <main className="main-content">
        <h1 className="main-title">
          Transformando vidas através da educação e <GradientText text='tecnologia'/>
        </h1>
        <p className="main-text">
          Diversos cursos online para <GradientText text='</transformar>'/> sua carreira e sua vida!
        </p>

        <Box className='container-card'>
          <Card title='Excel' text='Desenvolva a capacidade de criar planilhas incríveis e dinâmicas para se destacar nas vagas!' textbtn='Conhecer curso'/> 
          <Card title='JavaScript' text='Desenvolva funcionalidades incríveis para implementar no seu site e deixá-lo muito mais dinâmico' textbtn='Conhecer curso'/> 
          <Card title='HTML e CSS' text='Dê seus primeiros sites na construção de sites incríveis, com uma gama de estilos e animações' textbtn='Conhecer curso'/> 
          <Card title='SQL' text='Armazene, trate e gerencie grandes volumes de dados, criando DataBases SQL para aplicações.' textbtn='Conhecer curso'/> 
        </Box>

        <Box display='flex' gap='100' justifyContent='center' marginTop='20'>
          <Link to='/entrar'>
            <BtnLink textbtn='Entrar'/>
          </Link>
          <Link to='/cadastro'>
            <BtnLink textbtn='Cadastre-se'/>
          </Link>
        </Box>
      </main>
    </>
  )
}

export default App
