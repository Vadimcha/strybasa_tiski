import React from 'react';
import styles from './Footer.module.scss'
import Link from "next/link";
import Image from 'next/image';

export const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.links}>
                    <div className={styles.column}>
                        <p className={styles.column_name}>Услуги</p>
                        <Link href={'/services'}><p className={styles.link}>Доставка</p></Link>
                        <Link href={'/services'}><p className={styles.link}>Разгрузка и подъём на этаж</p></Link>
                        <Link href={'/services'}><p className={styles.link}>Распил</p></Link>
                        <Link href={'/services'}><p className={styles.link}>Расчёт</p></Link>
                        <Link href={'/services'}><p className={styles.link}>Сборка и установка</p></Link>
                        <Link href={'/services'}><p className={styles.link}>Хранение стройматериалов</p></Link>
                        <Link href={'/services'}><p className={styles.link}>Экспресс-доставка</p></Link>
                    </div>
                    <div className={styles.column}>
                        <p className={styles.column_name}>Покупателям</p>
                        <Link href={'/services'}><p className={styles.link}>Акции</p></Link>
                        <Link href={'/services'}><p className={styles.link}>Доставка и оплата</p></Link>
                        <Link href={'/services'}><p className={styles.link}>Правила сайта</p></Link>
                        <Link href={'/services'}><p className={styles.link}>Полезные статьи</p></Link>
                    </div>
                    <div className={`${styles.column} ${styles.column_unique}`}>
                        <div className={styles.row}>
                            <p className={styles.column_name}>О компании</p>
                            <Link href={'/services'}><p className={styles.link}>О нас</p></Link>
                            <Link href={'/services'}><p className={styles.link}>Политика в области обработки и защиты персональных данных</p></Link>
                        </div>
                        <div className={styles.row}>
                            <p className={styles.column_name}>Контакты</p>
                            <Link href={'/services'}><p className={styles.link}>Центральный офис</p></Link>
                            <Link href={'/services'}><p className={styles.link}>Реквизиты</p></Link>
                        </div>
                    </div>
                </div>
                <div className={styles.block}>
                    <div className={styles.timetable}>
                        <p className={styles.column_name}>Часы работы</p>
                        <p className={`${styles.link} ${styles.time}`}>Пн-Пт с 09:00 до 18:00</p>
                        <p className={`${styles.link} ${styles.time}`}>Сб-Вс с 09:00 до 15:00</p>
                    </div>
                    <div className={styles.contacts}>
                        <Link href={'#'}><Image src={'/img/WatsappYellow.svg'} width={26} height={26} alt={'Watsapp'}/></Link>
                        <Link href={'#'}><Image src={'/img/VkYellow.svg'} width={26} height={26} alt={'Vk'}/></Link>
                        <Link href={'#'}><Image src={'/img/PhoneYellow.svg'} width={26} height={26} alt={'Call Us'}/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}