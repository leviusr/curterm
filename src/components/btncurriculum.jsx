import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "./menu";

export const Btncurriculum = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/curriculum");
  }
  return (
    <button type="button" className="boton" onClick={handleClick}>
      Curriculum
    </button>
  );
};
