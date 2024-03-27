import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiNetlify } from "react-icons/si";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={`${styles.footerBox} globalWidth`}>
        <div className={`${styles.footerTop} flex`}>
          <div>
            <img width="186px" src={logo} alt="logo" />
          </div>
          <div className={styles.socialMediaIcons}>
            <a
              href="https://www.linkedin.com/in/mukesh-gupta-49108624a/"
              target="_blank"
            >
              <FaLinkedin className={styles.sicialIcon} />
            </a>
            <a href="https://github.com/MukeshKumarCoder" target="_blank">
              <FaGithub className={styles.sicialIcon} />
            </a>
            <a
              href="https://app.netlify.com/teams/magupta1/overview"
              target="_blank"
            >
              <SiNetlify className={styles.sicialIcon} />
            </a>
          </div>
        </div>
        <hr className={styles.hrLine} />
        <div className={styles.footerBottom}>
          <div className={styles.innerBox}>
            <h3>Contact Us</h3>
            <p>
              Mahuwari Pachhim Tola <br /> Siwan BIhar
            </p>
            <a className={styles.links} href="tel:+91 8292196144">Mobile: +91 8292196144</a>
            <a className={styles.links} href="mailto:mg328790@gmail.com">Email: mg328790@gmail.com</a>
          </div>
          <div className={styles.innerBox}>
            <h3>Our Links</h3>
            <Link to="/about" className={styles.links}>
              About
            </Link>
            <Link className={styles.links}>Meet Our Team</Link>
            <Link className={styles.links}>What We Do</Link>
            <Link to="/blog" className={styles.links}>
              Blog
            </Link>
            <Link to="/contact" className={styles.links}>
              Contact
            </Link>
          </div>
          <div className={styles.innerBox}>
            <h3>Our Services</h3>
            <Link className={styles.links}>Apartment Cleaning</Link>
            <Link className={styles.links}>House Cleaning</Link>
            <Link className={styles.links}>Carpet Cleaning</Link>
            <Link className={styles.links}>After Renovation</Link>
            <Link className={styles.links}>Curtain Cleaning</Link>
            <Link className={styles.links}>Window Cleaning</Link>
          </div>
          <div className={styles.innerBox}>
            <h3>Newsletter</h3>
            <p>
              Subscribe our newsletter to get our <br /> latest update & news
            </p>
            <input type="email" placeholder="Your email" />
            <Button text="Subscribe" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
