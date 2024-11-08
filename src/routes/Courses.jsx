import Navbar from "../components/Navbar/Navbar"
import Logo from '../components/Logo/Logo'
import LoginBtn from "../components/LoginBtn/LoginBtn"
import axios from 'axios'
import {useEffect} from 'react'
import {useState} from 'react'
import CourseCard from "../components/CourseCard/CourseCard"
import './Courses.css'
import InputFormSignup from "../components/InputFormSignup/InputFormSignup"
import { Button } from "@chakra-ui/react"
import { ButtonGroup } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import {Spinner} from "../components/Spinner/Spinner"
import AccBtn from '../components/AccBtn/AccBtn'
import { Header } from "../components/Header/Header"
import { useValidateUser } from "../hooks/useValidateUser"

export default () => {

    const navigate = useNavigate()

    const url = import.meta.env.VITE_API_URL

    const [pesquisa, setPesquisa] = useState('')

    const [filtered, setFiltered] = useState(false)

    const [filteredList, setFilteredList] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    const [isValidToken, setIsValidToken] = useState(false)

    const handlePesquisa = (e) => {
        setPesquisa(e.target.value)
    }

    const formSubmit = (e) => {
        e.preventDefault()
        setFiltered(true)
        setFilteredList(courses.filter((course) => course.name.toLowerCase().includes(pesquisa.toLowerCase()) || course.description.toLowerCase().includes(pesquisa.toLowerCase())))
    }

    const [courses, setCourses] = useState([])

    useEffect(()=> {

        const fetchData = async () => {
            const token = localStorage.getItem('token')

            if (!token) {
                alert('Faça login para visualizar os cursos')
                navigate('/entrar')
            }

            useValidateUser()

            const loadCourses = async() => {
                try {
                    const response = await axios.get(url + 'course', {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    setIsLoading(false)
                    setCourses(response.data)
                } catch (error) {
                    if (error.response && error.response.status == 401){
                        alert('Sua sessão expirou, faça login novamente.')
                        navigate('/entrar')
                    } else {
                        console.error('Erro ao carregar cursos: ', error)
                    }
                }
                
            }

            loadCourses()
        }

        fetchData()

        
    }, [courses])

    return (
        <>
            <Header/>

            <form onSubmit={formSubmit}>
                <div className="container-form">
                    <InputFormSignup name='pesquisa' placeholder='Pesquisar curso' label='Pesquisar: ' onChange={handlePesquisa}/>
                    <Button type="submit" colorScheme="teal">Pesquisar</Button>
                </div>
            </form>

            <div className="container-card-courses">
                {
                    !isLoading? (
                        !filtered? courses?.map((course) => {
                            return (
                                <div key={course.id}>
                                    <CourseCard textbtn='Ir para curso' title={course.name} text={course.description} courseId={course.id}/>
                                </div>
                            )
                        }) : filteredList?.map((course) => {
                            return (
                                <div key={course.id}>
                                    <CourseCard textbtn='Ir para curso' title={course.name} text={course.description} courseId={course.id}/>
                                </div>
                            )
                        })
                    ):(
                        <Spinner/>
                    )
                }
            </div>
        </>
    )
}
