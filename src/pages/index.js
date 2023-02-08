import Head from "next/head";
import Image from "next/image";
import Carousel from "components/Carousel"
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";
import ReviewSlider from "components/reviews/ReviewSlider";
import HeadFoot from "components/HeadFoot/HeadFoot/HeadFoot";
import SimpleSlider from "components/SimpleSlider";
import CenterSlider from "components/CenterSlider";
import Statistics from "components/statistics/Statistics";
import Layout from "components/Layout";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
       <Layout title="Welcome to Medpau International" description="the-dynamic-description">

      <HeadFoot>

        <main className={styles.main}>
          <Carousel/>
        </main>
        <div className={styles.hero_card_wrapper}>
          <Image className={styles.img} src="/images/background_image_02.jpg" alt="card" width={1000} height
        ={1000} />
          <div className={styles.overlay}></div>
          <div className={styles.hero_cards}>
            <div className={styles.hero_card}
            
            data-aos="zoom-in-right"
            data-aos-offset="50"
            data-aos-delay="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            >
              <h3>What we sell</h3>
              <p>
                With over 50 best-selling medical equipment andd healthcare
                innovations, <strong>MedPau</strong> is driving the future of
                health care in Africa through <strong>Affordability</strong>
              </p>
              <Link href="/shop/Shop">
                <button>Check it out</button>
              </Link>
            </div>
            <div className={styles.hero_card}
            data-aos="zoom-in-right"
            data-aos-offset="50"
            data-aos-delay="10"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            >
              <h3>Need an Appointment?</h3>
              <p>We constantly evolve in the way we provide healthcare solutions and services to deliver excellent customer experience,</p>
              <button>Book Now</button>
            </div>
            <div className={styles.hero_card}
            data-aos="zoom-in-right"
            data-aos-offset="50"
            data-aos-delay="10"
            data-aos-duration="1400"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            >
              <h3>Have a technical complain?</h3>
              <p>We provide unmatched after sales support, 24/7 online support and immediate response to complaints.</p>
           <Link href="//forms.gle/aJKSaxz2xyfbnQFy5"> <button>Contact our Engineers</button>
           </Link>
            </div>
          </div>
        </div>
        <section className={styles.schedule_section}>
          <div className={`${styles.work_hour} ${styles.schedule}`}
          
          data-aos="zoom-in"
          data-aos-offset="20"
          data-aos-delay="10"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          >
            <h3>Working Hours</h3>
            <hr />
            <h6>
              Mon - Wed <span>8AM - 7PM</span>
            </h6>
            <hr />
            <h6>
              Thursday
              <span>8AM - 7PM</span>
            </h6>
            <hr />
            <h6>
              Friday <span>8AM - 7PM</span>
            </h6>
            <hr />
            <h6>
              Sat - Sunday
              <span>CLOSED</span>
            </h6>
            <hr />
            <h6>Time is not Flexible?</h6>
            <p>
              We provide high quality, integrated healthcare services, based on
              a patient - centered
            </p>
            <button>BOOK AN APPOINTMENT</button>
          </div>
          <div className={`${styles.work_hour} ${styles.our_process}`}
          
          data-aos="zoom-in"
          data-aos-offset="20"
          data-aos-delay="10"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          >
            <div className={styles.img}>
              <Image
                src="/images/card_image_01.jpg"
                alt="aside"
                width={500}
                height={500}
              />
            </div>
            <div className={styles.text}>
              <h2>What we Offer</h2>
              <p>
            Our commitment to promoting brilliant healthcare innovations, and increasing the access to affordable and quality healthcare is pivoted at improving the quality of life. We achieve this by distributing medical equipment and devices of leading brands, offering turnkey project management, consultancy, training and technical services.
            </p>

            </div>
          </div>
          <div className={`${styles.work_hour} ${styles.our_process}`}
          
          data-aos="zoom-in"
          data-aos-offset="20"
          data-aos-delay="10"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          >
            <div className={styles.img}>
              <Image src="/images/card_image_02.jpg" alt="aside" width={10000} height={10000} />
            </div>
            <div className={styles.text}>
              <h2>Our Process</h2>
              <p>
            We believe in people and partnerships. This is why we invest in relationships, develop our team, build capacities and help our clients explore vast opportunities. This way we are able to grow with our clients, support them and help them build their business knowing that a healthy society will translate to better economy and quality of live.
            </p>
            </div>
          </div>
        </section>

        <section className={styles.our_vision}><Statistics/></section>

        <section className={styles.reviews}>
          <h6 className={styles.head}>
            OUR CLIENTS
          </h6>
          <h3 className={styles.head}>Our Satisfied Client Reviews</h3>
          <div className={styles.reviews_wrapper}>
            <div>
              <ReviewSlider/>
            </div>
          </div>
        </section>
        <aside className={styles.featured_post}>
          <div className={styles.head}>
            <h6>FEATURE</h6>
            <h2>Featured Products </h2>
            <Link href="/shop">
              {" "}
              <button> SEE MORE</button>
            </Link>
          </div>
          <div className={styles.products_container}>
            <SimpleSlider />
          </div>
        </aside>

        <aside className={styles.new_arrivals}>
          <div className={styles.head}>
            <h6>FEATURE</h6>
            <h2>New Arrivals</h2>
          </div>
          <div className={styles.products_container}>
            <CenterSlider /> 
          </div>
        </aside>
      </HeadFoot>
      </Layout>

    </>
  );
}
