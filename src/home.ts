import renderWelcomePanel from './components/WelcomePanel';
import $ from './utils/$';

const token = localStorage.getItem('token');

if (!token) {
  location.href = 'login.html';
}

const app = <HTMLDivElement>$('#app');
renderWelcomePanel(app);