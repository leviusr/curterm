import React from "react";
import { Btncurriculum } from "./btncurriculum";
import { Btnportafolio } from "./btnportafolio";

export const Section = () => {
  return (
    <section className=" flex-col bg-suave w-screen h-80 sm:h-[400px]">
      <div className="h-[60%] sm:h-[90%] flex justify-center items-center sm:pt-5 bg-suave">
        <div className=" bg-pink-100 border-2 border-fuerte items-center justify-center h-[90%] w-[50%] rounded-full image
          sm:h-[350px] sm:w-[350px]"></div>
      </div>

      {/*Botones en mobile*/}
      <div className="flex-col  w-screen h-[40%] sm:hidden">
        <div className="justify-center  w-screen m-auto flex p-1 px-5"><Btncurriculum className="w-full flex"/>   </div>
        <div className=" h-1/2 text-center pt-2 px-5"><Btnportafolio  /></div>
      </div>

      {/*Botones en Escritorio*/}
      <div className="hidden sm:flex sm:w-screen sm:justify-between sm:h-auto :pb-5">
        <div className="w-1/2 px-20"><Btncurriculum /></div>
        <div className="w-1/2 px-20"><Btnportafolio /></div>
      </div>
    </section>
  );
};
