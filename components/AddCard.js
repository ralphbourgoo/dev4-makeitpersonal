import styles from './AddCard.module.css'
import { createClient } from 'contentful'

export async function getStaticProps() {

    const client = createClient({
        accessToken: 'CFPAT-NjcVpRSXie0TpQLtXrfaOm3gu1_S3DD_0lJtE96rj8E'
    });

    // Create entry

    client.getSpace('vhwgfyhqacqw')
        .then((space) => space.getEnvironment('master'))
        .then((environment) => environment.createEntry('cards', {
            fields: {
                title: {
                    'en-US': 'Entry title'
                },
                receiver: {
                    'en-US': 'Entry receiver'
                },
                sender: {
                    'en-US': 'Entry sender'
                },
                message: {
                    'en-US': 'Entry message'
                },
            }
        }))
        .then((entry) => console.log(entry))
        .catch(console.error)
    
    // client.getSpace('vhwgfyhqacqw')
    //     .then((space) => space.getEnvironment('master'))
    //     .then((environment) => environment.createEntryWithId('cards', '<entry_id>', {
    //         fields: {
    //             title: {
    //                 'en-US': 'Entry title'
    //             },
    //             receiver: {
    //                 'en-US': 'Entry receiver'
    //             },
    //             sender: {
    //                 'en-US': 'Entry sender'
    //             },
    //             message: {
    //                 'en-US': 'Entry message'
    //             },
    //         }
    //     }))
    //     .then((entry) => console.log(entry))
    //     .catch(console.error)
}

const AddCard = ({ onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: e.target.title.value,
            receiver: e.target.receiver.value,
            sender: e.target.sender.value,
            message: e.target.message.value,
        };
        e.target.reset();
        onSubmit(data);
    };

    // export async function getStaticProps() {
    //     const client = createClient({
    //         space: process.env.CONTENTFUL_SPACE_ID,
    //         accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    //     });

    //     const res = await client.getEntries({ content_type: 'cards' })

    //     return {
    //         props: {
    //             cards: res.items
    //         }
    //     }
    // }
    
    return ( 
        <section>
            <h3>Add comment</h3>
            <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
                <label className={styles.label}>Title:
                   <input type="text" name="title" required />
                </label>
                <label className={styles.label}>To:
                   <input type="text" name="receiver" required />
                </label>
                <label className={styles.label}>From:
                   <input type="text" name="sender" required />
                </label>
                <label className={styles.label}> Message:
                    <textarea name="message" required maxLength="500"></textarea>
                </label>
                <input type="submit" value="Send" />
            </form>
        </section>
     );
}
 
export default AddCard;