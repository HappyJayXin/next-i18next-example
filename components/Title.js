import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ t }) => <h3>{t('title:text')}</h3>;

Title.propTypes = {
  t: PropTypes.func.isRequired
};

export default Title;
