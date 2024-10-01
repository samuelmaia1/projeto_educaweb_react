export function useCreateCourse({course, user, token}){

    const url = import.meta.env.VITE_API_URL

    const create = async () => {
        const response = await fetch(url + `course/register/` + user.userId, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body:JSON.stringify(course)
        })
    
        if (response.status === 201) alert('Curso criado com sucesso!')
    }

    create()
}