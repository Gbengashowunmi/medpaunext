import React, { useEffect, useState } from "react";
import { BiCategory } from "react-icons/bi";
import { IoIosFlash } from "react-icons/io";
import Button from "@mui/material/Button";
import { BsCart4, BsForwardFill, BsGiftFill, BsSearch } from "react-icons/bs";
import { RiAccountPinCircleFill } from "react-icons/ri";
import styles from  "./shop.module.scss";

import { MdOutlineHome } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { ThreeCircles } from "react-loader-spinner";
import Link from "next/link";
import Image from "next/image";
import CenterSlider from "components/CenterSlider";
import Consumeables from "components/consumeables/Consumeables";
import SimpleSlider from "components/SimpleSlider";
import ItemCard from "components/ItemCard/ItemCard";
import ShortMessage from "components/shortMessage/ShortMessage";
import data from "components/Data";
import HeadFoot from "components/HeadFoot/HeadFoot/HeadFoot";
import Layout from "components/Layout";

export default function Shop() {
  // set states
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  useEffect(() => {
    setProducts(data);
  }, []);

  // handleInput function
  const handleInput = (e) => {
    return setSearchInput(e.target.value);
  };

  // handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchResult = data.filter((searched) =>
      searched.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    if(searchInput ===""){}
    setProducts(searchResult);
  };
  console.log(products)

  return (
    <Layout title="Medpau Shop" description="the-dynamic-description">
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
            <h2>Shop here</h2>
            <p>
              <MdOutlineHome />
              <Link href="/">
                <span>HOME</span>
              </Link>{" "}
              <FaChevronRight />
              <span className={styles.active}>Shop</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.top}>
        <div className={styles.cat_dropdown}>
          <button>
            <BiCategory className={styles.icon} />
            CATEGORIES
          </button>

          <ul className={styles.ul}>
            <Link href="#Hemodialysis">
              <li>Hemodialysis Machines</li>
            </Link>
            <Link href="#ICU">
              {" "}
              <li>ICU Equipment</li>
            </Link>
            <Link href="#Operating_Theatre_Equipment">
              {" "}
              <li>Operating Theatre Equipment</li>
            </Link>
            <Link href="#Diagnostic_Imaging_Equipment">
              {" "}
              <li>Diagnostic Imaging Equipment</li>
            </Link>
            <Link href="#consumables">
              {" "}
              <li>All consumables</li>
            </Link>
            <Link href="/service">
              <li>Services</li>
            </Link>
          </ul>
        </div>
        <form className={styles.search} type="submit" onSubmit={handleSubmit}>
          <BsSearch className={styles.search_icon} />
          <input placeholder="Type and hit enter" onChange={handleInput} />
        </form>
        <div className={styles.cart_contact}>
          <Link href="/view-cart">
            {" "}
            <div className={styles.icon_container}>
              <BsCart4 className={styles.icon} />
            </div>
          </Link>
          <div className={styles.icon_container}>
            <RiAccountPinCircleFill className={styles.icon} />
          </div>
        </div>
      </div>

      <main className={styles.shop_main}>
        {loading ? (
          <div className={styles.loading}>
            <ThreeCircles
              height="100"
              width="100"
              color="#2843f5"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="three-circles-rotating"
              outerCircleColor=""
              innerCircleColor=""
              middleCircleColor=""
            />
          </div>
        ) : (
          <>
            <div className={styles.flash} id="Hemodialysis">
              <div className={styles.header}>
                <h3>
                  <IoIosFlash className={styles.icon} />
                  HEMODIALYSIS MACHINES
                </h3>
                <button>
                  <p>
                    View all <BsForwardFill className={styles.icon} />
                  </p>
                </button>
              </div>
              <div className={styles.products_container}>
                <CenterSlider />
              </div>
              <div className={styles.header}>
                <h3>
                  <IoIosFlash className={styles.icon} />
                  Hemodialysis Consumeables
                </h3>
              </div>
              <div className={styles.consumeables_container}>
                {products
                  .filter(
                    (filtered) =>
                      filtered.category === "hemodialysis consumeables"
                  )
                  .map((product) => {
                    return (
                      <div key={product.id}>
                        <Consumeables
                          id={product.id}
                          image={product.image}
                          productName={product.name}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className={styles.flash} id="ICU">
              <div className={styles.header}>
                <h3>
                  <BiCategory className={styles.icon} />
                  ICU EQUIPMENTS
                </h3>
                <button>
                  <p>
                    View all <BsForwardFill className={styles.icon} />
                  </p>
                </button>
              </div>
              <div className={styles.products_container}>
                <SimpleSlider />
              </div>
              <div className={styles.header}>
                <h3>
                  <IoIosFlash className={styles.icon} />
                  ICU Consumeables
                </h3>
              </div>
              <div className={styles.consumeables_container}>
                {products
                  .filter(
                    (filtered) => filtered.category === "ICU consumeables"
                  )
                  .map((product) => {
                    return (
                      <div key={product.id}>
                        <Consumeables
                          id={product.id}
                          image={product.image}
                          productName={product.name}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className={styles.sales_banner}>
              <div className={styles.banner1}></div>
              <div className={styles.banner2}>
                <div className={styles.image}>
                  <Image src="/images/sales.png" alt="banner2" width={900} height={900}/>
                </div>
              </div>
            </div>

            <div className={styles.flash} id="Diagnostic_Imaging_Equipment">
              <div className={styles.header}>
                <h3>
                  <BsGiftFill className={styles.icon} />
                  Diagnostic Imaging Equipment
                </h3>
                <button>
                  <p>
                    View all <BsForwardFill className={styles.icon} />
                  </p>
                </button>
              </div>
              <div className={styles.item_cards}>
                {products
                  .filter(
                    (filtered) =>
                      filtered.category === "Diagnostic Imaging Equipment"
                  )
                  .map((product) => {
                    return (
                      <div className={styles.item} key={product.id}>
                        <ItemCard
                          id={product.id}
                          image={product.image}
                          productName={product.name}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className={styles.flash} id="Operating_Theatre_Equipment">
              <div className={styles.header}>
                <h3>
                  <BsGiftFill className={styles.icon} />
                  Operating Theatre Equipment
                </h3>
                <button>
                  <p>
                    View all <BsForwardFill className={styles.icon} />
                  </p>
                </button>
              </div>
              <div className={styles.item_cards}>
                {products
                  .filter(
                    (filtered) =>
                      filtered.category === "Operating Theatre Equipment"
                  )
                  .map((product) => {
                    return (
                      <div className={styles.item} key={product.id}>
                        <ItemCard
                          id={product.id}
                          image={product.image}
                          productName={product.name}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className={styles.flash}>
              <div className={styles.header}>
                <h3>
                  <BiCategory className={styles.icon} />
                  Medical Consumeables
                </h3>
                <button>
                  <p>
                    View all <BsForwardFill className={styles.icon} />
                  </p>
                </button>
              </div>
              <div className={styles.consumeables_container}>
                {products
                  .filter(
                    (filtered) => filtered.category === "Medical Consumeables"
                  )
                  .map((product) => {
                    return (
                      <div key={product.id}>
                        <Consumeables
                          id={product.id}
                          image={product.image}
                          productName={product.name}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
            <section
              className={styles.short_message_wrapper}
              data-aos="zoom-in-right"
              data-aos-offset="50"
              data-aos-delay="10"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            >
              <ShortMessage
                header="Worldwide Delivery
"
                description="We offer competitive prices on our 100 million plus product any range.
"
              />
              <ShortMessage
                header="Safe Payment
"
                description="We offer competitive prices on our 100 million plus product any range.
"
              />
              <ShortMessage
                header="Shop With Confidence
"
                description="We offer competitive prices on our 100 million plus product any range.
"
              />
              <ShortMessage
                header="24/7 Support
"
                description="We offer competitive prices on our 100 million plus product any range.
"
              />
            </section>
          </>
        )}
      </main>
    </HeadFoot>
    </Layout>
  );
}
