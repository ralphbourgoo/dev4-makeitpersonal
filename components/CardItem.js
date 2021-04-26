import React from 'react'
import Link from 'next/link'

export default function CardItem({ card }) {
    const { title, slug, receiver, sender, message, image }  = card.fields
    return (
        <div className="carditem">
            <div className="carditem_image">
                {}
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