import { createClient } from 'contentful'
import Image from 'next/image'
import React from 'react'
import styles from './Card.module.css'
import Skeleton from '../../components/Skeleton'

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
            params: { slug: item.fields.slug }
        }
    })

    return {
        paths,
        fallback: true
    }

}

export async function getStaticProps({ params }) {
    const { items } = await client.getEntries({
        content_type: 'cards',
        'fields.slug': params.slug
    })

    console.log(items)

    if (!items.length) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: { card: items[0] },
        revalidate: 5
    }
}

export default function CardDetails({ card }) {
    if (!card) return <Skeleton />
    console.log(card)
    const { imagejson, title, receiver, sender, message, slug } = card.fields
    console.log('url', imagejson.url)
    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <Image
                        src={imagejson.url}
                        alt='Cloudinary Image'
                        width='500'
                        height='500'
                    />
                    {/* <Image
                        src={'https:' + image.fields.file.url}
                        width={image.fields.file.details.image.width}
                        height={image.fields.file.details.image.height}
                    /> */}
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
                            alt='Love Mom Heart'
                            width='150'
                            height='150'
                        />
                    </div>
                </div>
            </div>
            <div className={styles.link_wrapper}>
                <h2 className={styles.link_title}>Share this link</h2>
                <p className={styles.text}>Share this link, to send your mother the personalised card. Have a great mothersday !</p>
                <p className={styles.link}>{`http://localhost:3000/cards/${slug}`}</p>
            </div>
        </div>
    )
}