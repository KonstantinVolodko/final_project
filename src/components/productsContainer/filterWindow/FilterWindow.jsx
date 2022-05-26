import React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import styles from "./FilterWindow.module.scss"
import filterIco from "../../../icons/filterIco.svg"
import { FilterWindowContainer } from './filterWindowContainer/FilterWindowContainer';

export const FilterWindow = ({
    filter, products, mobile, desctop
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
            <button onClick={toggleDrawer(anchor, true)} className={styles.btnFilter}>
                    <img src={filterIco} alt="#" />
                    <span>Фильтры</span>
            </button>
            
          
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
            <FilterWindowContainer 
            filter={filter}
            products={products}
            onClose={toggleDrawer(anchor, false)}
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
            <button onClick={toggleDrawer(anchor, true)} className={styles.btnFilter}>
                    <img src={filterIco} alt="#" />
                    <span>Фильтры</span>
            </button>
            
          
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
            <div className={styles.height}>
            <FilterWindowContainer 
            filter={filter}
            products={products}
            onClose={toggleDrawer(anchor, false)}
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