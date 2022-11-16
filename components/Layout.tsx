import React, { ReactNode } from 'react'
import Nav from './Nav'

import styles from '../styles/Layout.module.css';

// https://medium.com/quick-code/nextjs-with-typescript-integration-and-example-dd2e13da668b
type Props = {
    children?: ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <>
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </>

    )
}