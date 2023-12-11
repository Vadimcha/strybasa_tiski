'use client';
import React, {useEffect, useState} from 'react';
import styles from './ShopCart.module.scss'
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {roboto} from "@/config/fonts/fonts";
import {IProduct} from "@/models/IProduct";
import {ShopProduct} from "@/components/ShopCartProduct";
import {useRouter} from "next/navigation";
import axios from "axios";
import {IShopCartProduct} from "@/models/IShopCart";

export const ShopCart = ({ token }: { token: string }) => {
    const router = useRouter()
    const [ProductsData, setProductsData] = useState<IShopCartProduct[] | null>(null)
    useEffect(() => { console.log('Token', token) }, [token])
    useEffect(() => {
        const timer = setTimeout(() => {
            const data = axios({
                method: 'get',
                url: 'http://127.0.0.1/api/cart/',
                headers: {
                    Authorization: `Token ${token}`
                }
            }).then(data => {
                console.log(`BREAKPOINT FROM SHOPCART`, data.data)
                setProductsData(data.data as IShopCartProduct[])
            })
        }, 2000);
        return () => clearTimeout(timer);

    })
    let summ = 0;
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>
                <h1 className={`${styles.name} ${roboto.className}`}>Корзина</h1>
                <div className={styles.shopCart}>
                    <div className={styles.products}>
                       { ProductsData ?
                           ProductsData.map((item: IShopCartProduct) => { return <ShopProduct cartProduct={item} key={item.product.product_id} />}) :
                           <p>Загрузка...</p>
                       }
                    </div>
                    <div className={styles.ordering}>
                        <button className={styles.btn}>Перейти к оформлению</button>
                        <div className={styles.line}></div>
                        <div className={styles.wrap}>
                            <p className={styles.shop_cart_name}>Ваша корзина:</p>
                            <div className={styles.cost}>
                                <p className={styles.cost_name}>
                                    { ProductsData ?
                                        `Товары (${ProductsData.length})` :
                                        'Загрузка...'
                                    }</p>
                                <p className={styles.cost_cost}>
                                    { ProductsData ?
                                        `${ProductsData.length ? ProductsData[0].user_total_price : '0'}₽` :
                                        'Загрузка...'
                                    }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}