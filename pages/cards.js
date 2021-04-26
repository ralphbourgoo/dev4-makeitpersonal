import { createClient } from 'contentful'
import CardItem from '../components/CardItem'

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    });

    const res = await client.getEntries({ content_type: 'cards' })

    return {
        props: {
            cards: res.items
        }
    }
}


export default function Cards({ cards }) {
    console.log(cards)
    return (
        <div>
            <div>
                <h1>Discover other cards</h1>
                <p>Have a look at cards other users.</p>
            </div>
            <div className="cards-list">
                {cards.map(card => (
                    <CardItem key={card.sys.id} card={card}/>
                ))}
            </div>
        </div>
    )
}