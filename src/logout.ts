import { getAuth, signOut } from 'firebase/auth';
import firebaseApp from './config/firebase';

const auth = getAuth(firebaseApp);

signOut(auth)
  .then((_) => {
    localStorage.clear();
    location.href = 'login.html';
  })
  .catch((error) => console.error(error));