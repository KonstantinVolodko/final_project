import React from "react";
import styles from './ProductInfoOther.module.scss'
import { OtherModal } from './otherModal/OtherModal'


export const ProductInfoOther = ({
    img, name, description, price, setBasket
}) => {


    return (
        <div>
            <OtherModal
            img={img}
            name={name}
            description={description}
            price={price}
            setBasket={setBasket}
            // setProducts={setProducts}
            // products={products}
            />
        </div>
    )
}