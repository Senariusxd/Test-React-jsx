import { useState } from 'react'
import './styles/App.css'

export const Count =()=>{
        const [count, setCount]= useState(0)

        const aum =()=>{
        setCount(count + 1)
        }

        const dis =()=>{
        setCount(count - 1)
        }

        const reset =()=>{
            setCount(0)
        }
    
    return (
        <div>
            <p className='text'>La cuenta es: {count}</p>
            <div className='Counter'>
                <button className='btnState' onClick={aum}>+</button>
                <button className='btnState' onClick={dis}>-</button>
                <button className='btnState' onClick={reset}>Reset</button>
            </div>
        </div>
    )}

export const Imagen =()=>{
    const [img, setImg]= useState('/src/images/Screenshot 1.png');
    const [counter, setCount]= useState(0)

    const pass =()=> {
        setCount(counter + 1)
        
        if (counter === 0) {
            setImg ('/src/images/Screenshot 2.png');
            } 
            else if (counter === 1){
            setImg('/src/images/Screenshot 3.png')
            }
            else if (counter === 2){
                setCount(0)
            }
    }
    
    
    return (
        <div>
            <p style={{color: 'white'}}>Cuenta: {counter}</p>
            <img src={img} alt='descption'/>
            <div>
                <button className='pass' onClick={pass}>Pass</button>
            </div>
        </div>
    )}



    export default Count; Imagen;