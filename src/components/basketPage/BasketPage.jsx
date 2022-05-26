import React from "react";
import { BasketMain } from "./basketMain/BasketMain";
import { Footer } from "../footer/Footer"
import { AdoptedHeader } from "../adoptedPage/adoptedHeader/AdoptedHeader";
import { MobileHeader } from "../mobile/mobileHeader/MobileHeader";

export const BasketPage = ({
    basket, getSum, products, addedBasket, setBasket, promo, setPromo, filtered, desctop, mobile
}) => {

    return (
        <div>
            {desctop && 
            <AdoptedHeader
            basket={basket}
            getSum={getSum}
            />
            }
            
            {mobile &&
            <MobileHeader
            />
            }
            

            <BasketMain 
            basket={basket}
            getSum={getSum}
            products={products}
            setBasket={setBasket}
            addedBasket={addedBasket}
            promo={promo}
            setPromo={setPromo}
            filtered={filtered}
            desctop={desctop}
            mobile={mobile}
            />

            <Footer />
        </div>
    )
}