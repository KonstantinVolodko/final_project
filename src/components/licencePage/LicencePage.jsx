import React from "react";
import { AdoptedHeader } from "../adoptedPage/adoptedHeader/AdoptedHeader";
import { Footer } from "../footer/Footer";
import styles from './LicencePage.module.scss'
import { MobileHeader } from "../mobile/mobileHeader/MobileHeader";

export const LicencePage = ({
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
                <h1>Договор публичной оферты о продаже товаров интернет-магазина KudaPizza</h1>
                <h2>1. Общие положения, термины и определения</h2>
                <p >1.1. ООО «Лёгкий ужин», именуемое в дальнейшем «Продавец», в лице директора Попроцкого Р.И., действующего на основании Устава, публикует договор публичной оферты о продаже товаров интернет-магазина pzz.by, представленный на интернет-сайте Продавца pzz.by.</p>
                <p>1.2. Настоящий договор определяет порядок ведения Продавцом розничной купли-продажи Товара через интернет-магазин в соответствии со ст. 405 Гражданского кодекса Республики Беларусь (далее ГК РБ) и является публичной офертой Продавца, адресуемой неопределенному кругу физических лиц являющихся как резидентами, так и нерезидентами Республики Беларусь.</p>
                <p>1.3. К отношениям между Продавцом и Покупателем (далее по тексту – Стороны) применяются положения параграфа 2 главы 30 ГК РБ (Розничная купля-продажа), а также требования Законов Республики Беларусь от 08.01.2014 N 128-З «О государственном регулировании торговли и общественного питания в Республике Беларусь», от 09.01.2002 №90-3 «О защите прав потребителей», Правила продажи товаров при осуществлении розничной торговли по образцам, утвержденные Постановлением Совета Министров Республики Беларусь от 15.01.2009 № 31 и иные нормативные правовые акты Республики Беларусь, регулирующие вопросы розничной купли-продажи.</p>
                <p>1.4. В случае принятия условий настоящего договора (т.е. публичной оферты), физическое лицо, производящее Акцепт этой Оферты, становится Покупателем. Оплата Товара Покупателем в соответствии с условиями договора является Акцептом Оферты, что считается равносильным заключению Договора на условиях, изложенных в Оферте (п.3 ст. 408 ГК РБ).</p>
                <p>1.5. Продавец и Покупатель гарантируют, что обладают необходимой право- и дееспособностью, а также всеми правами и полномочиями, необходимыми и достаточными для заключения и исполнения Договора розничной купли-продажи Товара.</p>
                <p>1.6. Покупатель обязуется до момента заключения Договора ознакомиться с содержанием и условиями Договора, Товарами и ценами на Товар, предлагаемыми Продавцом в интернет-магазине.</p>
                <p>1.7.Осуществляя Заказ Товара через интернет-магазин, Покупатель принимает и безоговорочно соглашается со всеми условиями, изложенными в Договоре, а также с информацией, размещенной на Сайте интернет-магазина в момент оформления Заказа.</p>
                <h2>2. Предмет договора</h2>
                <p>2.1. Продавец продает Товар в соответствии с действующими условиями, опубликованными на интернет-сайте Продавца pzz.by, а Покупатель производит оплату и принимает Товар в соответствии с условиями настоящего Договора.</p>
                <p>2.2. Настоящий Договор является официальным документом Продавца и неотъемлемой частью оферты. Действующая версия настоящего Договора размещена на интернет-сайте Продавца pzz.by.</p>
                <p>2.3. Покупатель приобретает Товар для собственного потребления.</p>
                <p>2.4. Право собственности на Товары переходит к Покупателю в момент приемки Товаров Покупателем и оплаты последним полной стоимости принятых Товаров. Риск случайной гибели или повреждения Товаров переходит к Покупателю с момента приемки Товаров Покупателем.</p>
                <p>2.5 Продавец оставляет за собой право вносить изменения в условия настоящей Оферты, цены на Товары, указанные в интернет-магазине, условия оплаты и доставки Товаров, способы, сроки и территорию доставки Товаров, а также в иные условия, указанные в настоящей Оферте и на Сайте.</p>
                <h2>3. Оформление Заказа</h2>
                <p>3.1. Заказ Покупателя может быть оформлен по телефону + 375 (29 /44/25) 755 66 55 или посредством заполнения электронной формы Заказа на Сайте pzz.by с понедельника по пятницу 00:00–03:00, 10:00–24:00; суббота 00:00–24:00; воскресенье 00:00–24:00.</p>
                <p>3.2. При оформлении Заказа по телефону или посредством электронной формы на Сайте, Покупатель тем самым подтверждает, что он ознакомлен с условиями настоящей Оферты и обязуется предоставить Продавцу всю информацию, необходимую для надлежащего оформления и исполнения Заказа.</p>
                <p>3.3. При оформлении Заказа по телефону или посредством электронной формы на Сайте Покупатель обязуется предоставить следующую регистрационную информацию о себе.</p>
                <p>3.4. При оформлении Заказа через Сайт Покупатель заполняет электронную форму Заказа и отправляет сформированный Заказ Продавцу в электронной форме посредством сети Интернет.</p>
                <p>3.5. Покупатель имеет право редактировать регистрационную информацию о себе. Продавец не изменяет и не редактирует регистрационную информацию о Покупателе без согласия последнего. Продавец обязуется не сообщать данные Покупателя, указанные при оформлении Заказа на Сайте pzz.by и при оформлении Заказа по телефону, лицам, не имеющим отношения к исполнению Заказа.</p>
                <p>3.6. Продавец не несет ответственности за содержание и достоверность информации, предоставленной Покупателем при оформлении Заказа.</p>
                <p>3.7. Покупатель несет ответственность за достоверность предоставленной информации при оформлении Заказа.</p>
                <p>3.8. Информация в Заказе, полученном Продавцом посредством электронной формы Заказа на Сайте, согласовывается с Покупателем по контактному телефону в следующих случаях:
                - с указанного в Заказе Покупателем номера телефона Заказ оформлен в первый раз;
                - с указанного в Заказе Покупателем номера телефона выбран способ получения Заказа «самовывоз» в первый раз;
                - с указанного в Заказе Покупателем номера телефона выбран способ получения Заказа «Предварительный заказ на самовывоз» в первый раз;
                - с указанного в Заказе Покупателем номера телефона выбран способ получения Заказа «Предварительный заказ на доставку» в первый раз;
                - в Заказе указана не вся информация, указанная в регистрационной форме; 
                - в иных случаях по инициативе Продавца.</p>
                <p>3.9. Временем принятия Заказа по телефону считается время окончания приема Заказа Продавцом.</p>
                <p>3.10. При оформлении Заказа через Сайт, при отсутствии необходимости подтверждения Заказа Продавцом с Покупателем по контактному телефону, временем принятия Заказа будет считаться время окончания обработки Заказа оператором. Обработка Заказа, оформленного через Сайт, осуществляется в течение пяти минут. </p>
                <p>3.11. При оформлении Заказа через Сайт, при необходимости подтверждения Заказа Продавцом с Покупателем, временем принятия Заказа будет считаться время окончания согласования Заказа Продавцом по контактному телефону с Покупателем.</p>
                <p>3.12. По окончании обработки Заказа оператором колл-центра Покупателю автоматически отправляется SMS-уведомление с информацией о Заказе. Продавец не гарантирует получение Покупателем SMS-уведомления с информацией о Заказе.</p>
                <p>3.13. При оформлении Заказа через Сайт в случае невозможности связаться с Покупателем по контактному телефону для согласования Заказа в соответствии с условиями, указанными в пункте 3.8 настоящей Оферты, Продавец вправе аннулировать Заказ Покупателя в полном объеме через 30 минут от момента получения Заказа от Покупателя.</p>
                <p>3.14. Если на складе Продавца отсутствует необходимое количество или ассортимент заказанных Покупателем Товаров, Продавец информирует об этом Покупателя по телефону в течение 30 минут после получения Заказа от Покупателя. Покупатель вправе согласиться принять Товары в ином количестве или ассортименте, либо аннулировать свой Заказ. В случае неполучения ответа Покупателя Продавец вправе аннулировать Заказ Покупателя в полном объеме.</p>
                <p>3.15. Все информационные материалы, представленные на сайте pzz.by и в рекламных буклетах, носят справочный характер и не могут в полной мере передавать всю информацию об определенных свойствах и характеристиках Товара.</p>
                <p>3.16. Внешний вид готового продукта может отличаться от изображений, представленных на сайте pzz.by и в рекламных буклетах.</p>
                <p>3.17. В случае возникновения у Покупателя дополнительных вопросов, касающихся свойств и характеристик Товаров, перед оформлением Заказа Покупатель должен обратиться к Продавцу по телефону + 375 (29/44/25) 755 66 55 для получения необходимой информации.</p>
                <p>3.18. При оформлении Заказа на сумму, превышающую 250,00 рублей, Покупатель обязуется заполнить представленное Продавцом гарантийное обязательство о принятии и оплате Товара согласно Заказу в момент его передачи Покупателю. Гарантийное обязательство оформляется не ранее, чем за 5 дней до оговоренного сторонами времени получения Товара, и не позднее, чем за 3 часа.</p>
                <p>3.19. Продавец вправе временно приостановить прием Заказов Товаров  по техническим причинам, не позволяющим принять Заказы Товаров, или отсутствия ингредиентов, необходимых для изготовления Товаров, а также отсутствия самих Товаров.</p>
            </div>
            
            <Footer />
            
        </div>
    )
}