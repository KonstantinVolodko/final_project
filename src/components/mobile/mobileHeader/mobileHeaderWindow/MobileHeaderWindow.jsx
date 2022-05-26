import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import menu from '../../../../icons/menu.svg'
import logo from '../../../../icons/logo.svg'
import crossIcoBlack from '../../../../icons/crossIcoBlack.svg'
import styles from './MobileHeaderWindow.module.scss'
import { Footer } from '../../../footer/Footer';
import { Link } from 'react-router-dom';

export const MobileHeaderWindow = () => {
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    </Box>
  );

  return (
    <div>
      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <button className={styles.btnOpen} onClick={toggleDrawer(anchor, true)}>
              <img src={menu} alt="#" />
            </button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
            <div className={styles.contentContainer}>
                <div className={styles.headerContainer}>
                    <Link to="/">
                    <div><img src={logo} alt="#" /></div>
                    </Link>
                    <button className={styles.btnClose} onClick={toggleDrawer(anchor, false)}>
                        <img src={crossIcoBlack} alt="#" />
                    </button>
                </div>
                <div className={styles.menuContainer}>
                    <Link className={styles.menuComponent} to="/AboutCompany">
                        <div>О компании</div>
                    </Link>
                    <Link className={styles.menuComponent} to="/licence">
                        <div>Пользовательское соглашение</div>
                    </Link> 
                </div>
            </div>
            
            <Footer></Footer>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}