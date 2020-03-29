import React from 'react'

import classes from './Burguer.css'
import BurguerIngredient from './BurguerIngredient/BurguerIngredient'

const burguer = (props) => {
    console.log('construindo burguer')
    return (
        <div className={classes.Burguer}>
            teste
            <BurguerIngredient type="bread-top" />
            oi
            <BurguerIngredient type="cheese" />
            <BurguerIngredient type="meat" />
            <BurguerIngredient type="bread-bottom" />
        </div>
    )
}

export default burguer