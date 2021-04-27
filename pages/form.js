import AddCard from '../components/AddCard'
import styles from '../styles/Form.module.css'

const Form = () => {
    return ( 
        <div className={styles.wrapper}>
            <div>
                <h1 className={styles.page_title}>Send your own card !</h1>
                <p className={styles.page_sub}>Fill in the form to send a mothersday card</p>
            </div>
            <div>
                <AddCard />
            </div>
        </div>
     );
}
 
export default Form;