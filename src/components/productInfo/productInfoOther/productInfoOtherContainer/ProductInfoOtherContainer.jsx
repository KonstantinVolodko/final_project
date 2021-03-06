import React from "react";
import styles from "./ProductInfoOtherContainer.module.scss"

export const ProductInfoOtherContainer = ( {
    img, name, description, price, setBasket, handleOpen, desctop, mobile
}) => {


    // 

    return (
        <div>
            {desctop && 
            <div  className={styles.mainContainer}>
                <div className={styles.imgContainer}>
                    <img onClick={handleOpen} className={styles.productImage} src={img} alt="#" />
                </div>
                <div className={styles.productTitle}>
                    <div onClick={handleOpen} className={styles.productName}>{name}</div>
                    <div onClick={handleOpen} className={styles.productDescription}>{description}</div>
                    <div className={styles.priceContainer}>
                        <button onClick={() => setBasket()} className={styles.productButton}>Выбрать</button>
                        <div onClick={handleOpen} className={styles.price}>от {price} ₽</div>
                    </div>
                </div>
            </div>
            }

            {/* {mobile && 
            <div className={styles.mobileMainContainer}>
                <div onClick={handleOpen} className={styles.mobileImgContainer}>
                    <img className={styles.mobileProductImage} src={img} alt="#" />
                </div>
                <div className={styles.mobileProductTitle}>
                    <div onClick={handleOpen} className={styles.mobileProductName}>{name}</div>
                    <div onClick={handleOpen} className={styles.mobileProductDescription}>{description}</div>
                    <button onClick={() => setBasket()} className={styles.mobileProductButton}>от {price} ₽</button>
                </div>
            </div>
            } */}
        </div>
        
    )
}