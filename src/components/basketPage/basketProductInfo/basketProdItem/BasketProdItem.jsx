import React, {useRef} from "react";
import styles from './BasketProdItem.module.scss'
import { newCount } from "../../../../constants/Helper";


export const BasketProdItem = ({
    basket, setBasket, image, id, count, name, description, price, addedBasket
}) => {

    const refInput = useRef()
    

    const changeInput = (e) => {
        const text = e.target.value;
        
        setBasket(newCount(basket, id, Number(text)))
    }

    const increment = () => {
        setBasket(newCount(basket, id, Number(refInput.current.value = count + 1)))
    }

    const decreament = () => {
        setBasket(newCount(basket, id, Number(refInput.current.value = count - 1)))
        if(count <= 1) {
            setBasket(basket.filter(e => e.id !== id))
        }
    }

    return (
        <div className={styles.prodContainer}>
                        <div className={styles.content}>
                            <div>
                                <img src={image} alt="#" />
                            </div>
                            <div className={styles.nameContainer}>
                                <div className={styles.name}>{name}</div>
                                <div className={styles.description}>{description}</div>
                            </div>
                        </div>
                        <div className={styles.buttonContainer}>
                            <div className={styles.addContainer}>
                                <button className={styles.minus} onClick={() => decreament()}>-</button>
                                <div><input disabled ref={refInput} onChange={changeInput}  type="text" min="1" value={count} /></div>
                                <button className={styles.minus} onClick={() => increment()}>+</button>
                            </div>
                            <button className={styles.deleteBtn} onClick={() => setBasket(basket.filter(e => e.id !== id))}>Удалить</button>
                            <div className={styles.price}>{price * count} ₽</div>
                        </div>
                        </div>
    )
}