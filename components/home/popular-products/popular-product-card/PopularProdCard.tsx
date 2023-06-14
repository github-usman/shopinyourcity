import React from "react";
import styles from  "./popularProductCard.module.css";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface ProductDetails {
  discount: number;
  img: string | StaticImageData;
  productName: string;
  category: string;
  rating: number;
  productPrice: number;
}

interface PopularProdCardProps {
  details: {
    discount: number;
    img: string | StaticImageData;
    productName: string;
    category: string;
    rating: number;
    productPrice: number;
  };
}


const PopularProdCard:React.FC<PopularProdCardProps> = ({ details }) => {
  return (
    <div className={styles.container}>
        <p className={styles.cardDiscountDeatils}>{details.discount}% Discount</p>
        <div className={styles.cardImgContainer}>
          <Image className={styles.cardImg} src={details.img}  alt={details.productName + details.category} ></Image>
        </div>
        <div className={styles.cardContentContainer}>
        <p className={styles.cardCategory}>{details.category}</p>
        <p className={styles.cardProductName}>{details.productName} </p>
        <p className={styles.productRaing}>{details.rating}</p>
        </div>
        <div className={styles.cardBtnContainer}>
          <p className={styles.productPrice}>{details.productPrice}₹</p>
          <Link href='/product-details' className={styles.checkoutBtn}>Checkout</Link>
        </div>
    </div>
  );
};

export default PopularProdCard;
