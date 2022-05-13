import React, {useState} from "react";
import styles from './AboutUsForm.module.scss'

export const AboutUsForm = ({
    getSum
}) => {

    const [value, setValue] = useState(1);

    function chengeValue(event) {
        setValue(event.target.value);
    }

    return (
        <div className={styles.aboutUsForm}>
            <form className={styles.formContainer}>
                <fieldset  className={styles.nameContainer}>
                    <div className={styles.title}>О вас</div>
                    <div className={styles.titleInpContainer}>
                        <div>
                            <div className={styles.helpTitle}>
                                Имя*
                            </div>
                            <input required type="text" placeholder="Алексей"/>
                        </div>
                        <div>
                            <div className={styles.helpTitle}>
                                Номер телефона*
                            </div>
                            <input required type="number" placeholder="+7"/>
                        </div>
                        <div>
                            <div className={styles.helpTitle}>
                                Почта
                            </div>
                            <input type="text" placeholder="mail@gmail.com"/>
                        </div>
                    </div>
                    
                </fieldset>
                
                <fieldset>
                    <div className={styles.streetContainer}>
                        <div className={styles.title}>
                            Доставка
                        </div>
                        <div>
                            <div className={styles.helpTitle}>
                                Улица*
                            </div>
                            <input className={styles.street} required type="text" placeholder="Пушкина" />
                        </div>
                    </div>
                    
                    <div className={styles.homeContainer}>
                        <div>
                            <div className={styles.helpTitle}>
                                Дом
                            </div>
                            <input type="text" placeholder="1а" />
                        </div>
                        <div>
                            <div className={styles.helpTitle}>
                                Подъезд
                            </div>
                            <input type="number" placeholder="1" />
                        </div>
                        <div>
                            <div className={styles.helpTitle}>
                                Этаж
                            </div>
                            <input type="number" placeholder="2" />
                        </div>
                        <div>
                            <div className={styles.helpTitle}>
                                Квартира
                            </div>
                            <input type="number" placeholder="3" />
                        </div>
                        <div>
                            <div className={styles.helpTitle}>
                                Домофон
                            </div>
                            <input type="text" placeholder="0000" />
                        </div>
                    </div>
                </fieldset>
                
                <fieldset>
                    <div className={styles.timeTitle}>Когда можно выполнить заказ?</div>
                    <div className={styles.timeContainer}>
                        <div>
                            <input name="radio" value="1" type="radio" id="faster"
                            checked={value == '1' ? true : false}
                            onChange={chengeValue}/>
                            <label>Как можно скорее</label>
                        </div>
                        <div>
                            <input type="radio" name="radio" value="2"
                            checked={value == '2' ? true : false}
                            onChange={chengeValue} />
                            <label>По времени</label>
                        </div>
                    </div>

                    <div className={styles.payContainer}>
                        <div className={styles.titlePay}>
                            Оплата
                        </div>
                        <div className={styles.radioContainer}>
                            <div>
                                <input type="radio" />
                                <label>Наличными</label>
                            </div>
                            <div>
                                <input type="radio" />
                                <label>Картой</label>
                            </div>
                            <div>
                                <input type="radio" />
                                <label>ApplePay</label>
                            </div> 
                        </div>
                        
                    </div>
                    <div className={styles.cashbackContainer}>
                        <div className={styles.cashbackTitle}>
                            Сдача
                        </div>
                        <div className={styles.cashbackRadioContainer}>
                            <div>
                                <input type="radio" />
                                <label>Без сдачи</label>
                            </div>
                            <div>
                                <input type="radio" />
                                <label>Сдача с</label>
                            </div>
                            <input className={styles.cashbackInp} type="text" placeholder="0 ₽" />
                        </div>
                    </div>
                </fieldset>

                <fieldset className={styles.commentContainer}>
                    <div className={styles.commentTitle}>Комментарий</div>
                    <textarea className={styles.textArea} placeholder="Есть уточнения?"></textarea>
                </fieldset>

                <div className={styles.sendContainer}>
                    <div className={styles.finalPrice}>Итого: {getSum}</div>
                    <button>Оформить заказ</button>
                </div>
            </form>
        </div>
    )
}