import React from 'react';
import { connect } from 'react-redux';
import { buyCakes, buyIceCream } from '../redux';

function CakeContainer(props) {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={props.dispatchItem}>buy icecream</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.noOfCakes
    : state.icecream.noOfIceCream;
  return {
    item: itemState,
  };
};

const mapDispatchTOProps = (dispatch, ownProps) => {
  const dispatchFn = ownProps.cake
    ? () => dispatch(buyCakes())
    : () => dispatch(buyIceCream());

    return{
        dispatchItem: dispatchFn
    }
};

export default connect(mapStateToProps , mapDispatchTOProps)(CakeContainer);
