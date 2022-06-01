const token = localStorage.getItem('token');

if (token) {
  location.href = 'home.html';
} else {
  location.href = 'login.html';
}

export default {
  typescript: 'best language'
};