import React, { useState } from "react";
import styles from './FilterWindowContainer.module.scss'

export const FilterWindowContainer = ({
    filter
}) => {

    const [type, setType] = useState('all')
    
    return (
        <div>
            <div className={styles.filterTitle}>
                Фильтры
            </div>
            <div className={styles.btnContainer}>
                <div className={styles.switch}>
                    <input 
                    type="radio" 
                    value={type}
                    name="type"
                    checked={type == "meat"}
                    onClick={() => {
                        setType("meat");
                        filter('meat')
                        }}
                    />
                    <label>Мясо</label>
                </div>
                <div className={styles.switch}>
                    <input 
                    type="radio" 
                    value={type}
                    name="fish"
                    checked={type == "fish"}
                    onClick={() => {
                        setType("fish");
                        filter('fish')
                        }}
                    />
                    <label>Рыба</label>
                </div>
                <div className={styles.switch}>
                    <input 
                    type="radio" 
                    value={type}
                    name="other"
                    checked={type == "other"}
                    onClick={() => {
                        setType("other");
                        filter('other')
                        }}
                    />
                    <label>Другое</label>
                </div>
                <div className={styles.switch}>
                    <input 
                    type="radio" 
                    value={type}
                    name="all"
                    checked={type == "all"}
                    onClick={() => {
                        filter('all');
                        setType("all")
                        }}
                    />
                    <label>Очистить фильтр</label>
                </div>
            </div>
            
        </div>
    )
}