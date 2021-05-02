import Link from 'next/link'
import Head from 'next/head'
import styles from './Layout.module.css'
import { useState } from 'react';
import Image from 'next/image'

export default function Layout({ children }) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <div className="layout">
            <Head>
                <title>Mothersday Card</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header >
                <nav className={styles.header}>
                    <Link href="/"><a className={styles.logo}>Mothersday  Card</a></Link>
                    <ul className={[click ? styles.nav_itemsactive : styles.nav_items]}>
                        <Link href="/" className={styles.mobile_option, styles.option} onClick={closeMobileMenu}><a className={styles.navlink}>Home</a></Link>
                        <Link href="/about" className={styles.mobile_option, styles.option} onClick={closeMobileMenu}><a className={styles.navlink}>About</a></Link>
                        <Link href="/cards" className={styles.mobile_option, styles.option} onClick={closeMobileMenu}><a className={styles.navlink}>All Cards</a></Link>
                        <Link href="/form" className={styles.mobile_option, styles.option} onClick={closeMobileMenu}><a className={styles.navbutton}>Send a card</a></Link>
                    </ul>
                    <div className={styles.mobile_menu} onClick={handleClick}>
                        {click ? (
                            <Image
                                src='/cross.svg'
                                alt='Cross Icon'
                                width='35'
                                height='35'
                            />
                        ) : (
                                <Image
                                    src='/hamburger.svg'
                                    alt='Hamburger Icon'
                                    width='35'
                                    height='35'
                                />
                            )}
                    </div>
                </nav>
                {/* <div>
                    <Link href="/"><a className={styles.logo}>Mothersday  Card</a></Link>
                </div>
                <div>
                    <Link href="/"><a className={styles.navlink}>Home</a></Link>
                    <Link href="/about"><a className={styles.navlink}>About</a></Link>
                    <Link href="/cards"><a className={styles.navlink}>All Cards</a></Link>
                    <Link href="/form"><a className={styles.navbutton}>Send a card</a></Link>
                </div> */}
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