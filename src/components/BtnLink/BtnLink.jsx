import { Button, ButtonGroup } from '@chakra-ui/react'

export default ({textbtn}) => {
    return (
        <>
            <a href=""><Button size='lg' className='card-btn' marginTop='5' width={300}>{textbtn}</Button></a>
        </>
    )
}