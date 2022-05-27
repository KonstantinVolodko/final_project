import React, { useState, useEffect, useRef } from "react";
import styles from "./ProductsContainer.module.scss"
import { ProductInfo } from "../productInfo/ProductInfo";
import { ProductInfoOther } from "../productInfo/productInfoOther/ProductInfoOther";
import { FilterWindow } from "./filterWindow/FilterWindow";
import { ProductInfoOtherContainer } from "../productInfo/productInfoOther/productInfoOtherContainer/ProductInfoOtherContainer";

export const ProductsContainer = ({
    products, addedBasket, setProducts, desctop, mobile
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
        if(status === 1) {
            let newProducts = [...products].filter(item => item.type === 'meat')
            setFiltered(newProducts)
        }else if (status === 2) {
            let newProducts = [...products].filter(item => item.type === 'fish')
            setFiltered(newProducts)
        }else if (status === 3) {
            let newProducts = [...products].filter(item => item.type === 'other')
            setFiltered(newProducts)
        }else if (status === 0) {
            setFiltered(products)
        }
    }

    return (
        <div className={styles.prodContainer}>
            {mobile &&
            <div className={styles.mobileSearch}>
                <input  type="text" placeholder="Поиск" onChange={(event) => setValueInp(event.target.value)}/>
            </div>
            }
            <div name="pizza" className={styles.filterContainer}>
                
                <h1 className={styles.pizzaTitle}>Пицца</h1>
                {desctop &&
                <input className={styles.search} type="text" placeholder="Поиск" onChange={(event) => setValueInp(event.target.value)}/>
                }
                <div className={styles.btnFilter}>
                    <FilterWindow 
                    filter={filter}
                    products={products}
                    desctop={desctop}
                    mobile={mobile}
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
                            cheese={el.cheese}
                            mushrooms={el.mushrooms}
                            onion={el.onion}
                            pepper={el.pepper}
                            setFiltered={setFiltered}
                            desctop={desctop}
                            mobile={mobile}
                            />
                        )
                    }
                })
            }
            </div>
            <h1 name="sushi" className={styles.sushiTitle}>Суши</h1>
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
                            desctop={desctop}
                            mobile={mobile}
                            />
                        )
                    }
                })
            }
            </div>
            <h1 name="snack" className={styles.sushiTitle}>Закуски</h1>
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
                            desctop={desctop}
                            mobile={mobile}
                            />
                        )
                    }
                })
            }
            </div>
            <h1 name="desserts" className={styles.sushiTitle}>Десерты</h1>
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
                            desctop={desctop}
                            mobile={mobile}
                            />
                        )
                    }
                })
            }
            </div>
            <h1 name="drinks" className={styles.sushiTitle}>Напитки</h1>
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
                            desctop={desctop}
                            mobile={mobile}
                            />
                        )
                    }
                })
            }
            </div>
            <h1 name="sauce" className={styles.sushiTitle}>Соусы</h1>
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
                            desctop={desctop}
                            mobile={mobile}
                            />
                        )
                    }
                })
            }
            </div>

            <h1 name="combo" className={styles.sushiTitle}>Комбо</h1>
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
                            desctop={desctop}
                            mobile={mobile}
                            />
                        )
                    }
                })
            }
            </div>
        </div>
    )
}