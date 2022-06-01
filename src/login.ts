import renderGoogleLoginPanel from './components/GoogleLoginPanel';
import $ from './utils/$';

const token = localStorage.getItem('token');

if (token) {
  location.href = 'home.html';
}

const app = <HTMLDivElement>$('#app');
renderGoogleLoginPanel(app);