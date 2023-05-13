import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {buyCakes} from '../redux'


function HooksCakeContainer() {

const numofcakes = useSelector(state => state.cake.noOfCakes)
const dispatch = useDispatch()

    return (
        <div>
            <h2> number of cakes - {numofcakes}</h2>
            <button onClick={() => dispatch(buyCakes())}>buy cake</button>
        </div>
    )
}

export default HooksCakeContainer
