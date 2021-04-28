import Link from 'next/link'
import styles from '../styles/404.module.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Notfound() {

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 4000)
    }, [])
    return (
        <div className={styles.notfound}>
            <h1 className={styles.page_title}>404</h1>
            <h2 className={styles.sub}>Oooops ! That page cannot be found :(</h2>
            <p className={styles.text}>Redirecting to <Link href="/">Homepage</Link> to create you Mothersday Card...</p>
        </div>
    )
}