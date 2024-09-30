import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import Navbar from '../components/Navbar/Navbar'
import Logo from '../components/Logo/Logo'
import LoginBtn from "../components/LoginBtn/LoginBtn"
import { useSearchParams } from "react-router-dom"
import { Header } from "../components/Header/Header"

export default() => {
    const [searchParams] = useSearchParams()
    const courseId = searchParams.get('idCurso')

    const url = import.meta.env.VITE_API_URL

    const [courses, setCourses] = useState([])
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
                }
            }
            catch (error){
                console.error('Erro ao carregar curso: ', error)
            }
        }

        loadCourse()
    }, [courseId])

    const getVideoId = (url) => {
        const parts = url.split('watch?v=')
        if (parts.length > 1){
            return parts[1].substring(0, 11)
        }
        return null
    }

    return (
        <>
           <Header/>
            <h1>Bem vindo ao curso de {course.name}</h1>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </>
    )
}