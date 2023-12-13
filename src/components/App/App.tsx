import { useState } from 'react'
import styles from './App.module.scss'
import {Link, Outlet} from "react-router-dom";
import CartImage from '@/assets/cart.svg'

function TODO(a: number) {
	console.log('TODO')
}

export const App = () => {
	const [count, setCount] = useState<number>(0)

	// if (__PLATFORM__ === 'desktop') {}
	// if (__PLATFORM__ === 'mobile') {}
	// if (__ENV__ === 'development') {}
	// TODO(1)

	return (
		<div className={styles.wrapper}>
			<div>
				{__PLATFORM__}
			</div>
			<CartImage style={{color: 'green'}} fill={'none'} width={100} height={100} />
			<Link to={'/about'}>About Link</Link>
			<Link to={'/shop'}>Shop Link</Link>
			<h1 className={styles.title}>Appa</h1>
			<button type="button" onClick={() => setCount(count + 1)}>
				{count}
			</button>
			<Outlet />
		</div>
	)
}
