import AddCard from '../components/AddCard'

const Form = () => {
    return ( 
        <div>
            <div>
                <h1>Send your own card !</h1>
                <p>Fill in the form to send a mothersday card</p>
            </div>
            <div>
                <AddCard />
            </div>
        </div>
     );
}
 
export default Form;