import React from "react";
import Slider from "react-slick";
import "../../../../node_modules/slick-carousel/slick/slick.css"
import "../../../../node_modules/slick-carousel/slick/slick-theme.css"
import styles from "./MainMenuSlider.module.scss"
import Link from "react-scroll/modules/components/Link";
import pizzaIco from "../../../icons/pizzaIco.svg"
import sushiIco from '../../../icons/sushiIco.svg'
import coctailIco from '../../../icons/coctailIco.svg'
import snacksIco from '../../../icons/snacksIco.svg'
import comboIco from '../../../icons/comboIco.svg'
import dessertsIco from '../../../icons/dessertsIco.svg'
import sauceIco from '../../../icons/sauceIco.svg'



export const MainMenuSlider = ({
    products, setBasket, addedBasket, bigMobile
}) => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
      };

    return (
        <div>
            <Slider className={styles.slider} {...settings}>
            
            <Link to="pizza">
            <button className={styles.btnPizza}>
                <img src={pizzaIco} alt="#" />
                <span>Пицца</span>
            </button>
            </Link>
            <Link to="sushi">
            <button className={styles.btnSushi}>
                <img src={sushiIco} alt="#" />
                <span>Суши</span>
            </button>
            </Link>
            <Link to="drinks">
            <button className={styles.btnCoctails}>
                <img src={coctailIco} alt="#" />
                <span>Напитки</span>
            </button>
            </Link>
            <Link to="snack">
            <button className={styles.btnSnacks}>
                <img src={snacksIco} alt="#" />
                <span>Закуски</span>
            </button>
            </Link>
            <Link to="combo">
            <button className={styles.btnCombo}>
                <img src={comboIco} alt="#" />
                <span>Комбо</span>
            </button>
            </Link>
            <Link to="desserts">
            <button className={styles.btnDesserts}>
                <img src={dessertsIco} alt="#" />
                <span>Десерты</span>
            </button>
            </Link>
            <Link to="sauce">
            <button className={styles.btnSauce}>
                <img src={sauceIco} alt="" />
                <span>Соусы</span>
            </button>
            </Link>
            
           

            </Slider>


        </div>
    )
}