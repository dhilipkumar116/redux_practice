const redux = require('redux');
const createStore = redux.createStore;

const BUY_CAKES = 'BUY_CAKES';

function buyCakes() {
  return {
    type: BUY_CAKES,
  };
}

const initialState = {
  numofcakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKES: return {
        ...state,
        numofcakes : state.numofcakes-1,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);
console.log('initial state',store.getState());
const unsubscribe = store.subscribe(() =>
  console.log('updated state',store.getState())
);
store.dispatch(buyCakes());
store.dispatch(buyCakes());
store.dispatch(buyCakes());
unsubscribe();
