import React from 'react'
import { ImageData } from '../Images.'
import { NavLink  } from 'react-router-dom';
export default function NavbarImages() {

  
  return (
    <div >
      {ImageData.map((item)=>{
        return (
<NavLink  to={`/${item.name}`} >
<img key={item.id}src={item.image} alt='img'/>
</NavLink>
         
          
        )
        
      })}
      
    </div>
  )
  
}
