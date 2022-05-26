import React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import styles from "./BottomSlide.module.scss"
import { ProductInfoOther } from '../../productInfo/productInfoOther/ProductInfoOther';
import crossIcoBlack from '../../../icons/crossIcoBlack.svg'




export const BottomSlide = ({
  img, description, name, price, setBasket, setProducts, products, desctop, mobile
}) => {
  const [state, setState] = React.useState({
    bottom: false,
  });

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
                    <button onClick={setBasket}  className={styles.mobileProductButton}>от {price} ₽</button>
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
            <div className={styles.contentContainer}>
              <div className={styles.imgContainer}>
                <img src={img} alt="#" />
              </div>
              <div className={styles.nameContainer}>{name}</div>
              <div className={styles.descriptionContainer}>{description}</div>
              <button onClick={setBasket} className={styles.productButton}>Добавить в корзину за {price} ₽</button>
            </div>
            
          </div>
          
          
        </SwipeableDrawer>
      </React.Fragment>
    ))}
    </div>
      
    </div>
  );
}