import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classes from './BurguerIngredient.module.css' 

class BurguerIngredient extends Component{
    render(){
        let ingredient = null

        switch (this.props.type) {
          case 'bread-bottom':
            ingredient = <div className={classes.BreadBottom}>&nbsp;</div>;
            break
          case 'bread-top':
            ingredient = (
              <div className={classes.BreadTop}>&nbsp;
                <div className={classes.Seeds1}>&nbsp;</div>
                <div className={classes.Seeds2}>&nbsp;</div>
              </div>
            )
            break
          case 'meat':
            ingredient = <div className={classes.Meat}>&nbsp;</div>
            break
          case 'cheese':
            ingredient = <div className={classes.Cheese}>&nbsp;</div>
            break
          case 'bacon':
            ingredient = <div className={classes.Bacon}>&nbsp;</div>
            break
          case 'salad':
            ingredient = <div className={classes.Salad}>&nbsp; </div>
            break
          default:
            ingredient = null
        }
        console.log(ingredient)
        return ingredient
        // return <div className={classes.BreadTop}></div>
    }
} 

BurguerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurguerIngredient