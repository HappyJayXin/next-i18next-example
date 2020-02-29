import { useTranslation } from '../i18n';

const Title = () => {
  const { t } = useTranslation();

  return (
    <h3>{t('title')}</h3>
  )
}

Title.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default Title;
