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
import DatePicker from 'react-native-datepicker'
// import { bindActionCreators } from 'redux'
// import * as appAction from '../Actions/actions'

class Registration extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: "Registration",
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

  constructor(props) {
    super(props)
    this.state = {
      name:"",
      age:null,
      dob: "",
      locality:"",
      totalGuests:null,
      address:"",
      date:"2016-05-15"      
    }
  }

  // componentDidMount (){
  //   console.log("clear");
    
  //   this.setState({
  //     name:""
  //   })
  // }

  enteredValue = (event) => {
    console.log(event);
    this.setState({
      name:event
    })
  }

  ageEntered = (event) => {
    // this.props.actions.updatedAge(event)
    this.setState({
      age:event
    })
  }

  dobEntered = (event) => {
    this.setState({
      dob: event
    })
  }

  localityentered = (event) => {
    // this.props.actions.updateLocation(event)
    this.setState({
      locality:event
    })
  }

  guestesEntered = (event) => {
    // this.props.actions.updateGuests(event)
    this.setState({
      totalGuests:event
    })
    console.log('this.setState',this.state.totalGuests);
  }

  addressEntered = (event) => {
    // this.props.actions.updateAddress(event)
    this.setState({
      address:event
    })
  }

  buttonAction= () => {
    // console.log(this.props);
    // console.log(this.props.app.reducer.name);
    // this.props.actions.updatedName({name:this.state.name})

    let conversion= parseInt(this.state.totalGuests);
    console.log('conversion',conversion);

    if (!this.state.name){
      alert("enter name")
    }else if (!this.state.age){
      alert("enter age")
    }else if(!this.state.dob){
      alert("enter DOB")
    }else if (!this.state.locality){
      alert("enter locality")
    }else if (!this.state.totalGuests){
      alert("enter total guests")
    }
    else if (conversion > 2){
      alert("only two guests are allowed")
    } 
    else if (!this.state.address){
      alert("enter address")
    }else {
      alert ("Submitted Successfully")
    }
  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Registration</Text>

          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.inputText}
            autoCorrect={false}
            value={this.state.name}
            onChangeText={(text) => this.enteredValue(text)} />

          <Text style={styles.label} >Age</Text>
          <TextInput
            style={styles.inputText}
            maxLength={3}
            value={this.state.age}
            keyboardType="number-pad"
            autoCorrect={false}
            value={this.state.age}
            onChangeText={(text) => this.ageEntered(text)} />

          <Text style={styles.label}>D.O.B</Text>
          <DatePicker
          
           style={{width: 200,marginLeft:30}}
           date={this.state.date}
           mode="date"
           placeholder="select date"
           format="YYYY-MM-DD"
           minDate="2016-05-01"
           maxDate="2016-06-01"
           confirmBtnText="Confirm"
           cancelBtnText="Cancel"
           customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
           onDateChange={(date) => {this.setState({date: date})}}
          />
          {/* <TextInput
            style={styles.inputText}
            value={this.state.dob}
            keyboardType="number-pad"
            autoCorrect={false}
            value={this.state.dob}
            onChangeText={(text) => this.dobEntered(text)} /> */}

          <Text style={styles.label} >Locality</Text>
          <TextInput
            style={styles.inputText}
            autoCorrect={false}
            value={this.state.locality}
            onChangeText={(text) => this.localityentered(text)} />

          <Text style={styles.label}  >Number of Guests</Text>
          <TextInput
            style={styles.inputText}
            autoCorrect={false}
            keyboardType="number-pad"
            value={this.state.totalGuests}
            onChangeText={(text) => this.guestesEntered(text)} />

          <Text style={styles.label} >Address</Text>
          <TextInput
            style={styles.AddressText}
            multiline={true}
            value={this.state.address}
            maxLength={50}
            autoCorrect={false}
            value={this.state.address}
            onChangeText={(text) => this.addressEntered(text)} />

          <TouchableOpacity 
          style={styles.tchBtn}
          onPress={this.buttonAction}>
            <Text style={{textAlign:"center", fontSize:20, fontWeight:"500", color:"white"}}>Submit</Text>
          </TouchableOpacity>
          
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

// function mapStateToProps(state, ownProps) {
//   console.log(state,"STATE");
  
//   return {
//     app: state
//   }
// }

// function mapDispatchToProps(dispatch) {
//   console.log(appAction,"APPACTIONS");
  
//   return {
//     actions: bindActionCreators({ ...appAction }, dispatch)
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Registration);
export default Registration;



