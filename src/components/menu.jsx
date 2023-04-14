import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Menu = () => {
  const navigate = useNavigate();
  function handleHome(){
    navigate('/home');
  };
  function handleCurriculum(){
    navigate('/curriculum');
  };
  function handlePortafolio(){
    navigate('/portafolio');
  };
  return (
  <div>
      <ul className='flex'>
        <li className='menu'><button type="button" onClick={handleHome}>Home</button></li>
        <li className='menu'><button type="button" onClick={handleCurriculum}>Curriculum</button></li>
        <li className='menu'><button type="button" onClick={handlePortafolio}>Portafolio</button></li>
      </ul>
  </div>
  )
}
