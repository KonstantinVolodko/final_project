import React from "react";
import { AdoptedHeader } from "../adoptedPage/adoptedHeader/AdoptedHeader";
import { Footer } from "../footer/Footer";
import styles from './AboutCompany.module.scss';
import diagramma from '../../images/diagramma.svg'
import washHandForm from '../../images/washHandForm.svg'
import { MobileHeader } from "../mobile/mobileHeader/MobileHeader";

export const AboutCompany = ({
    getSum, basket, desctop, mobile
}) => {

    return (
        <div>
            {desctop && 
            <AdoptedHeader 
            getSum={getSum}
            basket={basket}
            />
            }
            {mobile && 
            <MobileHeader />
            }
            
            <div className={styles.contentContainer}>
                <div className={styles.firstContainer}>
                    <h1>Мы</h1>
                    <p>Обычно люди приходят в Куда Пиццу, чтобы просто поесть. Наши промоутеры раздают листовки про кусочек пиццы за один рубль или ещё что-то выгодное. Мы делаем это как первый шаг, чтобы познакомиться.</p>
                    <p>Но для нас КудаПицца — не только пицца. Это и пицца тоже, но в первую очередь это большое дело, которое вдохновляет нас, заставляет каждое утро просыпаться и с интересом продолжать работу.</p>
                    <p>В чём же наш интерес? Сейчас расскажем.</p>
                </div>
                <div className={styles.secondContainer}>
                    <h1>Идеальные ингредиенты</h1>
                    <p>Почему мы так хотим познакомиться? Потому что дальше пицца делает всё сама. Люди видят, что она вкусная, и возвращаются снова. Нам главное первый раз это показать.</p>
                    <p>Вообще пицца — очень простая штука, её сложно испортить. Достаточно хороших ингредиентов и правильного теста. Это конструктор, если детали качественные, то и результат будет в порядке. Вот они, наши детали:</p>
                    <div className={styles.blockContainer}>
                        <div className={styles.block}>
                            <div className={styles.blockTitle}>Тесто</div>
                            <div className={styles.blockText}>Самая тонкая вещь. Главное - сделать его «живым». Это целый квест из граммов, градусов, процентов и часов с минутами. Процесс непростой, но у нас получается!</div>
                        </div>
                        <div className={styles.block}>
                            <div className={styles.blockTitle}>Моцарелла</div>
                            <div className={styles.blockText}>Сыр в пицце - ключевой ингредиент. Мы используем настоящую моцареллу от российских поставщиков. Сыр должен тянуться, как на картинке.</div>
                        </div>
                        <div className={styles.block}>
                            <div className={styles.blockTitle}>Начинка</div>
                            <div className={styles.blockText}>Есть два главных правила вкусной начинки: не экономить на начинке; фанатично соблюдать режим хранения. Это и весь секрет.</div>
                        </div>
                        <div className={styles.block}>
                            <div className={styles.blockTitle}>Томатный соус</div>
                            <div className={styles.blockText}>Главное, что нужно знать про хороший томатный соус: он должен быть сделан из томатов. Звучит логично, но задумайтесь!</div>
                        </div>
                    </div>
                </div>
                <div className={styles.thirdContainer}>
                    <h1>Одинаково вкусно в Москве и Сыктывкаре</h1>
                    <p>Кто угодно может сделать вкусную пиццу. А шеф-повар итальянского ресторана сделает и вовсе шедевр. Он молодец. Но представьте, что вам нужно сделать вкусную пиццу в сотнях пиццерий, за сотни километров друг от друга. Это наш случай, у нас их вон уже сколько:</p>
                    <div className={styles.diagrammaContainer}><img src={diagramma} alt="#" /></div>
                    <p>Пицца должна быть вкусной и везде одинаковой. Пиццерии должны быть одинаково уютными, кассиры неизменно приветливыми, а курьеры — расторопными.</p>
                    <p>И это как раз сложно. Но мы умеем!</p>
                </div>
                <div className={styles.fourContainer}>
                    <h1>Единые стандарты</h1>
                    <p>Цифровые технологии помогают нам вовремя замечать, если что-то идёт неправильно. Но как понять, что правильно, а что нет? Для этого у нас есть стандарты. Вот, например, про мытьё рук:</p>
                    <div className={styles.washContainer}><img src={washHandForm} alt="#" /></div>
                    <p>Наши стандарты — это не какие-то заумные схемы и формулы, а супер-понятные правила. У нас их сотни, буквально про всё. Именно так мы умудряемся делать всё хорошо и одновременно быстро расти.</p>
                </div>
                <div className={styles.fiveContainer}>
                    <h1>Открытость во всём</h1>
                    <p>Кто угодно может написать сотню правил, но само по себе это не работает. Нужна сила, благодаря которой стандарты будут соблюдаться. Для нас этой силой стала открытость. Мы сделали всё настолько прозрачным, что отступать от стандартов просто не получается.</p>
                    <p>В чём конкретно это проявляется?</p>
                    <div className={styles.bigBlock}>
                        <div className={styles.bigBlockTitle}>Открытая кухня</div>
                        <div className={styles.helperBlock}>
                        <div className={styles.helperTitle}>
                            <div>Cтеклянные стены</div>
                            <div>Экскурсии</div>
                            <div className={styles.webCamera}>Веб-камеры</div>
                        </div>
                        <div className={styles.helperText}>
                            <div>Нет потайных уголков, все процессы на кухне всегда перед глазами.</div>
                            <div>Регулярно одеваем детей и взрослых в халаты и шапочки, чтобы показать все изнутри.</div>
                            <div>Каждая кухня непрерывно транслирует картинку с нескольких камер прямо на наш сайт.</div>
                        </div>
                        </div>
                    </div>

                    <div className={styles.bigBlock}>
                        <div className={styles.bigBlockTitle}>Публичный контроль</div>
                        <div className={styles.helperBlock}>
                        <div className={styles.helperTitle}>
                            <div>Тайные покупатели</div>
                            <div>Инспекторы чистоты</div>
                            <div className={styles.rating}>Рейтинг</div>
                        </div>
                        <div className={styles.helperText}>
                            <div>Мы выбираем их из числа тайных покупателей и наделяем особыми полномочиями. Самые строгие ребята.</div>
                            <div>Это не какие-то проффессиональные наемники, а специальный клуб, собранный из наших клиентов. Их тысячи и они неподкупны.</div>
                            <div>По результатам проверок каждую неделю обновляется рейтинг пиццерий. Его видят все партнеры. За низкий рейтинг можно лишиться франшизы.</div>
                        </div>
                        </div>
                    </div>


                    <div className={styles.bigBlock}>
                        <div className={styles.bigBlockTitle}>Прозрачный бизнес</div>
                        <div className={styles.helperBlock}>
                        <div className={styles.helperTitle}>
                            <div>День директора</div>
                            <div>Онлайн встречи</div>
                            <div>Финансовая отчетность</div>
                        </div>
                        <div className={styles.helperText}>
                            <div>В праздничные дни наши директора становятся за кассы, чтобы помочь коллегам и заодно лучше понять клиентов.</div>
                            <div>Каждый понедельник мы начинаем с коротких докладов о нновостях, результатах и планах, которые сразу появляются в открытом доступе.</div>
                            <div>Наш любимый вопрос: «Сколько?». Благодаря КудаПицца ИС у нас в любой момент есть точные ответы. Мы честно их публикуем.</div>
                        </div>
                        </div>
                    </div>

                    <p className={styles.finalText}>Именно открытость заставляет нас выполнять обещания, соблюдать стандарты и работать строго в рамках закона. Но открытость для нас — не просто модный тренд. Это наше глубокое убеждение, философия и ценность, которую мы хотим нести миру.</p>
                </div>
            </div>
            
            <Footer />
            
        </div>
    )
}