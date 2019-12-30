import React from 'react'
import {Text, View, FlatList, SafeAreaView, TouchableOpacity, TextInput, Image} from 'react-native'
import details from '../Utils/MOCK_DATA.json'

class List extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
          title: "List",
          headerLeft: (
            <TouchableOpacity
              style={{ margin: 15 }}
              onPress={() => navigation.toggleDrawer()}
            >
              <Image  style={{height:20, width:20}} source={require("../Utils/images/menu.png")} />
            </TouchableOpacity>
          ),
          headerRight: (
            <TouchableOpacity style={{ margin: 15 }} onPress={params.handleFilter}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
              </View>
            </TouchableOpacity>
          )
        };
      };

    constructor(){
        super()
        this.state = {
            data:details,
            text:""
        }
    }

    SearchFilterFunction = (text) => {
        debugger;
        if (text===""){
            this.setState({
                data:details,
                text:text
            })
        } else {
            const newData = this.state.data.filter (function(item){
                const itemData = item.first_name ? item.first_name.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            })
            this.setState({
                data:newData,
                text:text
            })
        }

        // const newData = this.state.data.filter (function(item){
        //     const itemData = item.first_name ? item.first_name.toUpperCase() : ''.toUpperCase();
        //     const textData = text.toUpperCase();
        //     return itemData.indexOf(textData) > -1;

        // })

        // if (text===""){
        //     this.setState({
        //         data:newData,
        //         text:""
        //     })
        // }else {
        //     this.setState({
        //         data:newData,
        //         text:text
        //     })
        // }
    }

    buttonData = (item) => {
        this.props.navigation.push("ListFrom", {
            firstName: item.first_name,
            lastName:item.last_name,
            email:item.email,
            gender:item.gender,  
            address:item.ip_address
        })
    }

    _renderData = ({item,index}) => {
        return (
            <SafeAreaView style={{flex:1, backgroundColor:"#f2f2f2"}}>
                <View style={{backgroundColor:"white", borderWidth:1, marginBottom:10, marginHorizontal:10}}>
                    <TouchableOpacity style={{flexDirection:"row"}} onPress={()=>this.buttonData(item)}>
                        <View style={{width:100, marginLeft:10}}>
                            <Text style={{paddingTop:10, fontSize:16, fontWeight:"700"}}>Id</Text>
                            <Text style={{paddingTop:10,fontSize:16,fontWeight:"700"}}>First Name</Text>
                            <Text style={{paddingTop:10,fontSize:16,fontWeight:"700"}}>Last Name</Text>
                            <Text style={{paddingTop:10,fontSize:16,fontWeight:"700"}}>Email</Text>
                            <Text style={{paddingTop:10,fontSize:16,fontWeight:"700"}}>Gender</Text>
                            <Text style={{paddingTop:10,fontSize:16, paddingBottom:10,fontWeight:"700"}}>Ip Address</Text>
                        </View>
                        <View>
                            <Text style={{paddingTop:10,fontSize:16}}>: {item.id}</Text>
                            <Text style={{paddingTop:10,fontSize:16}}>: {item.first_name}</Text>
                            <Text style={{paddingTop:10,fontSize:16}}>: {item.last_name}</Text>
                            <Text style={{paddingTop:10,fontSize:16}}>: {item.email}</Text>
                            <Text style={{paddingTop:10,fontSize:16}}>: {item.gender}</Text>
                            <Text style={{paddingTop:10,paddingBottom:10,fontSize:16}}>: {item.ip_address}</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
        
                
               
            </SafeAreaView>
        )
    }
    
    
    render(){
        console.log(details);
        console.log(details[100].id);
        
        return(
           <View style={{flex:1,backgroundColor:"#f2f2f2"}}>

                <TextInput
                value= {this.state.text}
                style={{height: 40,
                    borderWidth: 1,
                    paddingLeft: 10,
                    borderColor: '#009688',
                    marginHorizontal:10,
                    backgroundColor: '#FFFFFF',
                    marginBottom:10,
                    borderRadius:10
            }}
            onChangeText={text => this.SearchFilterFunction(text)}
            

            placeholder="search here"
                />
               <FlatList
               data={this.state.data}
               renderItem={this._renderData}
               keyExtractor={item => `${item.id}`}
               
               />
           </View>
        )
    }
}

export default List;