import { GiHamburgerMenu } from 'react-icons/gi';
import {MdOutlineCake } from 'react-icons/md';
import { Link } from 'react-router-dom';
import React from 'react';
import '../Navbarmenu/Navbarmenu';

const Navbarmenu = () => {
const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <div>
            <div className="app__navbar-smallscreen ">
        <GiHamburgerMenu className=' md:invisible'  fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineCake fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <div className="app__navbar-smallscreen_links flex flex-col">
              <Link to = "/" onClick={() => setToggleMenu(false)}>Home</Link>
              <Link to = "/Resume" onClick={() => setToggleMenu(false)}> Resume </Link>
              <Link to = "/Projects" onClick={() => setToggleMenu(false)}>projects</Link>
              <Link to = "/contact" onClick={() => setToggleMenu(false)}>contact</Link>
            </div>
          </div>
        )}
      </div>
        </div>
    )
}
export default Navbarmenu