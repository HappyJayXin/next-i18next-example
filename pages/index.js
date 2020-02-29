import React from 'react';
import Title from '../components/Title';
import Footer from '../components/Footer';
import { useTranslation } from '../i18n';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('home')}</h1>
      <Title t={t} />
      <Footer />
    </div>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ['common']
});

export default Home;
