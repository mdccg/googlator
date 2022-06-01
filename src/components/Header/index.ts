import './styles.css';

import { getUser } from './../../utils/user_utils';

const getHeaderContent = () => {
  const user = getUser();

  const htmlContent = `
    <header>
      <div id="heading-header">
        <h1>Googlator</h1>
        <div id="user">
          <span>${user.displayName}</span>
          <img src="${user.photoURL}" alt="${user.displayName}" />
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <a href="home.html">Home</a>
          </li>
          <li>
            <a href="details.html">Detalhes</a>
          </li>
          <li>
            <a href="logout.html">Sair</a>
          </li>
        </ul>
      </nav>
    </header>
  `;

  return htmlContent;
}

export default getHeaderContent;