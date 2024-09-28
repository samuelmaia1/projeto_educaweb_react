import Logo from "../Logo/Logo"
import Navbar from "../Navbar/Navbar"
import LoginBtn from "../LoginBtn/LoginBtn"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import AccBtn from "../AccBtn/AccBtn"

export function Header(){

    const url = import.meta.env.VITE_API_URL

    const [validToken, setValidToken] = useState(false)

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
    
            console.log(response.data)
    
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
                <Navbar/>
                {
                    !validToken? <LoginBtn/> : <AccBtn userName='Minha conta'></AccBtn>
                }
            </header>
        </>
    )
}