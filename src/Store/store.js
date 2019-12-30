import {createStore, applyMiddleware} from 'redux'
import combineReducers,{InitialState} from '../Reducers'
import AsyncStorage from '@react-native-community/async-storage'
import {persistStore,persistReducer} from 'redux-persist'
import thunk from 'redux-thunk';


const persistConfig = {
    key:"root",
    storage:AsyncStorage,
}
const persistedReducer = persistReducer(persistConfig, combineReducers)

export default ()=>{
    let store = createStore(persistedReducer,InitialState,applyMiddleware(thunk))
    let persistor = persistStore(store)    
    return {store, persistor}
} 




