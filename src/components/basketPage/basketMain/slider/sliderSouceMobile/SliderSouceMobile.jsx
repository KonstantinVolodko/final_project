import React from "react";
import Slider from "react-slick";
import '../../../../../../node_modules/slick-carousel/slick/slick.css'
import '../../../../../../node_modules/slick-carousel/slick/slick-theme.css'
import styles from './SliderSouceMobile.module.scss'


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className={styles.arrowRight}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className={styles.arrowLeft}
      onClick={onClick}
    />
  );
}


export const SliderSouceMobile = ({
    products, setBasket, addedBasket
}) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
      };


    return (
        <div>
            <Slider className={styles.slider} {...settings}>
            {
                    products.map(el => {
                        if(el.category === "sauce"){
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