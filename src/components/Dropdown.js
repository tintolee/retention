import React, {useState} from 'react'
import './Dropdown.css';
import { NavLink  } from 'react-router-dom';


export default function Dropdown({data}) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
       
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}

      >
        {data.map((item) => {
          return (
            <div>
            <li key={item.id}
            
            >
              <NavLink
                className='dropdown-link'
                  to={`/${item.name}`}
                onClick={() => setClick(false)} 
              >
                
                {item.name}
               
              </NavLink>
            </li>
            </div>
          );
        })}
      </ul>
     
    </>
  );
}


