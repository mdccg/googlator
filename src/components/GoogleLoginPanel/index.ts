import firebaseApp from './../../config/firebase';
import $ from './../../utils/$';
import './styles.css';

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const handleClick = () => {
  const provider = new GoogleAuthProvider();

  const auth = getAuth(firebaseApp);
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
      const jsonUser = JSON.stringify(user);

      localStorage.setItem('token', `${token}`);
      localStorage.setItem('user', jsonUser);

      location.href = 'home.html';
    })
    .catch((error) => console.error(error));
}

const renderGoogleLoginPanel = (container: HTMLDivElement) => {
  const htmlContent = `
    <div class="page" id="google-login-panel">
      <hgroup>
        <h1>É fácil. É gratuito. É Google</h1>
        <h2>
          Não nos responsabilizamos por dados veiculados
          entre <i>big techs</i> e empresas parceiras da
          Google
        </h2>
      </hgroup>

      <button>
        <img src="/assets/icons/google.svg" alt="Google" />
        <span>Entre com a sua conta Google</span>
      </button>
    </div>
  `;

  container.innerHTML = htmlContent;

  const button = <HTMLButtonElement>$('button');
  button.onclick = handleClick;
}

export default renderGoogleLoginPanel;