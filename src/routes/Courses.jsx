import Navbar from "../components/Navbar/Navbar"
import Logo from '../components/Logo/Logo'
import LoginBtn from "../components/LoginBtn/LoginBtn"
import axios from 'axios'
import {useEffect} from 'react'
import {useState} from 'react'
import CourseCard from "../components/CourseCard/CourseCard"
import './Courses.css'

export default () => {

    const url = 'http://localhost:3000/courses'

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

            <div className="container-card-courses">
                {
                    courses?.map((course) => {
                        return (
                            <>
                                <CourseCard textbtn='Ir para curso' title={course.name} text={course.description}/>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
