import React from "react";
import Slider from "react-slick";
import '../../../../../../node_modules/slick-carousel/slick/slick.css'
import '../../../../../../node_modules/slick-carousel/slick/slick-theme.css'
import styles from './SliderMobile.module.scss'



export const SliderMobile = ({
    products, setBasket, addedBasket, bigMobile
}) => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
      };

    return (
        <div>
            <Slider className={styles.slider} {...settings}>
            {
                    products.map(el => {
                        if(el.category === "snack"){
                            return (
                                <div className={styles.sliderWidth}>
                                    <div className={styles.itemContainer}>
                                        <div>
                                            <img src={el.image} alt="#" />
                                        </div>
                                        <div className={styles.textContainer}>
                                            <div className={styles.name}>
                                                {el.name}
                                            </div>
                                            <button onClick={() => addedBasket(el)} className={styles.btnPrice}>
                                                {el.price} ₽
                                            </button>
                                        </div>
                                        
                                    </div>
                                </div>
                        
                        )
                    }
                })
            }
           

            </Slider>


        </div>
    )
}