import './styles.css';

import getHeaderContent from './../Header';

import { getUser } from './../../utils/user_utils';
import $ from './../../utils/$';

const showHour = () => {
  const time = <HTMLTimeElement>$('time');
  
  setInterval(() => {
    const date = new Date();
    
    time.innerText = date.toLocaleTimeString() + ' e hoje é dia ' + date.toLocaleDateString();

    time.dateTime = date.toISOString();
  }, 1000);

}

const renderWelcomePanel = (container: HTMLDivElement) => {
  const user = getUser();
  
  document.title = `Olá, ${user.displayName}!`;

  const htmlContent = `
    <div class="page" id="welcome-pane">
      ${getHeaderContent()}  

      <div id="welcome-main-content">
        <hgroup>
          <h2>Seja bem-vindo, ${user.displayName}!</h2>
          <h3>
            Hora certa! <s>Falta bem pouquinho para daqui a p</s>&hellip;
          </h3>
        </hgroup>

        <div id="time-content">
          <span>
            Brincadeirinha!<br />
            São exatamente <time>Carregando...</time>
          </span>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = htmlContent;

  showHour();
}

export default renderWelcomePanel;