import React from 'react';
import Title from '../components/Title';
import Footer from '../components/Footer';
import { useTranslation } from '../i18n';

const Home = () => {
  const { t, i18n, ready } = useTranslation(['common', 'title'], { useSuspense: false });

  console.log(ready); // true or false

  return (
    <div>
      <h1>{t('home')}</h1>
      <Title t={t} />
      <Footer i18n={i18n} />
    </div>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ['common', 'title']
});

export default Home;
