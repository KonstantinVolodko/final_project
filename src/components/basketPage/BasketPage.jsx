import React from "react";
import { BasketHeader } from "./basketHeader/BasketHeader";
import { BasketMain } from "./basketMain/BasketMain";
import { Footer } from "../footer/Footer"

export const BasketPage = ({
    basket, getSum, products
}) => {

    console.log(basket)

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
            />

            <Footer />
        </div>
    )
}