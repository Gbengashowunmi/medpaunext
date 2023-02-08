import { Button } from "@mui/material";
import data from "components/Data";
import HeadFoot from "components/HeadFoot/HeadFoot/HeadFoot";
import ItemCard from "components/ItemCard/ItemCard";
import Layout from "components/Layout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./productDetail.module.scss";

export default function ProductDetail() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data);
  }, []);

  const router = useRouter();
  const { id } = router.query;
  const [product] = data.filter((singleProduct) => singleProduct.id === +id);
  console.log(product.image);
  return (
    <Layout title="Medpau Shop" description="the-dynamic-description">
      <HeadFoot>
        <div className={styles.product_page}>
          <section className={styles.hero_section}>
            <div className={styles.product_img}>
              <div className={styles.main_img}>
                <Image
                  width={900}
                  height={900}
                  src={product.image}
                  alt="product"
                  className={styles.img}
                />
              </div>
            </div>
            <div className={styles.product_info}>
              <h2>{product.name}</h2>
              <p>
                Brand: <span>Ziaomi</span>
              </p>
              <p>
                Decsription:{" "}
                <span>
                  APC Smart UPS is for uninterruptible power supply protection
                  and management solutions. This UPS power supply provides
                  protection from power surges, load shedding and unpredictable
                  weather conditions during dialysis in the home or facility.
                </span>
              </p>
              {/* <p>
              Rated: <span> (50)</span>
            </p> */}
              {/* <h4 className={styles.price">$1135.00</h4> */}
              <p>Stock Available</p>
              <Link
                href={`api.whatsapp.com/send?phone=2349085323596&text=Hi+MedPau+International.+I'm+interested+in+buyng+${product.name}.+How+much+does+it+cost?`}
                target="_blank"
              >
                <Button variant="contained" className={styles.addtocart_btn}>
                  Place Order
                </Button>
              </Link>
            </div>
          </section>
          <div className={styles.head}>
            <p>Description</p>
            {/* <p>Review</p> */}
          </div>
          <hr />

          <div className={styles.specification}>
            <h3>Specification:</h3>
            <p>Brand: Beats</p>
            <p>Model: S450</p>
            <p>Wireless Bluetooth Headset</p>
            <p>FM Frequency Response: 87.5 - 108 MHz</p>
            <p>
              Feature: FM Radio, Card Supported (Micro SD / TF) Made in China
            </p>
          </div>
          {/* <div className={styles.reviews">
        <div className={styles.review">
        <div className={styles.user-details">
<div className={styles.user-img"> <img src="" alt="user-avi" />
<div className={styles.user-info">
  <h4>Jannie Schumm</h4>
  <p>Rating <span>2.0 years ago</span></p>
</div>

</div>
        </div>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.</p>
        </div>
      </div> */}
          <div className={styles.related_products}>
            <h3>Related Products</h3>
            <div className={styles.item_cards}>
              {products
                .filter(
                  (eachProduct) => eachProduct.category === product.category
                )
                .map((relatedProduct) => (
                  <div className={styles.item} key={relatedProduct.id}>
                    <ItemCard
                      id={relatedProduct.id}
                      image={relatedProduct.image}
                      productName={relatedProduct.name}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </HeadFoot>
    </Layout>
  );
}
