import React from 'react';

import '../styles/components/_header.styl';

const Header = () => {
  return (
    <header className='header animate__animated animate__fadeInLeft'>
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__list--element'>
            <a href='/'>Inicio</a>
          </li>
          <li className='nav__list--element'>
            <a href='/sections/valores.html'>Principios</a>
          </li>
          <li className='nav__list--element'>
            <a href='/sections/sistema.html'>Sistema</a>
          </li>
          <li className='nav__list--element'>
            <a href='/sections/fundamentos.html'>Fundamentos</a>
          </li>
          <li className='nav__list--element'>
            <a href='/sections/componentes.html'>Componentes</a>
          </li>
          <li className='nav__list--element'>
            <a href='/sections/iteraciones.html'>Iteración</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
