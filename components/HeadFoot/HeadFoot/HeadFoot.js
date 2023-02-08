import React, { useEffect, useState } from "react";
// import { HiMenuAlt3 } from "react-icons/hi";

import {
  FaChevronRight,
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";
import Image from "next/image";
import Link from "next/link"; 
import styles from './headFoot.module.scss'

export default function HeadFoot({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  // Sticky Menu Area
  // useEffect(() => {
  //   window.addEventListener("scroll", isSticky);
  //   return () => {
  //     window.removeEventListener("scroll", isSticky);
  //   };
  // });

  // /* Method that will fix header after a specific scrollable */
  // const isSticky = (e) => {
  //   const header = document.querySelector(".nav");
  //   const scrollTop = window.scrollY;
  //   scrollTop >= 40
  //     ? header.classList.add("is-sticky")
  //     : header.classList.remove("is-sticky");
  // };

  return (
    <div className={styles.head_foot_wrapper}>
      {/* <div
        onClick={handleToggle}
        className={` ${isOpen ? "overlay" : "show"}`}
      ></div> */}
      <header className={styles.nav}>
        <div className={styles.comapany_icon}>
          <div className={styles.logo}>
            {" "}
            <Link href="/">
              <Image
                src="/images/WhatsApp_Image_2023-01-23_at_9.13.05_AM-removebg-preview.png" 
                alt="logo"
                width={900}
                height={900}
              />
            </Link>{" "}
          </div>

          {/* <div onClick={handleToggle}> */}
            {/* <HiMenuAlt3 className={`nav-bar ${isOpen ? "white" : ""}`} /> */}
          {/* </div> */}
        </div>
        <ul className={`navbar-content ${isOpen ? "open" : ""}`}>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about/About">
            <li>About</li>
          </Link>
          <Link href="/shop/Shop">
            {" "}
            <li>Shop</li>
          </Link>
          <Link href="/service/Service">
            <li>Service</li>{" "}
          </Link>
          <li>Our Blog</li>
          <Link href="/mgtp/Mgtp">
          <li>MGTP</li>
          </Link>
          {/* <Button variant="contained" className="appointment-btn">
            APPOINTMENT
          </Button> */}

        </ul>
      </header>
      {children}
      <footer className={styles.footer}>
        <div
          className={styles.about}
        >
          <h3>MEDPAU</h3>
          <p>
            At MedPau, we believe smart innovations in healthcare is key to
            advancement of a society which translates to better economy and
            quality of life. Professionalism.
          </p>
          <ul>
             <Link href="/www.facebook.com/Medpau1" target="_blank">
              <li>
                <FaFacebookF />
              </li>
            </Link>
            <a href="mailto:Info@medpau.net">
              <li>
                <FaGooglePlusG />
              </li>
            </a>
            <Link href="/linkedin.com/company/medpau/" target="_blank">
              <li>
                <FaLinkedinIn />
              </li>
            </Link>
            <Link
              href="/twitter.com/medpauintl?s=11&t=zBroa9mFl_fitJFK1HbUcQ"
              target="_blank"
            >
              <li>
                <FaTwitter />
              </li>
            </Link>
          </ul>
        </div>
        <div
          className={styles.courses}
        >
          <div className={styles.head}>
            <h3>Our Courses</h3>
            <hr />
          </div>
          <ul>
            <Link href="/about/About">
              <li>
                <FaChevronRight />
                About Us
              </li>
            </Link>
            <Link href="/service/Service">
              <li>
                <FaChevronRight />
                Our Services
              </li>
            </Link>
            <Link href="/shop/Shop">
              {" "}
              <li>
                <FaChevronRight />
                Shop
              </li>
            </Link>
            <li>
              <FaChevronRight />
              Events
            </li>
            <Link href="/FAQ/Faq">
            <li>
              <FaChevronRight />
              FAQ
            </li>
            </Link>
          </ul>
        </div>
        <div
          className={styles.recent_posts}
         
        >
          <div className={styles.head}>
            <h3>Recent Posts</h3>
            <hr />
          </div>
        </div>
        <div
          className={styles.contact_us}
         
        >
          <div className={styles.head}>
            <h3>Contact Us</h3>
            <hr />
          </div>
          <ul>
            <a href="tel:+2349085323596">
            <li>
              <FaPhone /> <span>+234908 532 3596</span>
            </li>
            </a>
            <a href="mailto:Info@medpau.net">
            <li>
              <MdEmail />
               <span>Info@medpau.net</span>
            </li>
            </a>
            <li>
              <MdLocationPin />
              <span>
                3, Tunde Gafar Close, Off Adeniyi Jones, Ikeja, Lagos
              </span>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
