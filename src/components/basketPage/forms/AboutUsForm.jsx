import React, {useState, useEffect} from "react";
import styles from './AboutUsForm.module.scss'
import { Link } from "react-router-dom";

export const AboutUsForm = ({
    getSum, basketPrice, basket, setBasket
}) => {

    const [tripType, setTripType] = useState("oneWay");

    const [pay, setPay] = useState('nal');

    const [cashBack, setCashBack] = useState('changeWith')

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [street, setStreet] = useState('')
    const [nameDirty, setNameDirty] = useState(false)
    const [phoneDirty, setPhoneDirty] = useState(false)
    const [streetDirty, setStreetDirty] = useState(false)
    const [nameError, setNameError] = useState('Введите имя')
    const [phoneError, setPhoneError] = useState('Введите номер')
    const [streetError, setStreetError] = useState('Введите адрес')
    const [formValid, setFormValid] = useState(false)

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break
            case 'phone':
                setPhoneDirty(true)
                break
            case 'street':
                setStreetDirty(true)
                break
        }
    }

    const nameHandler = (e) => {
        setName(e.target.value)
        let validCharactersRegex = /[A-Za-zА-Яа-яЁё]+(\s+[A-Za-zА-Яа-яЁё]+)?/;
        if(!validCharactersRegex.test((e.target.value).trim())) {
            setNameError('Некорректное имя')
        }else {
            setNameError('')
        }
    }

    const phoneHandler = (e) => {
        setPhone(e.target.value)
        if (e.target.value.length < 7 || e.target.value.length > 15 ) {
            setPhoneError('Некорректный номер')
            if(!e.target.value) {
                setPhoneError('')
            }
        }else {
            setPhoneError('')
        }
    }

    const streetHandler = (e) => {
        setStreet(e.target.value)
        if (e.target.value.length < 3) {
            setStreetError('Некорректный адрес')
            if(!e.target.value) {
                setStreetError('')
            }
        }else {
            setStreetError('')
        }
    }

    useEffect(() => {
        if(nameError || phoneError || streetError) {
            setFormValid(false)
        }else{
            setFormValid(true)
        }
    }, [nameError, phoneError, streetError])


    const clearBasket = () => {
        return(
            basket.length = 0,
            getSum()
        )
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
                            {(nameDirty && nameError) && <div className={styles.errorContainer}>{nameError}</div>}
                            <input onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} name="name" type="text" placeholder="Алексей"/>
                        </div>
                        <div>
                            <div className={styles.helpTitle}>
                                Номер телефона*
                            </div>
                            {(phoneDirty && phoneError) && <div className={styles.errorContainer}>{phoneError}</div>}
                            <input onChange={e => phoneHandler(e)} value={phone} onBlur={e => blurHandler(e)} name="phone" className={styles.inp}  type="number" placeholder="+7"/>
                        </div>
                        <div>
                            <div className={styles.helpTitle}>
                                Почта
                            </div>
                            <input type="text" min="2" max="30" placeholder="mail@gmail.com"/>
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
                            {(streetDirty && streetError) && <div className={styles.errorContainer}>{streetError}</div>}
                            <input onChange={e => streetHandler(e)} value={street} onBlur={e => blurHandler(e)} name="street" className={styles.street} type="text" placeholder="Пушкина" />
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
                            <input className={styles.inp} type="number" placeholder="1" />
                        </div>
                        <div>
                            <div className={styles.helpTitle}>
                                Этаж
                            </div>
                            <input className={styles.inp} type="number" placeholder="2" />
                        </div>
                        <div>
                            <div className={styles.helpTitle}>
                                Квартира
                            </div>
                            <input className={styles.inp} type="number" placeholder="3" />
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
                        <div className={styles.inpContainer}>
                            <input className={styles.faster}
                            type="radio"
                            value={tripType}
                            name="tripType"
                            checked={tripType == "oneWay"}
                            onClick={() => {
                                setTripType("oneWay");
                              }}
                            />
                            <label >Как можно скорее</label>
                        </div>
                        <div className={styles.inpContainer}>
                            <input className={styles.faster}
                            type="radio"
                            value={tripType}
                            name="tripType"
                            checked={tripType == "roundTrip"}
                            onClick={() => {
                                setTripType("roundTrip");
                              }}
                            />
                            <div className={styles.selected}>
                            <select disabled={tripType !== "roundTrip"} class='form-select' aria-label="Default select example">
                                <option disabled selected>По времени</option>
                                <option value="1">Через час</option>
                                <option value="2">Через полтора часа</option>
                                <option value="3">Через два часа</option>
                            </select>
                            </div>
                            
                        </div>
                    </div>

                    <div className={styles.payContainer}>
                        <div className={styles.titlePay}>
                            Оплата
                        </div>
                        <div className={styles.radioContainer}>
                            <div className={styles.inpContainer}>
                                <input className={styles.faster}
                                type="radio"
                                value={pay}
                                name="pay"
                                checked={pay == "nal"}
                                onClick={() => {
                                    setPay("nal");
                                  }}
                                />
                                <label>Наличными</label>
                            </div>
                            <div className={styles.inpContainer}>
                                <input className={styles.faster}
                                type="radio"
                                value={pay}
                                name="pay"
                                checked={pay == "card"}
                                onClick={() => {
                                    setPay("card");
                                  }}
                                />
                                <label>Картой</label>
                            </div>
                            <div className={styles.inpContainer}>
                                <input className={styles.faster}
                                type="radio"
                                value={pay}
                                name="pay"
                                checked={pay == "apple"}
                                onClick={() => {
                                    setPay("apple");
                                  }}
                                />
                                <label>ApplePay</label>
                            </div> 
                        </div>
                        
                    </div>
                    <div className={styles.cashbackContainer}>
                        <div className={styles.cashbackTitle}>
                            Сдача
                        </div>
                        <div className={styles.cashbackRadioContainer}>
                            <div className={styles.inpContainer}>
                                <input className={styles.faster}
                                type="radio"
                                value={cashBack}
                                name="cashBack"
                                checked={cashBack == "changeWith"}
                                onClick={() => {
                                    setCashBack("changeWith");
                                  }}
                                />
                                <label>Без сдачи</label>
                            </div>
                            <div className={styles.inpContainer}>
                                <input className={styles.faster}
                                type="radio"
                                value={cashBack}
                                name="cashBack"
                                checked={cashBack == "changeOut"}
                                onClick={() => {
                                    setCashBack("changeOut");
                                  }}
                                />
                                <label>Сдача с</label>
                            </div>
                            <input disabled={cashBack !== 'changeOut'} className={styles.cashbackInp} type="text" placeholder="0 ₽" />
                        </div>
                    </div>
                </fieldset>

                <fieldset className={styles.commentContainer}>
                    <div className={styles.commentTitle}>Комментарий</div>
                    <textarea className={styles.textArea} placeholder="Есть уточнения?"></textarea>
                </fieldset>

                <div className={styles.sendContainer}>
                    <div className={styles.finalPrice}>Итого: {getSum} ₽</div>
                    <Link className={styles.linkSend} to='/adopted'>
                    <button onClick={() => clearBasket()} disabled={!formValid}>
                        Оформить заказ
                    </button></Link>
                    
                    
                </div>
            </form>
        </div>
    )
}