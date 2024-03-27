import React from "react";
import styles from "./HeroSection.module.css";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const HeroSection = ({title}) => {
  return (
    <section className={styles.heroContainer}>
      <div className={`${styles.heroBox} globalWidth`}>
        <h2>{title}</h2>
        <div className={styles.heroTitle}>
          <span>
            <Link
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: "1.2rem",
                fontWeight: "600",
              }}
              to="/"
            >
              Home
            </Link>
          </span>
          <h3>
            <FaAngleRight /> {title}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
