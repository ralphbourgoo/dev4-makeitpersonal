import { createClient } from 'contentful'
import Image from 'next/image'
import React from 'react'
import styles from './Card.module.css'
import Skeleton from '../../components/Skeleton'
import { useRef, useState } from 'react';

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
    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);
    function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess('Copied Link!');
    };

    if (!card) return <Skeleton />
    console.log(card)
    const { imagejson, title, receiver, sender, message, slug } = card.fields
    console.log('url', imagejson.url)
    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <div style={{
                        backgroundImage: `url(${imagejson.url})`,
                        width: 450,
                        height: 450,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`,
                        backgroundRepeat: `no-repeat`,
                        maxWidth: `70vw`,
                        maxHeight: `70vw`
                    }}>
                    </div>
                    {/* <Image
                        src={imagejson.url}
                        alt='Cloudinary Image'
                        width='500'
                        height='500'
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
                            width='120'
                            height='120'
                        />
                    </div>
                </div>
            </div>
            <div className={styles.link_wrapper}>
                <h2 className={styles.link_title}>Share this link</h2>
                <p className={styles.text}>Share this link, to send your mother the personalised card. Have a great mothersday !</p>
                <div className={styles.copy_wrapper}>
                    <textarea
                        className={styles.copy_area}
                        ref={textAreaRef}
                        rows='1'
                        value={`https://dev4-makeitpersonal.vercel.app/cards/${slug}`}
                        // onChange={defaultValue}
                    />
                    <div className={styles.success_wrapper}>
                        <button className={styles.copy_button} onClick={copyToClipboard}>Copy Link</button>
                        <p className={styles.success}>{copySuccess}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}