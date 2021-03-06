import React, { useState } from "react";
import styles from './FilterWindowContainer.module.scss'
import crossIcoBlack from '../../../../icons/crossIcoBlack.svg'

export const FilterWindowContainer = ({
    filter, onClose
}) => {

    const [type, setType] = useState(5)
    
    return (
        <div>
            <div className={styles.crossContainer}>
                <div className={styles.filterTitle}>
                    Фильтры
                </div>
                <button onClick={onClose}><img src={crossIcoBlack} alt="#" /></button>
            </div>
            
            <div className={styles.btnContainer}>
                <button onClick={() => {
                    return(
                        setType(1),
                        filter(1)
                    )
                }} className={type === 1 ? styles.switchActive : styles.switch}>
                    Мясо
                </button>
                <button onClick={() => {
                    return(
                        setType(2),
                        filter(2)
                    )
                }} className={type === 2 ? styles.switchActive : styles.switch}>
                    Рыба
                </button>
                <button onClick={() => {
                    return(
                        setType(3),
                        filter(3)
                    )
                }} className={type === 3 ? styles.switchActive : styles.switch}>
                    Другое
                </button>
                <button onClick={() => {
                    return(
                        setType(0),
                        filter(0)
                    )
                }} className={type === 0 ? styles.switchActive : styles.switch}>
                    Очистить фильтр
                </button>
            </div>
            
        </div>
    )
}