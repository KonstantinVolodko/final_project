import React from "react";
import { BasicModal } from "../basicModal/BasicModal";
import styles from "./ProductInfo.module.scss"

export const ProductInfo = ({
    img, name, description, price, setBasket, setProducts, products
}) => {
    return(
        <div>
            <BasicModal 
                    img={img}
                    name={name}
                    description={description}
                    price={price}
                    setBasket={setBasket}
                    setProducts={setProducts}
                    products={products}
                    />
        </div>
    )
}