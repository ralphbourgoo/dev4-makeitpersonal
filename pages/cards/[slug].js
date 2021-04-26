import { createClient } from 'contentful'
import Image from 'next/image'
import React from 'react'

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
        props: {card: items[0]}
    }
}

export default function CardDetails({ card }) {
    console.log(card)
    // const { title, slug, receiver, sender, message, image } = card.fields
    const { image, title, receiver, sender, message} = card.fields

    return (
        <div>
            <div className="card">
                <div>
                    <Image
                        src={'https:' + image.fields.file.url}
                        width={image.fields.file.details.image.width}
                        height={image.fields.file.details.image.height}
                    />
                </div>
                <div>
                    <h2>{title}</h2>
                    <div>
                        <p>{receiver}</p>
                        <p>{message}</p>
                        <p>{sender}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}