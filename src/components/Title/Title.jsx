import React from 'react'
import './Title.css'
import PropTypes from 'prop-types';

function Title({title,subtitle}) {
  return (
    <div className='title-container'>
        <h1 className='main-title'>{title}</h1>
        {subtitle &&  <p className='subtitle'>{subtitle}</p>}
    </div>
  );
};
Title.propTypes = {
title: PropTypes.string.isRequired,
subtitle:PropTypes.string
};

export default Title