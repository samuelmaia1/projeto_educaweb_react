import { Button, FormLabel, Input } from "@chakra-ui/react";
import { Header } from "../components/Header/Header";
//import InputFormSignup from "../components/InputFormSignup/InputFormSignup";
import axios from "axios";
import { useEffect, useState } from "react";
import './NewCourse.css'
import imagem from '../assets/pessoas-lendo-livros-para-ilustracao-vetorial-de-estudo_74855-4807.avif'
import { useNavigate } from "react-router-dom";

export function NewCourse(){

    const navigate = useNavigate()

    const url = import.meta.env.VITE_API_URL

    const token = localStorage.getItem('token')

    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {   
        if (!token || !user) {
            alert('Faça login para continuar.')
            navigate('/entrar')
        }

        validateUser()

    })

    const validateUser = async () => {
        try{
            const response = await axios.post(url + 'auth/validatetoken',{}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            if (response.status === 200) return true
        } catch (error){
            alert("Login expirado, faça login novamente.")
            navigate('/entrar')
        }
    }

    const [state, setState] = useState({
        name: '',
        url: '',
        category: '',
        description: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const formSubmit = async (e) => {
        e.preventDefault()

        if (validateUser()){
            const response = await fetch(url + `course/register/` + user.userId, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body:JSON.stringify({
                    name: state.name,
                    description: state.description,
                    url: state.url,
                    category: state.category
                })
            })

            if (response.status === 201) alert('Curso criado com sucesso!')
        }
    }

    return (
        <>
            <Header/>

            <h1 className="principal-title">Inspire uma nova geração! 📚</h1>

            <main className="principal-content">
                
                <form onSubmit={formSubmit}>
                    <div className="container-input-form">
                        <FormLabel>Título do curso</FormLabel>
                        <Input placeholder={'Curso de JavaScript'} name={'name'} value={state.name} onChange={handleChange} className='input' variant='filled'/>
                    </div>
                    <div className="container-input-form">
                        <FormLabel>Categoria</FormLabel>
                        <Input placeholder={'Desenvolvimento'} name={'category'} value={state.category} onChange={handleChange} className='input' variant='filled'/>
                    </div>
                    <div className="container-input-form">
                        <FormLabel>Descrição</FormLabel>
                        <Input placeholder={'Curso de JavaScript para iniciantes'} name={'description'} value={state.description} onChange={handleChange} className='input' variant='filled'/>
                    </div>
                    <div className="container-input-form">
                        <FormLabel>URL</FormLabel>
                        <Input placeholder={'www.youtube.com/...'}  name={'url'} value={state.url} onChange={handleChange} className='input' variant='filled'/>
                    </div>
                    <Button colorScheme="teal" type="submit">Criar curso 🚀</Button>
                </form>
                <img src={imagem} alt="" />

            </main>
        </>
    )
}