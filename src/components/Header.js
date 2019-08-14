import React from 'react';
import { connect } from 'react-redux'

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.image} alt={props.name} />
      </figure>
      <h2>{props.name}</h2>
      <p>Amount: ${props.price}</p>
    </>
  );
};

const mapPropsToState = state => {
  console.log("state within mapPropsToState, ", state);
  return {
    image: state.car.image,
    name: state.car.name,
    price: state.car.price
  }
}

export default connect(mapPropsToState, {})(Header);
