import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
  return (
    <nav className=" p-4 bg-cyan-500/50">
      <ul>
        <li>
          <Link className="m-4 text-xl" to={'/'}>
            Home
          </Link>
        </li>
        <li>
          <Link className="m-4 text-xl" to={'/InserisciDati'}>
            Dati Paziente
          </Link>
        </li>
        <li>
          <Link className="m-4 text-xl" to={'/CheckList'}>
            Check List
          </Link>
        </li>
        <li>
          <Link className="m-4 text-xl" to={'/AndamentoPaziente'}>
            Andamento Paziente
          </Link>
        </li>
        <li>
          <Link className="m-4 text-xl" to={'/Impostazioni'}>
            Impostazioni
          </Link>
        </li>
        <li>
          <Link className='m-4 text-6xl' to={'/Faq'}>
          FAQ</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
