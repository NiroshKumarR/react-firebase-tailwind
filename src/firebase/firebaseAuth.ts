import { getAuth } from 'firebase/auth';
import FirebaseApp from './firebaseApp';

const FirebaseAuth = getAuth(FirebaseApp);

export default FirebaseAuth;
