import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import * as appAction from '../Actions/actions'

class Registration extends React.Component {

//   static navigationOptions = ({ navigation }) => {
//     const { params = {} } = navigation.state;
//     return {
//       title: "Registration",
//       headerLeft: (
//         <TouchableOpacity
//           style={{ margin: 15 }}
//           onPress={() => navigation.toggleDrawer()}
//         >
//           <Image  style={{height:20, width:20}} source={require("../Utils/images/menu.png")} />
//         </TouchableOpacity>
//       ),
//       headerRight: (
//         <TouchableOpacity style={{ margin: 15 }} onPress={params.handleFilter}>
//           <View
//             style={{
//               flexDirection: "row",
//               alignItems: "center",
//               justifyContent: "center"
//             }}
//           >
//           </View>
//         </TouchableOpacity>
//       )
//     };
//   };

  constructor(props) {
    super(props)
    this.state = {
        firstName:"",
        lastName:"",
        email:"",
        gender:"",
        address:""
    }
  }

  componentDidMount (){
   console.log(this.props);
   const {params} = this.props.navigation.state 
   const firstName = params.firstName
   const lastName = params.lastName
   const email = params.email
   const gender = params.gender
   const address = params.address

   this.setState({
    firstName:firstName,
    lastName:lastName,
    email:email,
    gender:gender,
    address:address
   })

  }

  

  buttonAction= () => {

  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>

          <Text style={styles.label}> first Name</Text>
          <TextInput
            style={styles.inputText}
            autoCorrect={false}
            value={this.state.firstName}/>
            

          <Text style={styles.label} >Last name</Text>
          <TextInput
            style={styles.inputText}
            value={this.state.age}
            keyboardType="number-pad"
            autoCorrect={false}
            value={this.state.lastName}/>
            

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.inputText}
            value={this.state.dob}
            keyboardType="number-pad"
            autoCorrect={false}
            value={this.state.email}
             />

          <Text style={styles.label} >Gender</Text>
          <TextInput
            style={styles.inputText}
            autoCorrect={false}
            value={this.state.gender}
            />

          <Text style={styles.label}  >Ip Address</Text>
          <TextInput
            style={styles.inputText}
            autoCorrect={false}
            keyboardType="number-pad"
            value={this.state.address}
             />

          
          
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#f2f2f2"
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight:"bold",
    color:"#607d8b",
    marginTop:30
  },
  label: {
    marginLeft: 50,
    backgroundColor: "red",
    backgroundColor: "white",
    marginTop: 20,
    fontSize: 18,
    fontWeight:"bold",
    backgroundColor:"#f2f2f2"
  },
  inputText: {
    borderColor: "gray",
    borderWidth: 1,
    height: 50,
    marginHorizontal: 40,
    marginTop: 5,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize:20,
    
  },
  AddressText:{
    borderColor: "gray",
    fontSize:20,
    borderWidth: 1,
    height: 60,
    marginHorizontal: 40,
    marginTop: 5,
    borderRadius: 10,
    paddingHorizontal: 10
  },
  tchBtn:{
    borderWidth:1, 
    height:50, 
    width:"50%", 
    backgroundColor:"#757575",
    alignSelf:"center", 
    marginTop:50, 
    borderRadius:15, 
    justifyContent:"center"
  }
})

export default Registration;



