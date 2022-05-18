import React from "react";
import { BasketHeader } from "./basketHeader/BasketHeader";
import { BasketMain } from "./basketMain/BasketMain";
import { Footer } from "../footer/Footer"

export const BasketPage = ({
    basket, getSum, products, addedBasket, setBasket, promo, setPromo
}) => {

    console.log(addedBasket)

    return (
        <div>
            <BasketHeader
            basket={basket}
            getSum={getSum}
            />

            <BasketMain 
            basket={basket}
            getSum={getSum}
            products={products}
            setBasket={setBasket}
            addedBasket={addedBasket}
            promo={promo}
            setPromo={setPromo}
            />

            <Footer />
        </div>
    )
}