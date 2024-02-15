import React from 'react'
import Count from '../Function'
import { Imagen } from '../Function';
import contacts from './contacts'

export function Body() {
    return (
        <div>
            <div className='container' style={{display: 'flex', justifyContent: 'center', border: '1px solid #eb7100'}}>
                <div style={{padding: '50px'}}><Count  /></div>
                <div style={{padding: '50px'}}><Imagen /></div>
                
            </div>
            
            <br />
            <br />
            <p style={{color: 'red', fontSize: '20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ex voluptatem accusantium accusamus necessitatibus, 
                reiciendis eos eligendi animi distinctio et nihil beatae 
                sint assumenda asperiores cupiditate, nesciunt itaque 
                sapiente iusto iure, aliquam repellat? Sed, ratione quae? 
                Ipsa praesentium, soluta quisquam delectus voluptatum 
                deserunt consectetur totam nesciunt temporibus fuga error 
                maiores sit?</p>
            
            <div className='contacts'>
                {contacts.map(cont => (
                    <div className='cont' key={cont.id}>
                        <p>Nombre: {cont.name}</p>
                        <img style={{borderRadius: '45px'}} src={cont.imgURL} alt={cont.name} />
                        <p>Phone: {cont.phone}</p>
                        <p>Email: {cont.email}</p>
                    </div>
                ))}
            </div>

            <footer className='footer'>Hecho por Senas</footer>
        </div>
    )
}

export default Body;

