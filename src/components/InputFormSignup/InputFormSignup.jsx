import { Input } from '@chakra-ui/react'
import './InputFormSignup.css'


export default ({placeholder,name,onChange, label, value, type}) => {
    return (
        <>
            <div className="container-input">
                <label>{label}</label>
                <Input 
                    variant='filled' 
                    className='input-form' 
                    name={name} 
                    placeholder={placeholder} 
                    onChange={onChange} 
                    label={label} 
                    value={value} 
                    type={type} 
                />
            </div>
        </>
    )
    
}