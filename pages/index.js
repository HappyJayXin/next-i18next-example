import React from 'react';
import Title from '../components/Title';
import Footer from '../components/Footer';
import PropTypes from 'prop-types';
import { withTranslation } from '../i18n';

const Home = ({ t }) => {
  return (
    <div>
      <h1>{t('home')}</h1>
      <Title />
      <Footer />
    </div>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ['common']
});

Home.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation('common')(Home);
