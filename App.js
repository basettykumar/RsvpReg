import React, { Component } from 'react';
import { View } from 'react-native'
import { connect } from "react-redux";
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import RegisterForm from './src/Components/Registration'
import List from './src/Components/list'
import SideMenu from './src/Utils/sideMenu'
import ListFrom from './src/Components/listForm'

const RootStack = createStackNavigator(
  {
      Home: RegisterForm,
      List:List,
      ListFrom:ListFrom

  },
  {
      initialRouteName: 'Home',
      // headerMode: "none"
  }
);

const AppStack = createDrawerNavigator({
  StackNav: {
      screen: RootStack,
  }
},

  {
      contentComponent: SideMenu
  });


const AppContainer = createAppContainer(AppStack);

class Auth extends React.Component {

  render() {
      return (
          <View style={{ flex: 1, backgroundColor: "white" }}>
              <AppContainer/>
          </View>
      );
  }
}




function mapStateToProps(state, ownProps) {
  return {
      app: state
  }
}

export default connect(
  mapStateToProps
)(Auth)