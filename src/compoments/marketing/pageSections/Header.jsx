import React from 'react';
import Logo from '../../../medias/svg/Logo-burger-house.svg';
import Icone from '../../../medias/svg/ico-bag-clickAndCollect.svg'
import Button from '../../elements/Button';
const Header = () => {
  return (
    <div className='flex justify-between items-center py-10 px-5'>

      <div className='h-20 w-full flex justify-between items-center' >
        <img src={Logo} alt="Burger House" className='w-60 ' />
      </div>

      <div className='w-full h-20 text-secondary grid items-center justify-end'>
        <div className='flex items-center justify-center'>
          <img src={Icone} alt="" className="w-5 h-7 mr-1" />
          <span className='text-1xl font-bold'>Commandez votre repas en ligne</span>
        </div>

        <div className='flex justify-end items-center'>
          <Button className="tracking-widest mr-3">
            Inscription
          </Button>
          <Button className="tracking-widest" color="secondary">
            Connexion
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Header;
