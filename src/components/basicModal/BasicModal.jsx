import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from './BasicModal.module.scss'
import mashroomsIco from '../../icons/mashroomsIco.svg'
import onionIco from '../../icons/onionIco.svg'
import pepperIco from '../../icons/pepperIco.svg'
import mozarellaIco from '../../icons/mozarellaIco.svg'
import crossIco from '../../icons/crossIco.svg'
import { ProductInfoContainer } from '../productInfo/productInfoContainer/ProductInfoContainer';


export const BasicModal = ({
    img, description, name, price, setBasket, setProducts, products, cheese, mushrooms, onionProps, pepperProps, setFiltered, desctop, mobile
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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


  const addFunction = () => {
    return(
        setBasket(),
        handleClose()
    )
  }


  return (
    <div>
      <div onClick={handleOpen}>
          <ProductInfoContainer 
          img={img}
          name={name}
          description={description}
          price={price}
          desctop={desctop}
          mobile={mobile}
          />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box  className={styles.modal}>
            <div className={styles.imgContainer}>
                <img className={size20 === true ? styles.smallImg : size28 === true ? styles.mediumImg : size33 === true ? styles.bigImg : styles.imgItem} src={img} alt="#" />
            </div>
            <div className={styles.titleContainer}>
                <div className={styles.cross} onClick={() => handleClose()}>
                    <div className={styles.crossItem}></div>
                    </div>
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
                <div className={styles.doppingContainer}>
                    <div>
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
                    <div>
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
                    <div >
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
                    <div>
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
                </div>
                <div className={styles.priceContainer}>
                    <div className={styles.price}>Итого: {price} ₽</div>
                    <button onClick={() => addFunction()}>Добавить</button>
                </div>
            </div>
        </Box>
      </Modal>
    </div>
  );
}