import React from "react";
import { BasicModal } from "../basicModal/BasicModal";
import styles from "./ProductInfo.module.scss"

export const ProductInfo = ({
    img, name, description, price, setBasket, setProducts, products, cheese, mushrooms, onion, pepper, setFiltered
}) => {

    // const changeFunction = () => {
    //     products.map((el) => {
    //         if(el.cheese === true){

    //         }
    //     })
    // }

    return(
        <div >
            <BasicModal 
                    img={img}
                    name={name}
                    description={description}
                    price={price}
                    setBasket={setBasket}
                    setProducts={setProducts}
                    products={products}
                    cheese={cheese}
                    mushrooms={mushrooms}
                    onionProps={onion}
                    pepperProps={pepper}
                    setFiltered={setFiltered}
                    />
        </div>
    )
}