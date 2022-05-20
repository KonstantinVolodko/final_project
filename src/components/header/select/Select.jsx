import React from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuList from '@mui/material/MenuList';
import arrowDown from '../../../icons/arrowDown.svg'
import styles from "./Select.module.scss"
import { Link } from 'react-router-dom';


export const Select = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);


  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      
        <button  ref={anchorRef} className={styles.btn} onClick={handleToggle}>
            <span>Другое</span>
            <img src={arrowDown} alt="#" />
        </button>
    
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper className={styles.selectWindow}>
              <ClickAwayListener  onClickAway={handleClose}>
                <MenuList  id="split-button-menu" autoFocusItem>
                    <Link className={styles.aboutUs} to="/aboutCompany">
                        <div className={styles.aboutUsContainer}>О компании</div>
                    </Link>
                    <Link className={styles.licence} to="/licence">
                        <div>Пользовательское соглашение</div>
                    </Link>
                  
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}
