import React from 'react'
import BackgroundImage from '../../../medias/images/background/bg-footer.jpg'
import Container from '../../elements/Container'
import { LocationMarkerIcon, MailIcon } from '@heroicons/react/solid'
import Logo from '../../../medias/svg/Logo-burger-house-white.svg'
import IcoInsta from '../../../medias/svg/Instagram.svg'
import IcoFacebook from '../../../medias/svg/faceboock.svg'
import IcoTwitter from '../../../medias/svg/twitter.svg'
import IcoWatsApp from '../../../medias/svg/whatsapp.svg'

export default function Footer() {
  return (
    <Container>
        <div className="relative lg:mb-20 p-5 text-white-rosto-200">
        <img src={BackgroundImage} alt="Un plan de travail de cuisine ou l'on conçoit un hamburger" className="bg-black absolute top-0 left-0 w-full h-full object-cover z-0" />
        <div className="relative grid md:grid-cols-2 z-10">
          <div className="w-full p-5 md:mt-20 mt-10 md:mb-28">
            <img src={Logo} alt="Logo burger house" className="w-2/3"/>
            <p className="mt-10 text-white-rosto-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viver ra maecenas accumsan lacus vel facilisis. 
            </p>
          </div>
          
          <div 
             className=" md:h-full w-full grid gap-1 justify-center items-center  md:items-center  mb-10 md:mb-0 p-5 md:p-0  text-white-rosto-200">
            
            <div className="flex items-center bg-secondary invisible">
              <LocationMarkerIcon className=" h-6 w-6 md:h-10 md:w-10 mr-5" />
              <span className="uppercase font-semibold text-sm  md:text-lg tracking-tighter">15 place bellecour, 6900 lyon</span>
            </div>

            <div className="flex items-center  mt-5 bg-secondary  invisible">
              <MailIcon className="h-6 w-6 md:h-10 md:w-10 mr-5" />
              <span className="font-semibold text-sm md:text-lg tracking-tighter">info@burger-house.com</span>
            </div>
           
            <div className="flex items-center bg-secondary  invisible">
              <LocationMarkerIcon className=" h-6 w-6 md:h-10 md:w-10 mr-5" />
              <span className="uppercase font-semibold text-sm  md:text-lg tracking-tighter">15 place bellecour, 6900 lyon</span>
            </div>
            <div className="flex items-center  mt-9">
              <LocationMarkerIcon className=" h-6 w-6 md:h-10 md:w-10 mr-5" />
              <span className="uppercase font-semibold text-sm  md:text-lg tracking-tighter">15 place bellecour, 6900 lyon</span>
            </div>

            <div className="flex items-center ">
              <MailIcon className="h-6 w-6 md:h-10 md:w-10 mr-5" />
              <span className="font-semibold text-sm md:text-lg tracking-tighter">info@burger-house.com</span>
            </div>
            
            <div className="flex items-center  mt-5 bg-secondary  invisible">
              <MailIcon className="h-6 w-6 md:h-10 md:w-10 mr-5" />
              <span className="font-semibold text-sm md:text-lg tracking-tighter">info@burger-house.com</span>
            </div>

            <div className="flex items-center  mt-5 bg-secondary   invisible">
              <MailIcon className="h-6 w-6 md:h-10 md:w-10 mr-5" />
              <span className="font-semibold text-sm md:text-lg tracking-tighter">info@burger-house.com</span>
            </div>

            <div className="flex items-center bg-secondary   invisible">
              <LocationMarkerIcon className=" h-6 w-6 md:h-10 md:w-10 mr-5" />
              <span className=" uppercase font-semibold text-sm  md:text-lg tracking-tighter">15 place bellecour, 6900 lyon</span>
            </div>
            
          </div>

        </div>
        <div className="relative z-10 flex items-center justify-between text-white-rosto-200 ">
          <div className="uppercase font-extrabold tracking-tighter text-sm">
            © burger house 2021. All rights reserved.
          </div>
          <div className="flex text-white-rosto-200">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="group">
              <img src={IcoInsta} alt="" className="w-9 h-9 mr-2  group-hover:bg-primary animate rounded-full p-1" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="group">
              <img src={IcoFacebook} alt="" className="w-9 h-9 mr-2 text-white-rosto-200 group-hover:bg-primary animate rounded-full p-1" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="group">
              <img src={IcoTwitter} alt="" className="w-9 h-9 mr-2  group-hover:bg-primary animate rounded-full p-1" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="group">
              <img src={IcoWatsApp} alt="" className="w-9 h-9 mr-2  group-hover:bg-primary animate rounded-full p-1" />
            </a>
          </div>
        </div>

        <div className="bg-primary">
          <span className="text-xs">
            Burger House App.
          </span>
        </div>

      </div>
    </Container>
  )
}
