const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_ICE = 'BUY_ICE'
const BUY_CAKE = 'BUY_CAKE'

function buycake() {
    return{
        type: BUY_CAKE
    }
}
function buyice() {
    return{
        type: BUY_ICE
    }
}

const intialIce = {
    noofice : 10
}
const intialCake = {
    noofcake : 20
}

const cakeReducer = (state=intialCake , action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state , noofcake: state.noofcake -1 
        }
        default: return state
    }
}

const iceReducer = (state=intialIce , action) => {
    switch(action.type){
        case BUY_ICE: return{
            ...state , noofice: state.noofice -1 
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer ,
    ice: iceReducer
})

const store = createStore(rootReducer)
console.log('initial state ' , store.getState());
const unsubscribe = store.subscribe(()=>console.log('updated state ', store.getState()))
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buyice())
store.dispatch(buyice())
unsubscribe()

