import Link from 'next/link'
import Head from 'next/head'

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Head>
                <title>Mothersday Card</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <p>Logo</p>
                <Link href="/">
                    <a>All Cards</a>
                </Link>
            </header>

            <div className="page-content">
                {children}
            </div>

            <footer>
                <p>Logo</p>
                <p>©2021 Ralph Bourgoo</p>
            </footer>
        </div>
    )
}