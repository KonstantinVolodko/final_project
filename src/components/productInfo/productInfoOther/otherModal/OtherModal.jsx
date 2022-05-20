import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from './OtherModal.module.scss'
import crossIco from '../../../../icons/crossIco.svg'
import { ProductInfoOther } from '../ProductInfoOther';
import { ProductInfoOtherContainer } from '../productInfoOtherContainer/ProductInfoOtherContainer';





export const OtherModal = ({
    img, description, name, price, setBasket, setProducts, products
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
      <div >
      <ProductInfoOtherContainer
        img={img}
        name={name}
        description={description}
        price={price}
        setBasket={setBasket}
        handleOpen={handleOpen}
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
                    <button className={styles.btnPrice} onClick={() => addFunction()}>Добавить в корзину за {price} ₽</button>
                </div>
                    
            </div>
        </Box>
      </Modal>
    </div>
  );
}