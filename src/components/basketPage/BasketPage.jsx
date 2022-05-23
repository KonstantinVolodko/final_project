import React from "react";
import { BasketMain } from "./basketMain/BasketMain";
import { Footer } from "../footer/Footer"
import { AdoptedHeader } from "../adoptedPage/adoptedHeader/AdoptedHeader";

export const BasketPage = ({
    basket, getSum, products, addedBasket, setBasket, promo, setPromo, filtered
}) => {

    return (
        <div>
            <AdoptedHeader
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
            filtered={filtered}
            />

            <Footer />
        </div>
    )
}