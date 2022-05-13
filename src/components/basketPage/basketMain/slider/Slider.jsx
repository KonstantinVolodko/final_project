import { Carousel } from "./carousel/Carousel";
import React  from "react";
import styles from './Slider.module.scss'

export const Slider = ({
    products
}) => {

    return (
        <Carousel products={products}>
            <div className={styles.item1}>
            {
            products.map(el => {
                if(el.name === "Картофель из печи"){
                    return (
                        <div className={styles.itemContainer}>
                            <div>
                                <img src={el.image} alt="#" />
                            </div>
                            <div className={styles.name}>
                                {el.name}
                            </div>
                            <div className={styles.description}>
                                {el.description}
                            </div>
                            <button className={styles.btnPrice}>
                                {el.price} ₽
                            </button>
                        </div>
                        )
                    }
                })
            }
            </div>
            <div className={styles.item2}>
            {
            products.map(el => {
                if(el.name === "Куриные крылья"){
                    return (
                        <div className={styles.itemContainer}>
                            <div>
                                <img src={el.image} alt="#" />
                            </div>
                            <div className={styles.name}>
                                {el.name}
                            </div>
                            <div className={styles.description}>
                                {el.description}
                            </div>
                            <button className={styles.btnPrice}>
                                {el.price} ₽
                            </button>
                        </div>
                        )
                    }
                })
            }
            </div>
            <div className={styles.item3}>
            {
            products.map(el => {
                if(el.name === "Куриные кусочки"){
                    return (
                        <div className={styles.itemContainer}>
                            <div>
                                <img src={el.image} alt="#" />
                            </div>
                            <div className={styles.name}>
                                {el.name}
                            </div>
                            <div className={styles.description}>
                                {el.description}
                            </div>
                            <button className={styles.btnPrice}>
                                {el.price} ₽
                            </button>
                        </div>
                        )
                    }
                })
            }
            </div>
        </Carousel>
    )
}