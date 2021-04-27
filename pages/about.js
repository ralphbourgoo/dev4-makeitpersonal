import styles from '../styles/About.module.css'
import Image from 'next/image'

const About = () => {
    return ( 
        <div className={styles.wrapper}>
            <h1 className={styles.page_title}>About</h1>
            <div className={styles.img}>
                <Image
                    src='/kidandmom.jpg'
                    alt='Mothersday Present'
                    width='1067'
                    height='678'
                />
            </div>
            <p className={styles.text}>With Motherday Card you can send you mother a personalised mothersday card. You can type your personal message, add a photo, and address your receiver. When your created your message, you can send a unique link to your mother, who can view your message. Discover the messages from other users on the overview page.</p>
        </div>
     );
}
 
export default About;