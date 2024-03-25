import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();
  return (
    <header className={styles.navContainer}>
      <nav className={`${styles.navBox} globalWidth flex`}>
        <div className={styles.navLogo}>
          <img onClick={() => Navigate("/")} src={logo} alt="Logo" />
        </div>
        <ul>
          <li>
            <NavLink to="/" className={styles.navList}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={styles.navList}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={styles.navList}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={styles.navList}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={styles.navList}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
