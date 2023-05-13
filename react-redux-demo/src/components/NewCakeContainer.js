import React , {useState} from 'react'
import { connect } from 'react-redux'
import { buyCakes } from '../redux'

function NewCakeContainer(props) {

    const [number , setNumber] = useState(1)

    return (
        <div>
           <h2>number of cakes - {props.numOfCakes}</h2>
           <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
           <button onClick={() => props.buyCakes(number)}>buy {number} cake</button>
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
       buyCakes: (number) => dispatch(buyCakes(number))
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)
