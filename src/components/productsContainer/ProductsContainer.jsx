import React from "react";
import styles from "./ProductsContainer.module.scss"
import { ProductInfo } from "../productInfo/ProductInfo";
import filterIco from "../../icons/filterIco.svg"

export const ProductsContainer = ({
    products, setBasket, addedBasket
}) => {
    return (
        <div>
            <div name="pizza" className={styles.filterContainer}>
                <div className={styles.pizzaTitle}>Пицца</div>
                <button className={styles.btnFilter}>
                    <img src={filterIco} alt="#" />
                    <span>Фильтры</span>
                </button>
            </div>
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
            <div name="sushi" className={styles.sushiTitle}>Суши</div>
            <div  className={styles.productsContainer}>
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
            <div name="snack" className={styles.sushiTitle}>Закуски</div>
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
            <div name="desserts" className={styles.sushiTitle}>Десерты</div>
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
            <div name="drinks" className={styles.sushiTitle}>Напитки</div>
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
            <div name="sauce" className={styles.sushiTitle}>Соусы</div>
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

            <div name="combo" className={styles.sushiTitle}>Комбо</div>
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