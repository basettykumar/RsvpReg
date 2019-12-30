import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';

import { connect } from "react-redux";
import { NavigationActions } from 'react-navigation';

import { bindActionCreators } from 'redux'
import * as userAction from '../actionType'

// import Icon from 'react-native-vector-icons/MaterialIcons'

// Icon.loadFont();


class SideMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sideMenu: [{ "name": "Home", "Image":"Home"}, {"name":"List","Image":"Image"}]
        }
    }

    navigateToScreen = (route) => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
        this.props.navigation.closeDrawer();
    }


    renderView = ({ item, index }) => {
        
        return (
            <TouchableOpacity onPress={() => { this.navigateToScreen(item.name) }}>
                <View >

                   {/* <Icon style={sideMenuStyle.rowIcon} name={item.image} size={30} color={'gray'} /> */}

                    <View style={{ justifyContent: 'center', flex: 1, borderWidth:1, height:50, marginBottom:20, marginTop:10, backgroundColor:"gray", marginHorizontal:10 }}>
                        <Text style={{ marginLeft: 10, fontSize: 16,textAlign:"center",color:"white" }}>{item.name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={{flex:1, backgroundColor:"#f2f2f2", marginTop:50}}>
                <FlatList style={{flex:1, marginTop:20}} data={this.state.sideMenu} renderItem={this.renderView} />
            </View>
        )
    }
}



function mapStateToProps(state, ownProps) {
    return {
        user: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ ...userAction }, dispatch)
    };
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(SideMenu)
