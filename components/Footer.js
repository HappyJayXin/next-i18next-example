import React from 'react';
import { i18n } from '../i18n';

const Footer = () => (
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
