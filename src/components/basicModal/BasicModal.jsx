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
    img, description, name, price, setBasket, setProducts, products, cheese, mushrooms, onionProps, pepperProps, setFiltered
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [dough, setDough] = useState(0)
  const [size, setSize] = useState(0)
  const [mozarella, setMozarella] = useState(false)
  const [shamp, setShamp] = useState(false)
  const [onion, setOnion] = useState(false)
  const [pepper, setPepper] = useState(false)


//   const doppingFunction = (dopping) => {
//     if(dopping === false) {
//         products.map(el => {
//             return(
//                 Number(el.price) + 59
//             )
//         })
//     }else if (dopping === true) {
//         products.map(el => {
//             return(
//                 Number(el.price) + 59 - 59
//             )
//         })
//     }
//   }


    // const doppingFunction = (dopping) => {
    //     if (dopping === false) {
    //         description = description + '+ fassaf'
    //         price = Number(price) + 49
    //         console.log(price)
    //         console.log(description)
    //         console.log('нажато')
            
    //     }else{
    //         description = description + ''
    //         price = Number(price) - 49 + 49
    //         console.log(price)
    //         console.log(description)
    //         console.log('не нажато')
    //     }
    // }

    const doppingFunction = (dopping) => {
        if (dopping === false) {    
            products.map((e) => {
                if(e.name === name){
                    e.description = description + '+ выбранный доппинг'
                    e.price = Number(price) + 59
                }
            })
            setProducts()
        }else{
            products.map((e) => {
                if(e.name === name){
                    e.description = description + ''
                    e.price = Number(price) + 59 - 59
                }
            })
            setProducts()
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
                    <div className={styles.description}>{description}</div>
                    <div className={styles.addContainer}>Выберите тесто</div>
                    <div className={styles.btnCategory}>
                        <button onClick={() => setDough(0)} className={dough === 0 ? styles.switchActive : styles.switch}>Традиционное</button>
                        <button onClick={() => setDough(1)} className={dough === 1 ? styles.switchActive : styles.switch}>Тонкое</button>
                    </div>
                    <div className={styles.addContainer}>Выберите размер</div>
                    <div className={styles.btnSizeContainer}>    
                        <button onClick={() => setSize(0)} className={size === 0 ? styles.btnSizeActive : styles.btnSize}>
                            20 см
                        </button>
                        <button onClick={() => setSize(1)} className={size === 1 ? styles.btnSizeActive : styles.btnSize}>
                            28 см
                        </button>
                        <button onClick={() => setSize(2)} className={size === 2 ? styles.btnSizeActive : styles.btnSize}>
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
                                doppingFunction(mozarella)
                            )
                        }} className={mozarella === true ? styles.btnDoppingActive : styles.btnDopping}>
                            <img src={mozarellaIco} alt="#" />
                        </button>
                        <div className={styles.doppingName}>Моцарелла</div>
                        <div className={styles.doppingPrice}>59 ₽</div>
                    </div>
                    <div>
                        <button onClick={() => setShamp(current => !current)} className={shamp === true ? styles.btnDoppingActive : styles.btnDopping}>                  
                            <img src={mashroomsIco} alt="#" />
                        </button>
                        <div className={styles.doppingName}>Шампиньоны</div>
                        <div className={styles.doppingPrice}>59 ₽</div>
                    </div>
                    <div >
                        <button onClick={() => setOnion(current => !current)} className={onion === true ? styles.btnDoppingActive : styles.btnDopping}>     
                            <img src={onionIco} alt="#" />
                        </button>
                        <div className={styles.doppingName}>Красный лук</div>
                        <div className={styles.doppingPrice}>59 ₽</div>
                    </div>
                    <div>
                        <button onClick={() => setPepper(current => !current)} className={pepper === true ? styles.btnDoppingActive : styles.btnDopping}>
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