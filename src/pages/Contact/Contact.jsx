import React from "react";
import styles from "./Contact.module.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import ContactCard from "../../components/ContactCard/ContactCard";
import { FaPhoneVolume } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import fromImg from "../../assets/contact_img.jpg";
import Button from "../../components/Button/Button";

const Contact = () => {
  return (
    <section>
      <div>
        <HeroSection title="Contact Page" />
      </div>
      <div className={`${styles.ContactCardBox} globalWidth flex`}>
        <ContactCard
          href1="tel:+91 8292196144"
          href2="tel:+91 7277700876"
          text1="+91 8292196144"
          text2="+91 7277700876"
          cardIcon={<FaPhoneVolume />}
        />
        <ContactCard
          href1="mailto: mg328790@gmail.com"
          href2="mailto: guptag8292@gmail.com"
          text1="mg328790@gmail.com"
          text2="guptag8292@gmail.com"
          cardIcon={<MdEmail />}
        />
        <ContactCard text1="Siwan Bihar" cardIcon={<FaLocationDot />} />
      </div>
      <div className={`${styles.fromContainer} globalWidth`}>
        <div className={styles.fromLeft}>
          <img src={fromImg} />
        </div>
        <div className={styles.fromRight}>
          <h2>Contact for Services</h2>
          <form>
            <div className={styles.inputBox}>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email address" />
            </div>
            <div className={styles.inputBox}>
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="Subject" />
            </div>
            <textarea
              type="text"
              placeholder="write message"
              rows="8"
            ></textarea>
            <Button text="Send a message" />
          </form>
        </div>
      </div>
      <div className={styles.mapBox}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28633.568862288485!2d84.33922154117315!3d26.22281678213004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992fc0166e38983%3A0x623c6c1cb7d5211f!2sSiwan%2C%20Bihar!5e0!3m2!1sen!2sin!4v1711479928196!5m2!1sen!2sin"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
