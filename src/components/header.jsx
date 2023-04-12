import React from "react";

export const Header = () => {
  return (
    <header className="w-screen h-60 bg-primary p-5 flex-col">
      <div className="pt-5 sm:p-8 sm:hidden"> </div>
      <div className="flex-col h-full ">
      <div className="h-1/3"><h2 className=" sm:pl-20 pt-5 text-fuerte font-bold text-2xl sm:text-5xl ">Hola, soy</h2></div>
      <div className="h-1/3"><h1 className="sm:pl-20 text-fuerte text-3xl sm:text-6xl font-bold">Disnarda Romero</h1> </div>
      <div className="h-1/3"><h2 className="sm:pr-20 w-full text-right text-fuerte text-2xl sm:text-5xl italic sm:pt-0 pt-3">Cajera/Vendedora</h2> </div>
      </div>
    </header>
  )
};
