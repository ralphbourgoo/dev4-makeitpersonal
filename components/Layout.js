import Link from 'next/link'

export default function Layout({ children }) {
    return (
        <div className="layout">
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