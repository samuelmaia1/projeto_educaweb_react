import './AccBtn.css'
import {Link, useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

export default ({userName}) => {

    const navigate = useNavigate()
    const location = useLocation()

    const logOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')

        if (location.pathname == '/'){
            window.location.reload()
        } else {
            navigate('/')
        }
    }

    return (
        <Button to='/entrar' className="login-btn" onClick={logOut}>{JSON.parse(localStorage.getItem('user')).userName}</Button>
    )
}