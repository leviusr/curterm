import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaMailBulk } from 'react-icons/fa'


export const Footer = () => {
  return (
    <footer className="bg-primary w-screen h-[200px]">
      {/*MOBILE Code*/}
      <div className="p-2 sm:hidden ">
        <div className=" text-2xl underline pb-3 ">Contactarme:</div>
        <div className="flex w-screen">
          <div className="w-1/4 sm:w-1/3"></div>

          <div className="w-auto">
            <ul>
              <li className="flex "><div className="text-xl pt-1" s><FaFacebookF /></div> <a href="#" className="pl-2 text-xl">Facebook</a></li>
              <li className="flex text-leff"><div className="text-xl pt-1" s><FaInstagram /></div> <a href="#" className="pl-2 text-xl">Instagram</a></li>
              <li className="flex text-leff"><div className="text-xl pt-1" s><FaTwitter /></div> <a href="#" className="pl-2 text-xl">Twitter</a></li>
              <li className="flex text-leff"><div className="text-xl pt-1" s><FaWhatsapp /></div> <a href="#" className="pl-2 text-xl">Whatsapp</a></li>
              <li className="flex text-leff"><div className="text-xl pt-1" s><FaMailBulk /></div> <a href="#" className="pl-2 text-xl">Correo</a></li>
            </ul>
          </div>

          <div className="w-1/4 sm:w-1/3"> </div>

        </div>
      </div>
      {/*Codigo para escritorio*/}
      <div className="hidden sm:flex sm:text-3xl w-screen sm:pt-5 ">
        <div className="w-1/3 pl-36 pt-10">Contactarme:</div>
        <div className="w-1/3 pt-10">
          <ul>
            <li className="flex "><div className="text-xl pt-1" s><FaFacebookF /></div> <a href="#" className="pl-2 text-xl">Facebook</a></li>
            <li className="flex text-leff pt-2"><div className="text-xl pt-1" s><FaInstagram /></div> <a href="#" className="pl-2 text-xl">Instagram</a></li>
            <li className="flex text-leff pt-2"><div className="text-xl pt-1" s><FaTwitter /></div> <a href="#" className="pl-2 text-xl">Twitter</a></li>
          </ul>
        </div>
        <div className="w-1/3 pt-10">
        <ul>
          <li className="flex text-leff"><div className="text-xl pt-1" s><FaWhatsapp /></div> <a href="#" className="pl-2 text-xl">Whatsapp</a></li>
          <li className="flex text-leff pt-2"><div className="text-xl pt-1" s><FaMailBulk /></div> <a href="#" className="pl-2 text-xl">Correo</a></li>
        </ul>
        </div>
      </div>

    </footer>
  )
};
