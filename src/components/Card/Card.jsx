import { Card, CardHeader, CardBody, CardFooter, Heading } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import './Card.css'
export default ({title, text, textbtn}) => {
    return (
        <>
            <Card className='card' width={350} title={title} display='flex' justifyContent='center' alignItems='center' flexDir='column'>
                <CardHeader p='4'>
                    <Heading className='card-title' size='md'>{title}</Heading>
                </CardHeader>

                <CardBody display='flex' justifyContent='center' alignItems='center' flexDir='column'>
                    <p>{text}</p>
                    <Button size='md' className='card-btn' marginTop='5'>{textbtn}</Button>
                </CardBody>

            </Card>
        </>
    )
}