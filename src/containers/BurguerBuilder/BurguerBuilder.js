import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import BuildControls from '../../components/Burguer/BuildControls/BuildControls'

import Burguer from '../../components/Burguer/Burguer'

class BurguerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  }

//   addIngredientHandler = (type) => {

//   }

//   removeIngrdientHandler = (type) => {

//   }

  render() {
    return (
      <Aux>
        <Burguer ingredients={this.state.ingredients} />
        <BuildControls />
      </Aux>
    )
  }
}

export default BurguerBuilder
