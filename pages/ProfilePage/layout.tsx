'use client'
import useProfileStore from '@/app/ProfileStore'
import useShopCartStore from '@/app/shopCartStore'
import { useUserStore } from '@/app/userStore'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { roboto } from '@/config/fonts/fonts'
import { formatName } from '@/utils/formatName'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import styles from './Layout.module.scss'

export default function ProfileLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const { curTab } = useProfileStore()
	const router = useRouter()
	const { quitAccount, curUser, token } = useUserStore()
	const { getShopCartAmount } = useShopCartStore()
	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.content}>
				<div className={styles.left_part}>
					<div className={styles.avatar}>
						<p className={`${styles.avatar_img} ${roboto.className}`}>
							{curUser?.username ? formatName(curUser.username) : ''}
						</p>
						<p className={styles.avatar_name}>{curUser?.username}</p>
						<button
							className={styles.link_quit}
							onClick={() => {
								quitAccount()
								getShopCartAmount(token)
								router.push('/')
							}}
						>
							<>Выйти</>
							<LogOut color={'#FF5050'} width={20} height={20} />
						</button>
					</div>
					<div className={styles.links}>
						<Link
							className={`${styles.link} ${
								curTab == 'orders' ? styles.link_active : ''
							}`}
							href={'/profile'}
						>
							Мои заказы
						</Link>
						<Link
							className={`${styles.link} ${
								curTab == 'settings' ? styles.link_active : ''
							}`}
							href={'/profile/settings'}
						>
							Настройки аккаунта
						</Link>
					</div>
				</div>
				<div className={styles.right_part}>{children}</div>
			</div>
			<Footer />
		</div>
	)
}
