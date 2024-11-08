import './AccBtn.css'
import {Link, useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import user from '../../assets/homem-usuario.png'
import logout from '../../assets/sair.png'
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
        <div className='container-buttons'>
            <Button>
                <img src={user} alt="my-account" />
            </Button>
            <Button onClick={logOut}>
                <img src={logout} alt="logout" />
            </Button>
        </div>
    )
}