import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as actions from '../actions'

function CocktailNew(){
  return <h1>Nub</h1>
}

function mapDispatchToProps(dispatch) {
  const action = bindActionCreators(actions, dispatch)
  return {actions: action}
}

const componentCreator = connect(null , mapDispatchToProps)
export default componentCreator(CocktailNew)