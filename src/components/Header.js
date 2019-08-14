import React from 'react';
import { connect } from 'react-redux'

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
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
