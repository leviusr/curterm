import React from "react";
import { BiPhoneCall, BiMailSend, BiBuildingHouse } from "react-icons/bi";

export const Curriculum = () => {
  return (
    <div>
      <div className=" w-[ h-screen sm:h-[1200px] p-2 flex text-[10px]">
        <div className="w-[35%]  h-screen sm:h-[1200px] flex-col">
          <div className="h-[28%] w-full justify-center items-center flex pt-5">
            <div className="p-1 flex border bg-[url('/foto.jpg')] bg-center bg-cover  border-black rounded-full justify-center items-center h-[80px] w-[80px] sm:h-[250px] sm:w-[250px] sm:border-[5px]"></div>
          </div>
          <div className="h-[50%] w-full flex p-1 sm:p-5">
            <div className="sm:border-2 sm:rounded-t-[60px] sm:rounded-b-3xl text-justify border border-fuerte rounded-t-3xl text-[8px] sm:text-xl p-2 sm:p-5">
            <p className="pb-1 sm:leading-relaxed pt:5 text-[14px]  font-bold sm:text-5xl sm:pb-5 sm:text-">Sobre mí:</p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
              quas molestias inventore cumque, maiores nulla esse ducimus
              perspiciatis, sunt, voluptatem repellen Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
            </div>
          </div>
          <div className="h-[18%] sm:pt-0 pt-2 w-full sm:p-5">
            <div className="rounded-3xl sm:rounded-t-[60px] sm:p-5 sm:border-2 border border-fuerte text-[8px] p-2 w-full h-full">
              <p className="pl-1 text-[14px] sm:text-2xl font-bold ">Skills:</p>
              <ul className="pl-5 list-disc sm:text-xl">
                <li>cantar</li>
                <li>bailar</li>
                <li>soñar</li>
                <li>Ejercitar</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-[2%] sm:h-[1200px] bg-primary h-screen"></div>

        {/* aca comienza la segunda seccion*/}
        <div className="w-[63%] h-screen sm:h-[1200px]">
          <div className="flex-col bg-primary h-[25%]">
            <div className="flex-col bg-primary">
              <div className="h-1/3 font-bold text-xl sm:text-7xl pl-2 pt-4">
                Disnarda Romero
              </div>
              <div className="h-1/3 flex text-[12px] pt-5 pl-2 sm:text-3xl">
                <div className="w-1/2 ">C.I:20.000.000</div>
                <div className="w-1/2">Rif:V200000000</div>
              </div>
              <div className="italic text-xl pb-3 text-center h-1/3 underline sm:pt-10 sm:text-5xl ">
                Cajera/vendedora
              </div>
            </div>
          </div>

          {/**/}
          <div className=" h-[75%] ">
            <div className="w-full  p-1 flex flex-col h-full">
              <div className="h-[25%] bg-gray-300">
                <div className="items-center justify-center flex flex-col">
                  <div className="rounded-b-3xl bg-fuerte text-pink-100 py-1 px-8">
                    Contacto:
                    <div className="flex flex-col w-full h-[20%] bg-gray-300 mt-1"></div>
                  </div>
                </div>
                <div className="text-[12px] sm:text-2xl pt-5 sm:pl-10">
                  <ul>
                    <li className="flex pl-2 ">
                      <div className="pt-1 pr-2 sm:pr-5">
                        <BiPhoneCall />
                      </div>
                      +58 414 000 0000
                    </li>
                    <li className="flex pl-2 ">
                      <div className="pt-1 pr-2 sm:pr-5">
                        <BiMailSend />
                      </div>
                      correo@correo.com
                    </li>
                    <li className="flex pl-2">
                      <div className="pt-1 pr-2 sm:pr-5">
                        <BiBuildingHouse />
                      </div>
                      Aca va tu direccion
                    </li>
                  </ul>
                </div>
              </div>
              <div className="h-[75%] flex flex-col">
                <div className="items-center justify-center flex flex-col pt-1">
                  <div className="rounded-b-3xl bg-fuerte text-pink-100 py-1 px-8">
                    Experiencia
                  </div>
                </div>

                <div className="flex flex-col w-full h-[20%] bg-gray-300 mt-1 p-1 rounded-xl">
                  <div className="flex">
                    <div className="w-1/2 text-[12px] sm:text-2xl sm:pl-10">Tiendas seven</div>
                    <div className="w-1/2 text-end text-[8px] sm:text-xl sm:pr-10 sm:italic ">
                      mayo 14 al 20 de diciembre
                    </div>
                  </div>
                  <div className="font-thin sm:text-xl sm:pl-10 ">
                    <p>
                      <b>mayo 2022 - febrero 2023</b> - Los Teques Estado Miranda
                    </p>
                    <p className="hidden sm:flex sm:text-xl sm:pt-2 font-serif">Aca va un resumen de lo que hiciste trabajando en esa empresa tienda o local</p>
                  </div>
                </div>

                <div className="flex flex-col w-full h-[20%] bg-gray-300 mt-1 p-1 rounded-xl">
                  <div className="flex">
                    <div className="w-1/2 text-[12px] sm:text-2xl sm:pl-10">Tiendas seven</div>
                    <div className="w-1/2 text-end text-[8px] sm:text-xl sm:pr-10 sm:italic ">
                      mayo 14 al 20 de diciembre
                    </div>
                  </div>
                  <div className="font-thin sm:text-xl sm:pl-10 ">
                    <p>
                      <b>mayo 2022 - febrero 2023</b> - Los Teques Estado Miranda
                    </p>
                    <p className="hidden sm:flex sm:text-xl sm:pt-2 font-serif">Aca va un resumen de lo que hiciste trabajando en esa empresa tienda o local</p>
                  </div>
                </div>

                <div className="flex flex-col w-full h-[20%] bg-gray-300 mt-1 p-1 rounded-xl">
                  <div className="flex">
                    <div className="w-1/2 text-[12px] sm:text-2xl sm:pl-10">Tiendas seven</div>
                    <div className="w-1/2 text-end text-[8px] sm:text-xl sm:pr-10 sm:italic ">
                      mayo 14 al 20 de diciembre
                    </div>
                  </div>
                  <div className="font-thin sm:text-xl sm:pl-10 ">
                    <p>
                      <b>mayo 2022 - febrero 2023</b> - Los Teques Estado Miranda
                    </p>
                    <p className="hidden sm:flex sm:text-xl sm:pt-2 font-serif">Aca va un resumen de lo que hiciste trabajando en esa empresa tienda o local</p>
                  </div>
                </div>

                <div className="flex flex-col w-full h-[20%] bg-gray-300 mt-1 p-1 rounded-xl">
                  <div className="flex ">
                    <div className="w-1/2 text-[12px] sm:text-2xl sm:pl-10">Tiendas seven</div>
                    <div className="w-1/2 text-end text-[8px] sm:text-xl sm:pr-10 sm:italic ">
                      mayo 14 al 20 de diciembre
                    </div>
                  </div>
                  <div className="font-thin sm:text-xl sm:pl-10 ">
                    <p>
                      <b>mayo 2022 - febrero 2023</b> - Los Teques Estado Miranda
                    </p>
                    <p className="hidden sm:flex sm:text-xl sm:pt-2 font-serif">Aca va un resumen de lo que hiciste trabajando en esa empresa tienda o local</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
