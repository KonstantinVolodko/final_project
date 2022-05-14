import React from "react";
import Slider from "react-slick";
import '../../../../../../node_modules/slick-carousel/slick/slick.css'
import '../../../../../../node_modules/slick-carousel/slick/slick-theme.css'
import styles from './SliderSouce.module.scss'


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

export const SliderSouce = ({
    products
}) => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

    return (
        <div>

<Slider className={styles.slider} {...settings}>
            {
                    products.map(el => {
                        if(el.category === "sauce"){
                            return (
                                <div>
                                    <div className={styles.itemContainer}>
                                        <div>
                                            <img src={el.image} alt="#" />
                                        </div>
                                        <div className={styles.name}>
                                            {el.name}
                                        </div>
                                        <div className={styles.description}>
                                            
                                        </div>
                                        <button className={styles.btnPrice}>
                                            {el.price} ₽
                                        </button>
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