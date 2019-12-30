import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import store from './src/Store/store'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'

const persistStore = store()

export default class Auth extends React.Component {
    render(){
        return(
            <Provider store= {persistStore.store}>
                <PersistGate loading ={null} persistor={persistStore.persistor}>
                <App/>
                </PersistGate>
            </Provider>
        )
    }
}



AppRegistry.registerComponent(appName, () => Auth);
