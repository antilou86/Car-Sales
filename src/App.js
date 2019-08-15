import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {connect} from 'react-redux'
import {removeFeature, buyItem} from './actions'


const App = (props) => {

const remove = item => {
  props.removeFeature(item)
}

const buy = item => {
  props.buyItem(item)
}



  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures remove={remove} />
      </div>
      <div className="box">
        <AdditionalFeatures buy={buy}/>
        <Total />
      </div>
    </div>
  );
};
const mapPropsToState = state => {
  return { }
}
export default connect(mapPropsToState, {removeFeature, buyItem})(App);
