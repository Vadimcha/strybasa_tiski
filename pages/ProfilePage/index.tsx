'use client';
import React, {useEffect} from 'react';
import {useProfileStore} from "@/pages/ProfilePage/ProfileStore";

export const ProfilePage = () => {
    const { setCurTab } = useProfileStore()
    useEffect(() => {
        setCurTab("orders")
    }, [])
    return (
        <div>Какие-то заказы</div>
    )
}