import React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import styles from "./BasketWindow.module.scss"
import basketIco from "../../icons/basketIco.svg"
import { BasketWindowContainer } from './basketWindowContainer/BasketWindowContainer';

export const BasketWindow = ({
    getSum, basket, setBasket, addedBasket, mobile, desctop
}) => {
  const [state, setState] = React.useState({
    right: false,
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
      {desctop && 
      <div>
        {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
            <button onClick={toggleDrawer(anchor, true)} className={styles.basket}>
                <img className={styles.basketIco} src={basketIco} alt="#" />
                <div className={styles.basketTitle}>{getSum} ₽</div>
            </button>
          
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
            <BasketWindowContainer 
                basket={basket}
                getSum={getSum}
                setBasket={setBasket}
                addedBasket={addedBasket}
                onClose={toggleDrawer(anchor, false)}
                mobile={mobile}
                desctop={desctop}
            />
            
          </SwipeableDrawer>
        </React.Fragment>
      ))}
      </div>
      }
      {mobile &&
      <div>
      {['bottom'].map((anchor) => (
      <React.Fragment key={anchor}>
          <button onClick={toggleDrawer(anchor, true)} className={styles.basketMobile}>
              <img className={styles.basketIco} src={basketIco} alt="#" />
            </button>
        
        <SwipeableDrawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}
        >
          {list(anchor)}
          <div className={styles.height}>
          <BasketWindowContainer 
              basket={basket}
              getSum={getSum}
              setBasket={setBasket}
              addedBasket={addedBasket}
              onClose={toggleDrawer(anchor, false)}
              mobile={mobile}
              desctop={desctop}
          />
          </div>
          
          
        </SwipeableDrawer>
      </React.Fragment>
    ))}
    </div>
      }
      
    </div>
  );
}