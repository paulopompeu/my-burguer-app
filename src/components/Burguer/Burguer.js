import React from 'react'

import classes from './Burguer.module.css'
import BurguerIngredient from './BurguerIngredient/BurguerIngredient'

const burguer = props => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurguerIngredient key={igKey + 1} type={igKey} />
      })
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, [])
  console.log(transformedIngredients)

  return (
    <div className={classes.Burguer}>
      <BurguerIngredient type='bread-top' />
      {transformedIngredients}
      <BurguerIngredient type='bread-bottom' />
    </div>
  )
}

export default burguer
