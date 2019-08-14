import React from 'react';

const AddedFeature = props => {

  const handleClick = e =>{
    e.preventDefault();
    props.removeFeature(props.feature.id)
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => handleClick(e)}className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
