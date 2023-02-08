import ChooseUsCard from "components/chooseUsCard/ChooseUsCard";
import HeadFoot from "components/HeadFoot/HeadFoot/HeadFoot";
import Layout from "components/Layout";
import OurServices from "components/ourServices/OurServices";
import ReviewSlider from "components/reviews/ReviewSlider";
import Statistics from "components/statistics/Statistics";
import TeamSlide from "components/teamMember/TeamSlide";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronRight, FaPhone } from "react-icons/fa";
import { MdOutlineHome } from "react-icons/md";
import styles from "./about.module.scss";

export default function About() {
  return (
    <>
       <Layout title="About Medpau" description="the-dynamic-description">
    <HeadFoot>
      <div className={styles.about_head}>
        <div className={styles.image}>
          <div className={styles.overlay}></div>
          <Image src="/images/breadcrumb-image-1.jpg" alt="about-us" width={900} height={900} />
          <div
            className={styles.texts}
            data-aos="zoom-in-right"
            data-aos-offset="50"
            data-aos-delay="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h2>About Us</h2>
            <p>
              <MdOutlineHome />
              <Link href="/">
                <span>HOME</span>
              </Link>
              <FaChevronRight />
              <span className={styles.active}>ABOUT US</span>
            </p>
          </div>
        </div>
      </div>
      <aside className={styles.what_about_us}>
        <div className={styles.img}>
          <Image className={styles.image} src="/images/MD-PIX-2.jpeg" alt="about-us" width={1000} height={1000} />
        </div>
        <div className={styles.details}>
          <h4 className={styles.light_blue_bg_text}>WHAT ABOUT US</h4>
          <h2>Medpau International Limited</h2>
          <p>
            MedPau is a fast-growing company, ahead of the curve in the
            distribution of medical equipment, consumables, disposables,
            furniture and apparel. We believe smart innovations in healthcare is
            key for the advancement of a healthy society, which translates to
            better economy and quality of life. This drives us to constantly
            evolve in the way we provide healthcare solutions and services in
            Nigeria and Africa at large. Our goal is to bridge the access to
            quality, affordable healthcare solutions and services. This is why
            we distribute cost-effective state-of-the-art medical equipment and
            instrumentation, offer Turnkey project management and
            Maintenance/technical services. This way, we fulfill our promise of
            improving the quality of life. At MedPau, we grow with our clients,
            working with them every step of the way. We deliver excellent
            customer experience through our unmatched after-sales support and
            24/7 online support. Our partnership with global brands and
            world-leading medical equipment manufacturers to meet our
            obligations is indeed one way in which our lasting impact in this
            forever revolutionary course has been measured.
           
          </p>

          <ul
            data-aos="zoom-in-right"
            data-aos-offset="50"
            data-aos-delay="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <li>Happy with Staff</li>
            <li>Quality of Care Services</li>
            <li>Intervention Success</li>
            <li>Client Satisfaction</li>
            <li>Patient Experience</li>
          </ul>
          <p className={styles.blue_text}>Do you have any question?</p>
          <h4>
          <a href="tel:+2349085323596">
            <FaPhone /> <span>+234805 6666700 </span>
            </a>
          </h4>
        </div>
      </aside>
      <section className={styles.choose_us}>
        <h3 className={styles.head}>Why Choose Medpau ?
</h3>
<p className={styles.heading}>We constantly evolve in the way we meet the needs of our customers, always asking questions and discovering better ways to satisfy them. More so, our solutions are custom made, tailored to meet needs individually.</p>
<div className={styles.choose_us_wrapper}>
  <ChooseUsCard title="Solutions Not Just Products" details="We offer custom made solutions in form of products, services and options to affordable healthcare. We support our customers and help them helps them thrive and rise above the challenges confronting healthcare businesses." image="/images/medical-solution.jpg"  />
  <ChooseUsCard title="We Really Care About You" details="We listen to understand the needs your needs and ensure we offer them what is best for them, in the most cost-effective way and without compromising on quality. Knowing that a healthy society will translate to better economy and quality of life" image="/images/cropped-shot-female-nurse-hold-260nw-2125640579.jpg" />
  <ChooseUsCard title="Investments In Relationship
" details="We understand the importance of business relationships in achieving success, which is why we build and maintain lasting relationships with our customers, and partners. By supporting them in every possible way, we grow together." image="/images/images.jpg" />
  <ChooseUsCard title="Expert Dedicated Team
" details="Our people are our strongest asset. Over the years we have built a dedicated team of highly responsive Engineers and Customer Service Personnels that provides unmatched after-sales support to our customers with utmost professionalism." image="/images/images (1).jpg"/>
</div>
      </section>

      <section className={styles.our_vision}> <Statistics/> </section>
      <section className={styles.services}>
        <h4 className={`${styles.light_blue_bg_text} ${styles.head}`}>OUR SERVICES</h4>
        <h3 className={styles.head}>Explore Our Main Service</h3>
        <div className={styles.services_wrapper}>
          <OurServices
            head="Project Management
"
            decsription="From consultancy to renovations and procurement, we are your number one partners."
          />
          <OurServices
            head="Medical Equipment"
            decsription="We distribute state-of-the-art medical equipment in Nigeria and West Africa."
          />
          <OurServices
            head="Maintenance & Support"
            decsription="Our qualified Service Engineers offer predictable maintenance and after sales support services"
          />
        </div>
      </section>
      <section className={styles.team_wrapper}>
      <h4 className={`${styles.light_blue_bg_text} ${styles.head}`}>The Team</h4>
        
        <TeamSlide/>
      </section>

      <section className={styles.reviews}>
        <h4 className={`${styles.light_blue_bg_text} ${styles.head}`}>OUR CLIENTS</h4>
        <h3 className={styles.head}>
          Our Satisfied Clients' Reviews
        </h3>
          <div className={styles.reviews_wrapper}>
          <div>
            <ReviewSlider/>
          </div>
          </div>
      </section>
      <section className={styles.our_process}></section>
    </HeadFoot>
    </Layout>

    </>
  );
}
