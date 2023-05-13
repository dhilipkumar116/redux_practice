import React from 'react'
import {buyIceCream} from '../redux/iceCream/iceCreamAction'
import {connect} from 'react-redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>number of icecream - {props.numoficecream}</h2>
            <button onClick={props.buyicecream}>buy icecream</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        numoficecream: state.icecream.noOfIceCream
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        buyicecream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps , mapDispatchToProps) (IceCreamContainer)
