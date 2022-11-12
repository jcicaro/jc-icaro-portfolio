import React, { ReactNode } from 'react'
import styles from '../styles/Layout.module.css';

// https://medium.com/quick-code/nextjs-with-typescript-integration-and-example-dd2e13da668b
type Props = {
    children?: ReactNode
    // title?: string
}

export default function Layout({ children }: Props) {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}