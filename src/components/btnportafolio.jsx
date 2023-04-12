import React from "react";
import { useNavigate } from "react-router-dom";

export const Btnportafolio = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/portafolio");
  }
  return (
    <div>
      <button type="button" className="boton" onClick={handleClick}>
        Portafolio
      </button>
    </div>
  );
};
