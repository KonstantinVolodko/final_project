import React, { useState, useEffect, useRef } from "react";
import styles from "./ProductsContainer.module.scss"
import { ProductInfo } from "../productInfo/ProductInfo";
import { ProductInfoOther } from "../productInfo/productInfoOther/ProductInfoOther";
import { FilterWindow } from "./filterWindow/FilterWindow";
import { ProductInfoOtherContainer } from "../productInfo/productInfoOther/productInfoOtherContainer/ProductInfoOtherContainer";

export const ProductsContainer = ({
    products, addedBasket, setProducts
}) => {

    const [filtered, setFiltered] = useState([])
    const [valueInp, setValueInp] = useState('')

    const textInput = useRef()

    const findProd = filtered.filter(prod => {
        return prod.name.toLowerCase().includes(valueInp.toLowerCase())
    })

    useEffect(() => {
        const timer = setTimeout(() => {
          setFiltered(products)
        }, 1000);
        return () => clearTimeout(timer);
      }, []);

    const filter = (status) => {
        if(status === 'meat') {
            let newProducts = [...products].filter(item => item.type === status)
            setFiltered(newProducts)
        }else if (status === 'fish') {
            let newProducts = [...products].filter(item => item.type === status)
            setFiltered(newProducts)
        }else if (status === 'other') {
            let newProducts = [...products].filter(item => item.type === status)
            setFiltered(newProducts)
        }else if (status === 'all') {
            setFiltered(products)
        }
    }

    return (
        <div>
            <div name="pizza" className={styles.filterContainer}>
                <div className={styles.pizzaTitle}>Пицца</div>
                <input className={styles.search} type="text" placeholder="Поиск" onChange={(event) => setValueInp(event.target.value)}/>
                <div className={styles.btnFilter}>
                    <FilterWindow 
                    filter={filter}
                    products={products}
                    />
                </div>
            </div>
            <div className={styles.productsContainer}>
            {
                findProd.map(el => {
                    if(el.category === "pizza"){
                        return(
                            <ProductInfo 
                            img={el.image}
                            name={el.name}
                            description={el.description}
                            price={el.price}
                            setBasket={() => addedBasket(el)}
                            setProducts={setProducts}
                            products={products}
                            id={el.id}
                            />
                        )
                    }
                })
            }
            </div>
            <div name="sushi" className={styles.sushiTitle}>Суши</div>
            <div  className={styles.productsContainer}>
            {
                findProd.map(el => {
                    if(el.category === "sushi"){
                        return(
                            <ProductInfoOther 
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
                findProd.map(el => {
                    if(el.category === "snack"){
                        return(
                            <ProductInfoOther 
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
                findProd.map(el => {
                    if(el.category === "desserts"){
                        return(
                            <ProductInfoOther 
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
                findProd.map(el => {
                    if(el.category === "drinks"){
                        return(
                            <ProductInfoOther 
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
                findProd.map(el => {
                    if(el.category === "sauce"){
                        return(
                            <ProductInfoOther 
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
                findProd.map(el => {
                    if(el.category === "combo"){
                        return(
                            <ProductInfoOther 
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