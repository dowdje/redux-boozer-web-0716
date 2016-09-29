import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

function CocktailShow (props) {
  return(
    <div className='col-md-8'>
      <h1>{props.cocktail.name}</h1>
    </div>
  )
}

function MapStateToProps(state, ownProps){
  return (
    { 
      cocktail: state.cocktails.find( (cat) => {
        return cat.id == ownProps.params.id
      }) 
    }
  )
}

const componentCreator = connect(MapStateToProps)
export default componentCreator(CocktailShow)

