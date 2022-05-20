import React, {useState} from 'react';
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
    img, description, name, price, setBasket, setProducts, products
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [dough, setDough] = useState('classic')
  const [size, setSize] = useState('20')
  const [mozarella, setMozarella] = useState(false)
  const [shamp, setShamp] = useState(false)
  const [onion, setOnion] = useState(false)
  const [pepper, setPepper] = useState(false)
  const [elPrice, setElPrice] = useState(price)

  const doppingFunction = (dopping) => {
    if(dopping === false) {
        products.map(el => {
            return(
                Number(el.price) + 59
            )
        })
    }else if (dopping === true) {
        products.map(el => {
            return(
                Number(el.price) + 59 - 59
            )
        })
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
          />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box  className={styles.modal}>
            <div className={styles.imgContainer}>
                <img src={img} alt="#" />
            </div>
            <div className={styles.titleContainer}>
                <div className={styles.cross} onClick={() => handleClose()}>
                    <div className={styles.crossItem}></div>
                    </div>
                <div>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.addContainer}>Выберите тесто</div>
                    <div className={styles.btnCategory}>
                        <div className={styles.switch}>
                            <input 
                            type="radio" 
                            value={dough}
                            name="dough"
                            checked={dough == "classic"}
                            onClick={() => {
                                setDough("classic");
                              }}
                              />
                            <label>Традиционное</label>
                        </div>
                        <div className={styles.switch}>
                            <input
                            type="radio" 
                            value={dough}
                            name="dough"
                            checked={dough == "thin"}
                            onClick={() => {
                                setDough("thin");
                              }} />
                            <label>Тонкое</label>
                        </div>
                    </div>
                    <div className={styles.addContainer}>Выберите размер</div>
                    <div className={styles.btnSizeContainer}>    
                        <div className={styles.btnSize}>
                            <input 
                            type="radio" 
                            value={size}
                            name="20"
                            checked={size == "20"}
                            onClick={() => {
                                setSize("20");
                              }}
                            />
                            <label>20 см</label>
                        </div>
                        <div className={styles.btnSize}>
                            <input
                            type="radio" 
                            value={size}
                            name="20"
                            onClick={() => {
                                setSize("28");
                                return (
                                    price = Number(price) + (Number(price) * 0.3)
                                )
                              }}
                            />
                            <label>28 см</label>
                        </div>
                        <div className={styles.btnSize}>
                            <input
                            type="radio" 
                            value={size}
                            name="20"
                            onClick={() => {
                                setSize("33");
                              }}
                            />
                            <label>33 см</label>
                        </div>
                    </div>
                </div>
                <div className={styles.addContainer}>Добавьте в пиццу</div>
                <div className={styles.doppingContainer}>
                    <div>
                        <div className={styles.btnDopping}>
                            <input type="checkbox" 
                            onChange={(e) => {
                                return(
                                    setMozarella(e.target.checked),
                                    doppingFunction(mozarella)
                                ) 
                            }}
                            />
                            <label><img src={mozarellaIco} alt="#" /></label>
                        </div>
                        <div className={styles.doppingName}>Моцарелла</div>
                        <div className={styles.doppingPrice}>59 ₽</div>
                    </div>
                    <div>
                        <div className={styles.btnDopping}>
                            <input type="checkbox" 
                            onChange={(e) => {
                                return(
                                    setShamp(e.target.checked),
                                    doppingFunction(shamp)
                                ) 
                            }}
                            />
                            <label><img src={mashroomsIco} alt="#" /></label>
                        </div>
                        <div className={styles.doppingName}>Шампиньоны</div>
                        <div className={styles.doppingPrice}>59 ₽</div>
                    </div>
                    <div>
                        <div className={styles.btnDopping}>
                            <input type="checkbox" 
                            onChange={(e) => {
                                return(
                                    setOnion(e.target.checked),
                                    doppingFunction(onion)
                                ) 
                            }}
                            />
                            <label><img src={onionIco} alt="#" /></label>
                        </div>
                        <div className={styles.doppingName}>Красный лук</div>
                        <div className={styles.doppingPrice}>59 ₽</div>
                    </div>
                    <div>
                        <div className={styles.btnDopping}>
                            <input type="checkbox" 
                            onChange={(e) => {
                                return(
                                    setPepper(e.target.checked),
                                    doppingFunction(pepper)
                                ) 
                            }}
                            />
                            <label><img src={pepperIco} alt="#" /></label>
                        </div>
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