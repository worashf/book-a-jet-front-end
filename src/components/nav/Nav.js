import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SidebarData from './SidebarData';
import './temp.scss';

function getWindowSize() {
  const { innerWidth } = window;
  return { innerWidth };
}

function Nav() {
  const [sidebar, setSidebar] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const showSideBar = () => setSidebar(!sidebar);

  return (
    <>
      {windowSize.innerWidth <= 390 ? (
        <>
          <div className="navbar">
            <FaIcons.FaBars onClick={showSideBar} className="menu-bars" />
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items">
              <li className="navbar-toggle">
                <AiIcons.AiOutlineClose onClick={showSideBar} className="menu-bars" />
              </li>
              {SidebarData.map((item) => {
                const {
                  title, path, icon, cName, key,
                } = item;
                return (
                  <li key={key} className={cName}>
                    <Link to={path} onClick={showSideBar}>
                      {icon}
                      <span>{title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </>
      ) : <h2>{windowSize.innerWidth}</h2>}
    </>
  );
}

export default Nav;
