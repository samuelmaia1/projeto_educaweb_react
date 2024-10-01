import Logo from "../Logo/Logo"
import Navbar from "../Navbar/Navbar"
import LoginBtn from "../LoginBtn/LoginBtn"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import AccBtn from "../AccBtn/AccBtn"
import {InstructorHeader} from "../InstructorHeader/InstructorHeader"
import {StudentHeader} from '../StudentHeader/StudentHeader'

export function Header(){

    const url = import.meta.env.VITE_API_URL

    const [validToken, setValidToken] = useState(false)

    let user = JSON.parse(localStorage.getItem('user'))

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
    
            if (response.status == 200){
              setValidToken(true)
            }
          } catch (error) {
            console.error(error)
          }
        }
    
        validToken()
    
      }, [])

    return (
        <>
            <header className="header">
                <Logo/>
                {
                  user && user.role === 'INSTRUCTOR' &&
                  <>
                    <InstructorHeader/>
                  </>
                }
                {
                  user && user.role === 'STUDENT' &&
                  <>
                    <StudentHeader/>
                  </>
                }
                {
                  !user && <Navbar/>
                }
                {
                    !validToken? <LoginBtn/> : <AccBtn userName='Minha conta'></AccBtn>
                }
            </header>
        </>
    )
}