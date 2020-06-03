import React from 'react'

import classes from './Logo.module.css'

import burguerLogo from '../../assets/Images/burguer-logo.png'

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burguerLogo} alt='MyBurguer'/>
    </div>
);

export default logo;