import React from "react";
import { useNavigate } from "react-router-dom";

export const Btnhome = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/Home");
  }
  return (
    <div>
      <button type="button" className="boton" onClick={handleClick}>
        Home
      </button>
    </div>
  );
};
