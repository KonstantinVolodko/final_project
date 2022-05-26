import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import styles from "./MainBottomSlide.module.scss"

import crossIcoBlack from "../../../icons/crossIcoBlack.svg"
import { DoppingSlider } from './doppingSlider/DoppingSlider';

export const MainBottomSlide = ({
    img, description, name, price, setBasket, setProducts, products, cheese, mushrooms, onionProps, pepperProps, setFiltered, desctop, mobile
}) => {
  const [state, setState] = React.useState({
    bottom: false,
  });

  const [dough, setDough] = useState(true)
  const [size, setSize] = useState(0)
  const [size20, setSize20] = useState(true)
  const [size28, setSize28] = useState(false)
  const [size33, setSize33] = useState(false)
  const [mozarella, setMozarella] = useState(false)
  const [shamp, setShamp] = useState(false)
  const [onion, setOnion] = useState(false)
  const [pepper, setPepper] = useState(false)

  


    const doppingFunction = (doppingState, dopping) => {
        if (doppingState === false) { 
            let a = products.filter(e => {
                if(e.name === name){
                    e.description = description + dopping
                    e.price = Number(price) + 59     
                }     
            })
            setProducts([...products, ...a])
        }else{
            let b = products.filter(e => {
                if(e.name === name){
                    let c = description.replace(`${dopping}`, '')
                    e.description = c
                    e.price = Number(price) - 59
                }
            })
            setProducts([...products, ...b])
        }
    }

    const doughFunction = (doughState) => {
        if(doughState === true) {
            let a = products.filter(e => {
                if(e.name === name){
                    e.description = description + e.doughWeight
                }
            })
            setProducts([...products, ...a])
        }else{
            let b = products.filter(e => {
                if(e.name === name){
                    let c = description.replace(`${e.doughWeight}`, '')
                    e.description = c
                }
            })
            setProducts([...products, ...b])
        }
    }


    const sizeFunction1 = (sizeState, pizzaSize) => {
        if(sizeState === false){
            let a = products.filter(e => {
                if(e.name === name){
                    e.description = description + pizzaSize
                    e.price = Number(price) + 100
                }
            })
            setProducts([...products, ...a])
        }else{
            let c = products.filter(e => {
                if(e.name === name){
                    let g = description.replace(`${pizzaSize}`, '')
                    e.description = g
                    e.price = Number(price) - 100
                }
            })
            setProducts([...products, ...c])
        }
    }

    const sizeFunction2 = (sizeState, pizzaSize) => {
        if(sizeState === false){
            let a = products.filter(e => {
                if(e.name === name){
                    e.description = description + pizzaSize
                    e.price = Number(price) + 150
                }
            })
            setProducts([...products, ...a])
        }else{
            let c = products.filter(e => {
                if(e.name === name){
                    let g = description.replace(`${pizzaSize}`, '')
                    e.description = g
                    e.price = Number(price) - 150
                }
            })
            setProducts([...products, ...c])
        }
    }

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 420 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    > 
    </Box>
  );

  return (
    <div>
      <div>
      {['bottom'].map((anchor) => (
      <React.Fragment key={anchor}>
          <div >
          <div className={styles.mobileMainContainer}>
                <div onClick={toggleDrawer(anchor, true)} className={styles.mobileImgContainer}>
                    <img className={styles.mobileProductImage} src={img} alt="#" />
                </div>
                <div className={styles.mobileProductTitle}>
                    <div onClick={toggleDrawer(anchor, true)} className={styles.mobileProductName}>{name}</div>
                    <div onClick={toggleDrawer(anchor, true)} className={styles.mobileProductDescription}>{description}</div>
                    <button onClick={toggleDrawer(anchor, true)}  className={styles.mobileProductButton}>от {price} ₽</button>
                </div>
            </div>
          </div>
        
        <SwipeableDrawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}
        >
          {list(anchor)}
          <div className={styles.height}>
              <div className={styles.crossContainer}><button onClick={toggleDrawer(anchor, false)}><img src={crossIcoBlack} alt="#" /></button></div>
              <div className={styles.modal}>
              <div className={styles.imgContainer}>
                <img className={size20 === true ? styles.smallImg : size28 === true ? styles.mediumImg : size33 === true ? styles.bigImg : styles.imgItem} src={img} alt="#" />
            </div>
            <div className={styles.titleContainer}>
                <div className={styles.contentContainer}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.description}>{description}</div>
                    <div className={styles.addContainer}>Выберите тесто</div>
                    <div className={styles.btnCategory}>
                        <button onClick={() => {
                            return(
                                setDough(true),
                                doughFunction(dough)
                            )
                        }} className={dough === true ? styles.switchActive : styles.switch}>Традиционное</button>
                        <button onClick={() => {
                            return(
                                setDough(false),
                                doughFunction(dough)
                            )
                        }} className={dough === false ? styles.switchActive : styles.switch}>Тонкое</button>
                    </div>
                    <div className={styles.addContainer}>Выберите размер</div>
                    <div className={styles.btnSizeContainer}>    
                        <button disabled={size28 === true || size33 === true} onClick={() => {
                            return(
                                // setSize(0),
                                // sizeFunction(size, ' 20 см'),
                                setSize20(current => !current)
                            )
                        }} className={size20 === true ? styles.btnSizeActive : styles.btnSize}>
                            20 см
                        </button>
                        <button disabled={size20 === true || size33 === true} onClick={() => {
                            return(
                                // setSize(1),
                                sizeFunction1(size28, ' 28 см'),
                                setSize28(current => !current)
                            )
                        }} className={size28 === true ? styles.btnSizeActive : styles.btnSize}>
                            28 см
                        </button>
                        <button disabled={size28 === true || size20 === true} onClick={() => {
                            return(
                                // setSize(2),
                                sizeFunction2(size33, ' 33 см'),
                                setSize33(current => !current)
                            )
                        }} className={size33 === true ? styles.btnSizeActive : styles.btnSize}>
                            33 см
                        </button>
                    </div>
                </div>
                <div className={styles.addContainer}>Добавьте в пиццу</div>
                <div className={styles.slider}>
                <DoppingSlider  
                mozarella={mozarella}
                setMozarella={setMozarella}
                shamp={shamp}
                setShamp={setShamp}
                onion={onion}
                setOnion={setOnion}
                pepper={pepper}
                setPepper={setPepper}
                doppingFunction={doppingFunction}
                cheese={cheese}
                mushrooms={mushrooms}
                onionProps={onionProps}
                pepperProps={pepperProps}
                />
                </div>
                
                <div className={styles.priceContainer}>
                    <div className={styles.price}>Итого: {price} ₽</div>
                    <button onClick={() => setBasket()}>Добавить</button>
                </div>
            </div>
              </div>
          </div>
          
          
        </SwipeableDrawer>
      </React.Fragment>
    ))}
    </div>
      
    </div>
  );
}