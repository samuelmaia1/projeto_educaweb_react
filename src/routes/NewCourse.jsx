import { Button, FormLabel, Input, Select, Textarea } from "@chakra-ui/react";
import { Header } from "../components/Header/Header";
//import InputFormSignup from "../components/InputFormSignup/InputFormSignup";
import axios from "axios";
import { useEffect, useState } from "react";
import './NewCourse.css'
import imagem from '../assets/pessoas-lendo-livros-para-ilustracao-vetorial-de-estudo_74855-4807.avif'
import { useNavigate } from "react-router-dom";
import { useValidateUser } from "../hooks/useValidateUser";
import { useCreateCourse } from "../hooks/useCreateCourse";
// import { Textarea } from "@chakra-ui/react";

export function NewCourse(){

    const navigate = useNavigate()

    const token = localStorage.getItem('token')

    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {   
        if (!token || !user) {
            alert('Faça login para continuar.')
            navigate('/entrar')
        }

        useValidateUser()

    })

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

        const course = {
            name: state.name,
            description: state.description,
            url: state.url,
            category: state.category
        }

        if (useValidateUser()){
            useCreateCourse({course, user, token})
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
                        <Input isRequired={true} placeholder={'Curso de JavaScript'} name={'name'} value={state.name} onChange={handleChange} className='input' variant='filled'/>
                    </div>
                    <div className="container-input-form">
                        <FormLabel>Categoria</FormLabel>
                        <Select isRequired={true} placeholder={'Selecione uma categoria'} name={'category'} value={state.category} onChange={handleChange} className='input' variant='filled'>
                            <option value="Desenvolvimento">Desenvolvimento</option>
                            <option value="Finanças">Finanças</option>
                            <option value="Ensino Médio">Ensino Médio</option>
                            <option value="Segurança">Segurança</option>
                            <option value="Office">Office</option>
                        </Select>
                    </div>
                    <div className="container-input-form">
                        <FormLabel>Descrição</FormLabel>
                        <Textarea isRequired={true} placeholder={'Curso de JavaScript para iniciantes'} name={'description'} value={state.description} onChange={handleChange} className='input' variant='filled'/>
                    </div>
                    <div className="container-input-form">
                        <FormLabel>URL</FormLabel>
                        <Input isRequired={true} placeholder={'www.youtube.com/...'}  name={'url'} value={state.url} onChange={handleChange} className='input' variant='filled'/>
                    </div>
                    <Button colorScheme="teal" type="submit">Criar curso 🚀</Button>
                </form>
                <img src={imagem} alt="" />

            </main>
        </>
    )
}