import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Menumovil = () => {
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
  <div className=''>
      <ul className='fixed bg-blue-300 w-screen h-screen top 0 items-center justify-center flex flex-col p-2 text-3xl'>
        <li className='menu flex'><button type="button" onClick={handleHome}>Home</button></li>
        <li className='menu flex'><button type="button" onClick={handleCurriculum}>Curriculum</button></li>
        <li className='menu flex'><button type="button" onClick={handlePortafolio}>Portafolio</button></li>
      </ul>
  </div>
  )
}
