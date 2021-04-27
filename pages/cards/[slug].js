import { createClient } from 'contentful'
import Image from 'next/image'
import React from 'react'
import styles from './Card.module.css'
import Link from 'next/link'

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'cards'
    })

    const paths = res.items.map(item => {
        return {
            params: {slug: item.fields.slug}
        }
    })

    return {
        paths,
        fallback: false
    }

}

export async function getStaticProps({ params }) {
    const { items } = await client.getEntries({
        content_type: 'cards',
        'fields.slug': params.slug
    })

    return {
        props: { card: items[0] },
        revalidate: 5
    }
}

export default function CardDetails({ card }) {
    console.log(card)
    const { image, title, receiver, sender, message} = card.fields

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <Image
                        src={'https:' + image.fields.file.url}
                        width={image.fields.file.details.image.width}
                        height={image.fields.file.details.image.height}
                    />
                </div>
                <div className={styles.card_content}>
                    <h2 className={styles.card_title}>{title}</h2>
                    <div>
                        <p className={styles.card_receiver}>{receiver}</p>
                        <p className={styles.card_message}>{message}</p>
                        <p className={styles.card_sender}> - {sender}</p>
                    </div>
                    <div className={styles.card_heart}>
                        <Image
                            src='/heart.svg'
                            alt= 'Love Mom Heart'
                            width='150'
                            height='150'
                        />
                    </div>
                </div>
            </div>
            <div>
                <h2>Share this link to send your mother the card:</h2>
                <p>https://leho-howest.instructure.com/courses/9545/assignments/68575</p>
            </div>
        </div>
    )
}