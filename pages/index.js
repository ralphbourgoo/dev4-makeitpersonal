import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.home_container}>
      <div className={styles.home_header}>
        <h1 className={styles.home_title}>Happy Mothersday !</h1>
        <p className={styles.home_sub}>Send a motherdays card to your mother, to wish her the best motherday !</p>
      </div>
      <div className={styles.home_img}>
        <Image
          src='/momcard.jpg'
          alt='Mothersday Card'
          width='1920'
          height='1080'
        />
      </div>
      <div>
        <Link href="/form"><a className={styles.home_button}>Send a card</a></Link>
      </div>
    </div>
  )
}
