import React from "react";
import styles from "./ContactCard.module.css";
import { FaPhoneVolume } from "react-icons/fa";

const ContactCard = ({ href1, href2, text1, text2, cardIcon }) => {
  return (
    <section className={`${styles.singleCard}`}>
      <div className={styles.cardLink}>
        <a href={href1}>{text1}</a>
        <a href={href2}>{text2}</a>
      </div>
      <div className={styles.icon}>{cardIcon}</div>;
    </section>
  );
};

export default ContactCard;
