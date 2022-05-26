import React from "react";
import { BasicModal } from "../basicModal/BasicModal";
import { MainBottomSlide } from "../mobile/mainBottomSlide/MainBottomSlide";
import styles from "./ProductInfo.module.scss"

export const ProductInfo = ({
    img, name, description, price, setBasket, setProducts, products, cheese, mushrooms, onion, pepper, setFiltered, desctop, mobile
}) => {

    return(
        <div >
            {desctop &&
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
                    desctop={desctop}
                    mobile={mobile}
                    />
            }
            {mobile && 
            <MainBottomSlide 
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
                    desctop={desctop}
                    mobile={mobile}
            />
            }
        </div>
    )
}