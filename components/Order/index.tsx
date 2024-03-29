import React from 'react';
import styles from './Order.module.scss'
import {IOrder} from "@/models/IOrder";
import {IShopCartProduct} from "@/models/IShopCartProduct";
import Image from 'next/image'
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import './swiper.scss'
import Link from "next/link";
import {formatPrice} from "@/utils/formatPrice";

export const Order = ({ order }: { order: IOrder }) => {
    return (
        <div className={styles.content}>
            <div className={styles.topPart}>
                <div className={styles.topLeftPart}>
                    <p className={styles.date}>Заказ от {order.order_time.substr(0, order.order_time.indexOf(' '))}</p>
                    <div className={styles.status}>{order.status}</div>
                </div>
                <p className={styles.price}>{formatPrice(order.to_pay)}₽</p>
            </div>
            { order.items && order.items.length ?
                <div className={styles.swiperWrapper}>
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={20}
                        pagination={{
                            clickable: true,
                        }}
                        className={styles.items}
                    >
                        { order.items.map((item: IShopCartProduct) => {
                            return (
                                <SwiperSlide className={styles.item} key={item.product.product_id}>
                                    <Link href={`/product/${item.product.product_id}`}>
                                        { item.product.product_image ?
                                            <div
                                                className={styles.item_image}
                                                style={{
                                                    background: `#F9F9F9 url(${
                                                        item && item.product && item.product.product_image
                                                            ? `'${item.product.product_image}'`
                                                            : '/img/ProductImage.jpg'
                                                    }) center center/cover no-repeat`,
                                                }}

                                            /> :
                                            <Image
                                                className={styles.item_image}
                                                src={'/img/ProductImage.jpg'}
                                                height={160}
                                                width={170}
                                                alt={'item'}
                                            />
                                        }
                                        <p className={styles.item_name}>{item.product.name ? item.product.name : 'Название товара'}</p>
                                    </Link>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div> :
                <h3>Нет товаров</h3>
            }
        </div>
    )
}