import styles from './AddCard.module.css'
import { createClient } from 'contentful'
import { useRouter } from 'next/router'

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
        const data = {
            title: e.target.title.value,
            receiver: e.target.receiver.value,
            sender: e.target.sender.value,
            message: e.target.message.value,
        };
        // console.log(JSON);
        // let response = null;

        if (data) {
            const response = await fetch("/api/send", {
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
        });
        // router.push("/cards/");
    };
    
    return ( 
        <div>
            <h3 className={styles.hidden}>Add comment</h3>
            <form onSubmit = { handleSubmit } className={styles.form}>
                <label className={styles.label}>Title:
                   <input className={styles.input} type="text" name="title" required id="title"/>
                </label>
                <label className={styles.label}>To:
                   <input className={styles.input} type="text" name="receiver" required id="receiver"/>
                </label>
                <label className={styles.label}>From:
                   <input className={styles.input} type="text" name="sender" required id="sender"/>
                </label>
                <label className={styles.label}> Message:
                    <textarea className={styles.message} name="message" required maxLength="500" id="message"></textarea>
                </label>
                <input className={styles.submit} type="submit" value="Send" />
            </form>
        </div>
     );
}
 
export default AddCard;