import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './CardItem.module.css'

export default function CardItem({ card }) {
    const { title, slug, sender, imagejson } = card.fields
    return (
        <div className={styles.carditem}>
            <div className={styles.carditem_image}>
                {/* <Image
                    src={imagejson.url}
                    width={300}
                    height={300}
                /> */}
                <div style={{
                    backgroundImage: `url(${imagejson.url})`,
                    width: 220,
                    height: 220,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                    backgroundRepeat: `no-repeat`,
                    maxWidth: `70vw`,
                    maxHeight: `70vw`
                }}>
                </div>
            </div>
            <div className={styles.carditem_content}>
                <h2 className={styles.carditem_title}>{title}</h2>
                <p className={styles.carditem_sender}>from {sender}</p>
                <div>
                    <Link href={'/cards/' + slug}><a className={styles.carditem_button}>Look at card</a></Link>
                </div>
            </div>
        </div>
    )
}