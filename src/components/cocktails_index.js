import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

function CocktailsIndex(props){
  const drinks = props.cocktails.map((drink, i)=>{
    return <Link to={"/cocktails/" + drink.id}><li key={i} >{drink.name}</li></Link>
  })
  return(
    <div>
    <div>{props.children}</div>
    <h1>{drinks}</h1>
    </div>
  )
}

function MapStateToProps(state){
  return {cocktails: state.cocktails}
}

const componentCreator = connect(MapStateToProps)
export default componentCreator(CocktailsIndex)