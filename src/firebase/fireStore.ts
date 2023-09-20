import { getFirestore } from 'firebase/firestore';
import FirebaseApp from './firebaseApp';

const FireStore = getFirestore(FirebaseApp);

export default FireStore;
