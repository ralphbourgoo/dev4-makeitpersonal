import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './CardItem.module.css'

export default function CardItem({ card }) {
    const { title, slug, receiver, sender, message, image } = card.fields
    return (
        <div className="carditem">
            <div className="carditem_image">
                <Image
                    src={'https:' + image.fields.file.url}
                    width={image.fields.file.details.image.width}
                    height={image.fields.file.details.image.height}
                    className
                />
            </div>
            <div className="content">
                <h2>{title}</h2>
                <p>from {sender}</p>
            </div>
            <div>
                <Link href={'/cards/' + slug}><a>Look at card</a></Link>
            </div>
        </div>
    )
}