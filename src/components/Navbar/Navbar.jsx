import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import theme_pattern from "../../assets/theme_pattern.svg";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const sectionElements = sections.map(id => ({
        id,
        element: document.getElementById(id),
      }));

      let maxVisibleSection = { id: sections[0], ratio: 0 };

      sectionElements.forEach(({ id, element }) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
          const ratio = visibleHeight / windowHeight;

          if (ratio > maxVisibleSection.ratio) {
            maxVisibleSection = { id, ratio };
          }
        }
      });

      setMenu(maxVisibleSection.id);
    };

    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener);
    handleScroll();

    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="hamburger" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <li>
          <AnchorLink className='anchor-link' href='#home'>
            <p onClick={() => { setMenu("home"); setIsMobileMenuOpen(false); }}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={theme_pattern} alt="" className="home-theme-pattern" /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => { setMenu("about"); setIsMobileMenuOpen(false); }}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={theme_pattern} alt="" className="home-theme-pattern" /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#projects'>
            <p onClick={() => { setMenu("projects"); setIsMobileMenuOpen(false); }}>Projects</p>
          </AnchorLink>
          {menu === "projects" ? <img src={theme_pattern} alt="" className="home-theme-pattern" /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => { setMenu("contact"); setIsMobileMenuOpen(false); }}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={theme_pattern} alt="" className="home-theme-pattern" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;