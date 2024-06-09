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

export default () => {

    const url = 'http://localhost:3000/courses'

    const [pesquisa, setPesquisa] = useState('')

    const [filtered, setFiltered] = useState(false)

    const [filteredList, setFilteredList] = useState([])

    const handlePesquisa = (e) => {
        setPesquisa(e.target.value)
    }

    const formSubmit = (e) => {
        e.preventDefault()
        setFiltered(true)
        setFilteredList(courses.filter((course) => course.name.toLowerCase().includes(pesquisa.toLowerCase()) || course.description.toLowerCase().includes(pesquisa.toLowerCase())))
        // setCourses((prevCourses) => prevCourses.filter((course) => course.name.toLowerCase().includes(pesquisa.toLowerCase()) || course.description.toLowerCase().includes(pesquisa.toLowerCase())))
    }

    const [courses, setCourses] = useState([])

    useEffect(()=> {
        const loadCourses = async() => {
            const response = await axios.get(url)
            setCourses(response.data)
        }

        loadCourses()
    }, [])

    return (
        <>
            <header className="header">
                <Logo/>
                <Navbar/>
                <LoginBtn/>
            </header>

            <h1 className="title-courses-page">Nossos cursos</h1>

            <form onSubmit={formSubmit}>
                <div className="container-form">
                    <InputFormSignup name='pesquisa' placeholder='Digite sua pesquisa' label='Pesquisar: ' onChange={handlePesquisa}/>
                    <Button type="submit" colorScheme="teal">Pesquisar</Button>
                </div>
            </form>

            <div className="container-card-courses">
                {
                    !filtered? courses?.map((course) => {
                        return (
                            <div key={course.id}>
                                <CourseCard textbtn='Ir para curso' title={course.name} text={course.description} courseId={course.id}/>
                            </div>
                        )
                    }) : filteredList.map((course) => {
                        return (
                            <div key={course.id}>
                                <CourseCard textbtn='Ir para curso' title={course.name} text={course.description} courseId={course.id}/>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
