import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './CardItem.module.css'

export default function CardItem({ card }) {
    const { title, slug, sender, imagejson } = card.fields
    return (
        <div className={styles.carditem}>
            <div className={styles.carditem_image}>
                <Image
                    src={'/heart.svg'}
                    width={300}
                    height={300}
                />
                {/* <Image
                    src={'https:' + image.fields.file.url}
                    width={image.fields.file.details.image.width}
                    height={image.fields.file.details.image.height}
                /> */}
            </div>
            <div className="content">
                <h2 className={styles.carditem_title}>{title}</h2>
                <p className={styles.carditem_sender}>from {sender}</p>
            </div>
            <div>
                <Link href={'/cards/' + slug}><a className={styles.carditem_button}>Look at card</a></Link>
            </div>
        </div>
    )
}