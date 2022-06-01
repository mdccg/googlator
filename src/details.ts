import renderDetailsPanel from './components/DetailsPanel';
import $ from './utils/$';

const token = localStorage.getItem('token');

if (!token) {
  location.href = 'login.html';
}

const app = <HTMLDivElement>$('#app');
renderDetailsPanel(app);