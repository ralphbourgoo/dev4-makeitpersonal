import Link from 'next/link'
import Head from 'next/head'
import styles from './Layout.module.css'

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Head>
                <title>Mothersday Card</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                <div>
                    <Link href="/"><a className={styles.logo}>Mothersday  Card</a></Link>
                </div>
                <div>
                    <Link href="/"><a>All Cards</a></Link>
                    <Link href="/"><a>Send a card</a></Link>
                </div>
            </header>

            <div className="page-content">
                {children}
            </div>

            <footer className={styles.footer}>
                <div>
                    <Link href="/"><a className={styles.footer_logo}>Mothersday  Card</a></Link>
                </div>
                <p className={styles.copyright}>©2021 Ralph Bourgoo</p>
            </footer>
        </div>
    )
}