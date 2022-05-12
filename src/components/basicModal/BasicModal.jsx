import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from './BasicModal.module.scss'
import mashroomsIco from '../../icons/mashroomsIco.svg'
import onionIco from '../../icons/onionIco.svg'
import pepperIco from '../../icons/pepperIco.svg'
import mozarellaIco from '../../icons/mozarellaIco.svg'
import crossIco from '../../icons/crossIco.svg'




export const BasicModal = ({
    img, description, name, price, setBasket
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addFunction = () => {
    return(
        setBasket(),
        handleClose()
        
    )
  }


  return (
    <div>
      <button className={styles.productButton}  onClick={handleOpen}>Выбрать</button>
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
                <div className={styles.cross} onClick={() => handleClose()}><img src={crossIco} alt="#" /></div>
                <div>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.addContainer}>Выберите тесто</div>
                    <div className={styles.btnCategory}>
                        <div className={styles.switch}>
                            <input type="checkbox" />
                            <label>Традиционное</label>
                        </div>
                        <div className={styles.switch}>
                            <input type="checkbox" />
                            <label>Тонкое</label>
                        </div>
                    </div>
                    <div className={styles.addContainer}>Выберите размер</div>
                    <div className={styles.btnSizeContainer}>    
                        <div className={styles.btnSize}>
                            <input type="checkbox" />
                            <label>20 см</label>
                        </div>
                        <div className={styles.btnSize}>
                            <input type="checkbox" />
                            <label>28 см</label>
                        </div>
                        <div className={styles.btnSize}>
                            <input type="checkbox" />
                            <label>33 см</label>
                        </div>
                    </div>
                </div>
                <div className={styles.addContainer}>Добавьте в пиццу</div>
                <div className={styles.doppingContainer}>
                    <div>
                        <div className={styles.btnDopping}>
                            <input type="checkbox" />
                            <label><img src={mozarellaIco} alt="#" /></label>
                        </div>
                        <div className={styles.doppingName}>Моцарелла</div>
                        <div className={styles.doppingPrice}>59 ₽</div>
                    </div>
                    <div>
                        <div className={styles.btnDopping}>
                            <input type="checkbox" />
                            <label><img src={mashroomsIco} alt="#" /></label>
                        </div>
                        <div className={styles.doppingName}>Шампиньоны</div>
                        <div className={styles.doppingPrice}>59 ₽</div>
                    </div>
                    <div>
                        <div className={styles.btnDopping}>
                            <input type="checkbox" />
                            <label><img src={onionIco} alt="#" /></label>
                        </div>
                        <div className={styles.doppingName}>Красный лук</div>
                        <div className={styles.doppingPrice}>59 ₽</div>
                    </div>
                    <div>
                        <div className={styles.btnDopping}>
                            <input type="checkbox" />
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