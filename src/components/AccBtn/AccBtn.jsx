import './AccBtn.css'
import {Link} from 'react-router-dom'

export default ({userName}) => {
    return (
        <Link to='/entrar' className="login-btn">{userName}</Link>
    )
}