import styles from './AddCard.module.css'
import { createClient } from 'contentful'
import { useRouter } from 'next/router'
import CardDetails from '../pages/cards/[slug]';

// export async function getStaticProps() {

//     const client = createClient({
//         accessToken: 'CFPAT-NjcVpRSXie0TpQLtXrfaOm3gu1_S3DD_0lJtE96rj8E'
//     });

//     // Create entry

//     client.getSpace('vhwgfyhqacqw')
//         .then((space) => space.getEnvironment('master'))
//         .then((environment) => environment.createEntry('cards', {
//             fields: {
//                 title: {
//                     'en-US': 'Entry title'
//                 },
//                 receiver: {
//                     'en-US': 'Entry receiver'
//                 },
//                 sender: {
//                     'en-US': 'Entry sender'
//                 },
//                 message: {
//                     'en-US': 'Entry message'
//                 },
//             }
//         }))
//         .then((entry) => console.log(entry))
//         .catch(console.error)
// }

const AddCard = ({ onSubmit }) => {
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const slug = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        const data = {
            title: e.target.title.value,
            receiver: e.target.receiver.value,
            sender: e.target.sender.value,
            message: e.target.message.value,
            image: e.target.image.value,
            slug: slug
        };
        // console.log(JSON);
        let response = null;

        if (data) {
            response = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
        }
        e.target.reset();
        response.json().then(data => {
            console.log(data)
            router.push({ pathname: '/cards/[slug]', query: { slug: slug } });
        });
    };

    return (
        <div>
            <h3 className={styles.hidden}>Add comment</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label className={styles.label}>Title:
                   <input className={styles.input} type="text" name="title" required id="title" />
                </label>
                <label className={styles.label}>To:
                   <input className={styles.input} type="text" name="receiver" required id="receiver" />
                </label>
                <label className={styles.label}>From:
                   <input className={styles.input} type="text" name="sender" required id="sender" />
                </label>
                <label className={styles.label}> Message:
                    <textarea className={styles.message} name="message" required maxLength="500" id="message"></textarea>
                </label>
                <label className={styles.label}> Place Your Image:
                    <input className={styles.message} name="image" accept=".jpg, .png, .jpeg" type="file" id="image"></input>
                </label>
                <input
                    //onClick={() => (router.push({ pathname: '/cards/[slug]', query: { slug: slug }, }))}
                    //onClick={handleClick}
                    className={styles.submit} type="submit" value="Send" />
            </form>
        </div>
    );
}

export default AddCard;