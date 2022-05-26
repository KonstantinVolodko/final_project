import React from "react";
import styles from './ProductInfoOther.module.scss'
import { OtherModal } from './otherModal/OtherModal'
import { BottomSlide } from "../../mobile/bottomSlide/BottomSlide";



export const ProductInfoOther = ({
    img, name, description, price, setBasket, mobile, desctop
}) => {


    return (
        <div>
            {desctop &&
            <OtherModal
            img={img}
            name={name}
            description={description}
            price={price}
            setBasket={setBasket}
            desctop={desctop}
            mobile={mobile}
            // setProducts={setProducts}
            // products={products}
            />
            }
            {mobile && 
            <BottomSlide 
            img={img}
            name={name}
            description={description}
            price={price}
            setBasket={setBasket}
            desctop={desctop}
            mobile={mobile}
            />
            }
        </div>
    )
}