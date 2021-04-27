import { createClient } from 'contentful'
import CardItem from '../components/CardItem'
import styles from '../styles/Cards.module.css'

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
    return (
        <div>
            <div className={styles.page_header}>
                <h1 className={styles.page_title}>Discover other cards</h1>
                <p className={styles.page_sub}>Have a look at cards other users.</p>
            </div>
            <div className={styles.cards_list}>
                {cards.map(card => (
                    <CardItem key={card.sys.id} card={card}/>
                ))}
            </div>
        </div>
    )
}