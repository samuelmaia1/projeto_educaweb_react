import { Card, CardHeader, CardBody, CardFooter, Heading } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default ({title, text, textbtn, courseId}) => {
    const urlDestino = `/cursos/curso?idCurso=${courseId}`
    return (
        <>
            <Card className='card' width={350} title={title} display='flex' justifyContent='center' alignItems='center' flexDir='column' courseId={courseId}>
                <CardHeader p='4'>
                    <Heading className='card-title' size='md'>{title}</Heading>
                </CardHeader>

                <CardBody display='flex' justifyContent='center' alignItems='center' flexDir='column'>
                    <p>{text}</p>
                    <Link to={urlDestino}>
                        <Button size='md' marginTop='5' colorScheme='teal'>{textbtn}</Button>
                    </Link>
                </CardBody>

            </Card>
        </>
    )
}