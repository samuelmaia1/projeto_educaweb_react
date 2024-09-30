import { Card, CardHeader, CardBody, CardFooter, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import './Card.css'
export default ({title, text, textbtn, path}) => {
    return (
        <>
            <Card className='card' width={350} title={title} display='flex' justifyContent='center' alignItems='center' flexDir='column'>
                <CardHeader p='4'>
                    <Heading className='card-title' size='md'>{title}</Heading>
                </CardHeader>

                <CardBody display='flex' justifyContent='center' alignItems='center' flexDir='column'>
                    <p>{text}</p>
                    <Button size='md' className='card-btn' marginTop='5'>
                        <Link to={path}>{textbtn}</Link>
                    </Button>
                </CardBody>

            </Card>
        </>
    )
}