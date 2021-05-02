import styles from '../styles/About.module.css'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
    return ( 
        <div className={styles.wrapper}>
            <h1 className={styles.page_title}>About</h1>
            <p className={styles.subtext}>Create a personal message, that means something.</p>
            <div className={styles.section_wrapper}>
                <div className={styles.img}>
                    <Image
                        src='/multiplecards.jpg'
                        alt='Multiple Cards'
                        width='1200'
                        height='900'
                    />
                </div>
                <div className={styles.content_section}>
                    <h2 className={styles.sub}>The concept</h2>
                    <p className={styles.text}>With Motherday Card you can send you mother a personalised mothersday card. Mothers love surprises, but some kind words and a memory, will melt their hearts. .</p>
                    <p className={styles.text}>You can type your personal message, add a photo, and address your receiver. When your created your message, you can send a unique link to your mother, who can view your message. Discover the messages from other users on the overview page.</p>
                    <div className={styles.button_wrap}>
                        <Link href="/form"><a className={styles.button}>Try it !</a></Link>
                    </div>
                </div>
            </div>
            <div className={styles.step_section}>
                <h2 className={styles.sub}> What do you need to do?</h2>
                <div className={styles.steps_wrapper}>
                    <div className={styles.step}>
                        <div className={styles.number}>
                            <Image
                                src='/one.svg'
                                alt='Number One'
                                width='40'
                                height='40'
                            />
                        </div>
                        <h3 className={styles.sub_step}>Step 1: Search Image</h3>
                        <p className={styles.step_text}>First you need to find the best image you can find with you and your mom. <span>Important:</span> The resolution of the image must be a square.</p>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.number}>
                            <Image
                                src='/two.svg'
                                alt='Number Two'
                                width='40'
                                height='40'
                            />
                        </div>
                        <h3 className={styles.sub_step}>Step 2: Fill Form</h3>
                        <p className={styles.step_text}>Click the button send card. Then fill in the form. You can add a personal message and the image you choose in the first step.</p>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.number}>
                            <Image
                                src='/three.svg'
                                alt='Number Three'
                                width='40'
                                height='40'
                            />
                        </div>
                        <h3 className={styles.sub_step}>Step 3: Share Link</h3>
                        <p className={styles.step_text}>If you've created the card you get an unique link. Share this link with your mom.</p>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.number}>
                            <Image
                                src='/four.svg'
                                alt='Number Four'
                                width='40'
                                height='40'
                            />
                        </div>
                        <h3 className={styles.sub_step}>Step 4: Done</h3>
                        <p className={styles.step_text}>After you've shared the link with your mom, she is able to see her personal card.</p>
                    </div>
                </div>
                <div>
                    <Link href="/form"><a className={styles.button}>Send a card</a></Link>
                </div>
            </div>
        </div>
     );
}
 
export default About;