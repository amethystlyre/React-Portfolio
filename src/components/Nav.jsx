//Nav tab (checks for active link)
import { NavLink } from 'react-router-dom';
import { Outlet } from "react-router-dom";
//import { NavLink, Route, Routes } from 'react-router-dom';
// import About from './pages/About';
// import Portfolio from './pages/Portfolio';
// import Resume from './pages/Resume';
// import Contact from './pages/Contact';

export default function Nav() {

  return (
    <>
    <nav>
    <ul className="nav nav-tabs">
    <li className="nav-item">
        <NavLink
          to="/About"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={({isActive}) => isActive? 'nav-link active' : 'nav-link'}
        >
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/Portfolio"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={({isActive}) => isActive? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/Contact"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={({isActive}) => isActive? 'nav-link active' : 'nav-link'}
        >
          Contact
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/Resume"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={({isActive}) => isActive? 'nav-link active' : 'nav-link'}
        >
          Resume
        </NavLink>
      </li>

    </ul>

    </nav>

    <Outlet />
    </>
  );
}

