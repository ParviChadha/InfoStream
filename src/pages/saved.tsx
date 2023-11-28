import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../server/firebase-config';

function Saved() {
    const usersCollectionRef = collection(db, "users")
    const savePost = async () => {
        await addDoc(usersCollectionRef, {title, })
    };

    return <div> 
            <h1>Saved Articles</h1>

        </div>

}

export default Saved;