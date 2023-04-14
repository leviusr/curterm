import React from "react";
import { Menu } from "../components/menu";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

export const Portafolio = () => {
  const navigate = useNavigate()
  function handleClick() {
    navigate('/menumovil')
  }
  return (
    <div>
      <div className="hidden sm:flex w-screen justify-center items-center">
        <Menu />
      </div>
      <button className="p-3 text-xl  sm:hidden" tye="button" onClick={handleClick}><AiOutlineMenu />
      </button>
      <div className="text-center text-5xl bg-primary">portafolio</div>
    </div>
  )
};
