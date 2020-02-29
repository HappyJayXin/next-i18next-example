import React from 'react';
import PropTypes from 'prop-types';
import { i18n, withTranslation } from '../i18n';

const Footer = ({ t }) => (
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

Footer.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation('common')(Footer);
