import styles from './Skeleton.module.css'

export default function Skeleton() {
    return (
        <div className={styles.skeleton}>
            <div className={styles.banner}>

            </div>
            <div className={styles.header}>

            </div>
            <div className={styles.content}>

            </div>
            <div className={styles.content}>

            </div>
        </div>
    )
}