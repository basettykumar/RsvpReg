import reducer from '../Reducers/reducer'
import agereducer from '../Reducers/agereducer'
import locationReducer from '../Reducers/locality'
import guestsReducer from '../Reducers/guestsreducer'
import addreesReducer from '../Reducers/addressReducer'
import {combineReducers} from 'redux'

const combinedReducer = {
    reducer,
    agereducer,
    locationReducer,
    guestsReducer,
    addreesReducer  
} 

export default combineReducers(combinedReducer) ;