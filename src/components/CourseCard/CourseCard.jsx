import { Card, CardHeader, CardBody, CardFooter, Heading } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default ({title, text, textbtn, courseId}) => {
    const urlDestino = `/cursos/curso?idCurso=${courseId}`
    return (
        <>
            <Card className='card' width={350} minHeight={220} title={title} display='flex' justifyContent='center' alignItems='center' flexDir='column' courseId={courseId} position='relative'>
                <CardHeader p='4'>
                    <Heading className='card-title' size='md' maxWidth="100%" style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                    }}>{title}</Heading>
                </CardHeader>

                <CardBody display='flex' justifyContent='start' alignItems='center' flexDir='column'>
                    <p className='card-description' style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>{text}</p>
                    
                </CardBody>

                <Box position='absolute' bottom='1.75rem'>
                    <Link to={urlDestino}>
                        <Button size='md' marginTop='5' colorScheme='teal'>{textbtn}</Button>
                    </Link>
                </Box>

            </Card>
        </>
    )
}