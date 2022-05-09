import React from "react";
import styles from "./ProductsContainer.module.scss"
import { ProductInfo } from "../productInfo/ProductInfo";

export const ProductsContainer = ({
    products, setBasket, addedBasket
}) => {
    return (
        <div>
            <div className={styles.productsContainer}>
            {
                products.map(el => {
                    if(el.category === "pizza"){
                        return(
                            <ProductInfo 
                            img={el.image}
                            name={el.name}
                            description={el.description}
                            price={el.price}
                            setBasket={() => addedBasket(el)}
                            />
                        )
                    }
                })
            }
            </div>
            <div className={styles.sushiTitle}>Суши</div>
            <div className={styles.productsContainer}>
            {
                products.map(el => {
                    if(el.category === "sushi"){
                        return(
                            <ProductInfo 
                            img={el.image}
                            name={el.name}
                            description={el.description}
                            price={el.price}
                            setBasket={() => addedBasket(el)}
                            />
                        )
                    }
                })
            }
            </div>
            <div className={styles.sushiTitle}>Закуски</div>
            <div className={styles.productsContainer}>
            {
                products.map(el => {
                    if(el.category === "snack"){
                        return(
                            <ProductInfo 
                            img={el.image}
                            name={el.name}
                            description={el.description}
                            price={el.price}
                            setBasket={() => addedBasket(el)}
                            />
                        )
                    }
                })
            }
            </div>
            <div className={styles.sushiTitle}>Десерты</div>
            <div className={styles.productsContainer}>
            {
                products.map(el => {
                    if(el.category === "desserts"){
                        return(
                            <ProductInfo 
                            img={el.image}
                            name={el.name}
                            description={el.description}
                            price={el.price}
                            setBasket={() => addedBasket(el)}
                            />
                        )
                    }
                })
            }
            </div>
            <div className={styles.sushiTitle}>Напитки</div>
            <div className={styles.productsContainer}>
            {
                products.map(el => {
                    if(el.category === "drinks"){
                        return(
                            <ProductInfo 
                            img={el.image}
                            name={el.name}
                            description=""
                            price={el.price}
                            setBasket={() => addedBasket(el)}
                            />
                        )
                    }
                })
            }
            </div>
            <div className={styles.sushiTitle}>Соусы</div>
            <div className={styles.productsContainer}>
            {
                products.map(el => {
                    if(el.category === "sauce"){
                        return(
                            <ProductInfo 
                            img={el.image}
                            name={el.name}
                            description=""
                            price={el.price}
                            setBasket={() => addedBasket(el)}
                            />
                        )
                    }
                })
            }
            </div>

            <div className={styles.sushiTitle}>Комбо</div>
            <div className={styles.productsContainer}>
            {
                products.map(el => {
                    if(el.category === "combo"){
                        return(
                            <ProductInfo 
                            img={el.image}
                            name={el.name}
                            description={el.description}
                            price={el.price}
                            setBasket={() => addedBasket(el)}
                            />
                        )
                    }
                })
            }
            </div>
        </div>
    )
}