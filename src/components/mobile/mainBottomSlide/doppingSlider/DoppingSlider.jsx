import React from "react";
import Slider from "react-slick";
import '../../../../../node_modules/slick-carousel/slick/slick.css'
import '../../../../../node_modules/slick-carousel/slick/slick-theme.css'
import mashroomsIco from '../../../../icons/mashroomsIco.svg'
import onionIco from '../../../../icons/onionIco.svg'
import pepperIco from '../../../../icons/pepperIco.svg'
import mozarellaIco from '../../../../icons/mozarellaIco.svg'
import styles from './DoppingSlider.module.scss'


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


export const DoppingSlider = ({
    mozarella, setMozarella, shamp, setShamp, onion, setOnion, pepper, setPepper, doppingFunction, cheese, mushrooms, onionProps, pepperProps
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
                    <div className={styles.a}>
                        <button onClick={() => {
                            return(
                                setMozarella(current => !current),
                                doppingFunction(mozarella, cheese)
                            )
                        }} className={mozarella === true ? styles.btnDoppingActive : styles.btnDopping}>
                            <img src={mozarellaIco} alt="#" />
                        </button>
                        <div className={styles.doppingName}>Моцарелла</div>
                        <div className={styles.doppingPrice}>59 ₽</div>
                    </div>
                    <div className={styles.a}>
                        <button onClick={() => {
                            return(
                                setShamp(current => !current),
                                doppingFunction(shamp, mushrooms)
                            )
                        }} className={shamp === true ? styles.btnDoppingActive : styles.btnDopping}>                  
                            <img src={mashroomsIco} alt="#" />
                        </button>
                        <div className={styles.doppingName}>Шампиньоны</div>
                        <div className={styles.doppingPrice}>59 ₽</div>
                    </div>
                    <div className={styles.a}>
                        <button onClick={() => {
                            return(
                                setOnion(current => !current),
                                doppingFunction(onion, onionProps)
                            )
                        }} className={onion === true ? styles.btnDoppingActive : styles.btnDopping}>     
                            <img src={onionIco} alt="#" />
                        </button>
                        <div className={styles.doppingName}>Красный лук</div>
                        <div className={styles.doppingPrice}>59 ₽</div>
                    </div>
                    <div className={styles.a}>
                        <button onClick={() => {
                            return(
                                setPepper(current => !current),
                                doppingFunction(pepper, pepperProps)
                            )
                        }} className={pepper === true ? styles.btnDoppingActive : styles.btnDopping}>
                            <img src={pepperIco} alt="#" />
                        </button>
                        <div className={styles.doppingName}>Сладкий перец</div>
                        <div className={styles.doppingPrice}>59 ₽</div>
                    </div>
            </Slider>


        </div>
    )
}
