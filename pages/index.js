import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.home_container}>
      <div className={styles.home_header}>
        <h1 className={styles.home_title}>Happy Mothersday ! </h1>
        <p className={styles.home_sub}>Send a motherdays card to your mother, to wish her the best motherday !</p>
        <p className={styles.text}>Looking for a unique and personalised motherday present? Then this can be something for you. Create a personalised motherday card. You can send this unique link to your mother and surprise her with a lovely message.  </p>
        <div>
          <Link href="/form"><a className={styles.home_button}>Send a card</a></Link>
        </div>
      </div>
      <div className={styles.home_img}>
        <Image
          src='/cards.png'
          alt='Mothersday Card'
          width='1500'
          height='1144'
        />
      </div>
    </div>
  )
}
