import "./styles.css";

import getHeaderContent from "./../Header";

import checkIconContent from "../../functions/checkIconContent";

import { getUser } from "./../../utils/user_utils";

const renderDetailsPanel = (container: HTMLDivElement) => {
  const user = getUser();

  const { displayName, email, emailVerified, phoneNumber, photoURL } = user;

  const resizedPhotoURL = photoURL?.replace("s96", "s512");
  const verifiedIcon = emailVerified ? checkIconContent : "";

  const displayPhoneNumber = phoneNumber ??
    'Oh, céus! ;\'( Parece que esse usuário não tem um número de telefone&hellip;'
    + ' Será que ele pensa que está em 1950?';

  const htmlContent = `
    <div class="page" id="details-panel">
      ${getHeaderContent()}

      <div id="details-content">
        <img src="${resizedPhotoURL}" alt="${displayName}" />

        <div id="textual-stuff">
          <span id="display-name">${displayName}</span>
          <a id="email" href="mailto:${email}">${email} ${verifiedIcon}</a>
          <span id="phone-number">${displayPhoneNumber}</span>

        </div>
      </div>
    </div>
`;

  container.innerHTML = htmlContent;
};

export default renderDetailsPanel;
