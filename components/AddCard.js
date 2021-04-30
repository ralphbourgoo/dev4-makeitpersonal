import styles from './AddCard.module.css'
import { useRouter } from 'next/router'
import CardDetails from '../pages/cards/[slug]';
import React, { useState } from 'react';
import Image from 'next/image'
const AddCard = ({ onSubmit }) => {
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)
    const [file, setFile] = useState(false)
    const uploadImage = async (e) => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'mothersday')
        setLoading(true)
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/dnv4woiu7/image/upload',
            {
                method: 'POST',
                body: data
            }
        )
        const response = await res.json().then(data => {
            setImage(data.url)
            setLoading(false)
            setFile(data)
        });



    }
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('file', file);
        const slug = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        const data = {
            title: e.target.title.value,
            receiver: e.target.receiver.value,
            sender: e.target.sender.value,
            message: e.target.message.value,
            slug: slug,
            imagejson: file,
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
                    <input onChange={uploadImage} className={styles.upload} name="imagejson" placeholder="Upload an image" accept=".jpg, .png, .jpeg" type="file" id="imagejson"></input>
                    {loading ? (
                        <h3>Loading ...</h3>
                    ) : (
                            <img src={image} style={{ width: '200px' }} />
                        )}
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