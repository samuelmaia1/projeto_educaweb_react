import axios from "axios"

export async function useValidateUser() {

    const url = import.meta.env.VITE_API_URL

    const token = localStorage.getItem('token')

    try{
        const response = await axios.post(url + 'auth/validatetoken',{}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (response.status === 200) return true
    } catch (error){
        alert("Login expirado, faça login novamente.")
        navigate('/entrar')
    }
}