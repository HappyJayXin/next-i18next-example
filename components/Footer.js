import React from 'react';

const Footer = ({ i18n }) => (
  <footer>
    <p>
      <button type="button" onClick={() => i18n.changeLanguage('en')}>
        EN
      </button>
      <button type="button" onClick={() => i18n.changeLanguage('zh')}>
        ZH
      </button>
    </p>
  </footer>
);

export default Footer;
