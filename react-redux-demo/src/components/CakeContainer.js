import React from 'react'
import { connect } from 'react-redux'
import { buyCakes } from '../redux'

function CakeContainer(props) {
    return (
        <div>
           <h2>number of cakes - {props.numOfCakes}</h2>
           <button onClick={props.buyCakes}>buy cake</button>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        numOfCakes: state.cake.noOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
   return{
       buyCakes: () => dispatch(buyCakes())
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
