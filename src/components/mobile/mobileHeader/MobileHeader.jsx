import React from "react";
import logo from '../../../icons/logo.svg'
import { MobileHeaderWindow } from "./mobileHeaderWindow/MobileHeaderWindow";
import styles from './MobileHeader.module.scss'

export const MobileHeader = () => {
    return (
        <div className={styles.mobileHeader}>
            <div><img src={logo} alt="#" /></div>
            <div><MobileHeaderWindow /></div>
        </div>
    )
}