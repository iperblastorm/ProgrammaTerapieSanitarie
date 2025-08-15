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
            Inserisci Dati
          </Link>
        </li>
        <li>
          <Link className="m-4 text-xl" to={'/'}>
            Ricette
          </Link>
        </li>
        <li>
          <Link className="m-4 text-xl" to={'/Impostazioni'}>
            Impostazioni
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
