import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import Navbar from '../components/Navbar/Navbar'
import Logo from '../components/Logo/Logo'
import LoginBtn from "../components/LoginBtn/LoginBtn"
import { useSearchParams } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { Spinner } from "../components/Spinner/Spinner"
import { Link } from "react-router-dom"
import './CoursePage.css'
import { Button } from "@chakra-ui/react"

export default() => {
    const [searchParams] = useSearchParams()
    const courseId = searchParams.get('idCurso')

    const url = import.meta.env.VITE_API_URL

    const [course, setCourse] = useState({})
    const [loading, setLoading] = useState(true)
    const [videoId, setVideoId] = useState('')

    const token = localStorage.getItem('token')

    useEffect(() => {
        const loadCourse = async () => {
            try{
                const response = await axios.get(url + 'course/' + courseId, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                
                const course = response.data

                console.log(course)

                if (course){
                    setCourse(course)  
                    setVideoId(getVideoId(course.url))
                    setLoading(false)
                }
            }
            catch (error){
                console.error('Erro ao carregar curso: ', error)
            }
        }

        loadCourse()
    }, [courseId])

    const getVideoId = (url) => {
        if (url.includes('watch?v=')){
            const parts = url.split('watch?v=')
            if (parts.length > 1){
                return parts[1].substring(0, 11)
            }
            return null
        }

        if (url.includes('youtu.be/'))
        {
            const parts = url.split('youtu.be/')
            if (parts.length > 1){
                return parts[1].substring(0, 11)
            }
            return null
        }

        if (url.includes('embed/')){
            const parts = url.split('embed/')
            if (parts.length > 1){
                return parts[1].substring(0, 11)
            }
            return null
        }
        return null
    }

    return (
        <>
           <Header/>
           {
            loading? 
                <Spinner/> : 
                <>
                    <h1 className="title-video">Bem vindo ao curso de {course.name}</h1>
                    <div className="container-principal">
                        <iframe 
                        width="840" 
                        height="473" 
                        src={`https://www.youtube.com/embed/${videoId}`} 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                        </iframe>
                        <div className="info">
                            <h2 className="instructor-name"><span className="span-strong">Professor:</span> {course.instructor.name}</h2>
                            <p>Descrição: {course.description}</p>
                            <p>Categoria: {course.category}</p>
                            <p>Assistir no YouTube: <a href={course.url} target="_blank">Acessar</a></p>
                            <Button colorScheme="teal" className="btn-concluido">Concluído ✅</Button>
                        </div>
                    </div>
                </>
           }
            
        </>
    )
}