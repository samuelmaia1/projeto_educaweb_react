import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import Navbar from '../components/Navbar/Navbar'
import Logo from '../components/Logo/Logo'
import LoginBtn from "../components/LoginBtn/LoginBtn"

export default() => {
    const urlParams = new URLSearchParams(window.location.search)
    const courseId = urlParams.get('idCurso')
    const urlCursos = 'http://localhost:3000/courses'

    const [courses, setCourses] = useState([])
    const [course, setCourse] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadCourses = async () => {
            try{
                const response = await axios.get(urlCursos)
                setCourses(response.data)
                const foundCourse = response.data.find(c => c.id == courseId)
                if (foundCourse){
                    setCourse(foundCourse)          
                }
                setLoading(false)
            }
            catch (error){
                console.error('Erro ao carregar curso: ', error)
            }
        }

        loadCourses()
    }, [courseId])

    if(loading){
        return <h1>Carregando...</h1>
    }

    return (
        <>
           <header className='header'>
                <Logo/>
                <Navbar/>
                <LoginBtn/>
            </header>
            <h1>Bem vindo ao curso de {course.name}</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/FdePtO5JSd0?si=zFwfnbCsOORT6I30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </>
    )
}