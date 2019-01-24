import React, { Component } from "react";
import PropTypes from 'prop-types';
import registerUser from '../../Actions/users'
import {connect} from 'react-redux'
import { SafeAreaView, TouchableOpacity, View, Text, TextInput,Dimensions, StyleSheet} from 'react-native'
const {height, width} = Dimensions

var _this;
 class Register extends Component {
  static propTypes = {
    signIn: PropTypes.func,}
  static propTypes = {
    registering: PropTypes.func,
    setUser: PropTypes.func,
  };

  constructor(props) {
    super(props);
    _this = this;
    _this.state={
      error :'',
      fname : '',
      lname : '',
      email : '',
      pword : '' ,
      cpword : '',
      
    }
  }
componentWillReceiveProps(nextProps){
  if(this.props.registered!== nextProps.registered){
  this.props.navigation.navigate('Movies')
  }
}
 
save(){
  const data = {
   first_name: this.state.fname,
   last_name: this.state.lname,
   email: this.state.email,
    password: this.state.pword,
  }
  this.props.registerUser(data)
}
  validate(){
    const {fname, lname, email, pword, cpword}= this.state
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

    if(fname==''|| lname==''||email==''||pword==''){
      _this.setState({error:"Please enter all details"})
      //alert("Please enter all details")
    } else if(fname.trim()==""|| lname.trim()==""||email.trim()==""){
      _this.setState({error:"Please enter valid details"})
   } else if(reg.test(email) === false){
      _this.setState({error:"Please enter valid email"})
   }  else if(pword!==cpword) {
      _this.setState({error:"Passwords does not match"})
    } else
   { 
    this.save();
    _this.setState({error:"", fname : "", lname : '', pword  :'', cpword : '', email : ""}) 
   }
  }

  render() {
    return (
     <SafeAreaView>
       <View style = {{alignContent : 'center'}}>
         <View style = {{alignItems : 'center', marginTop : 20}}>
         <Text style = {{fontSize  : 30, color : "rgba(103,58,183, 1)"}}>Register</Text>
         </View>
         <View style = {{alignItems : 'center', marginTop : 20}}>
         <Text style = {{fontSize  : 20, color : "red"}}>{this.state.error}</Text>
         </View>
         <View style = {{margin : 5}}>
         <Text style = {{fontSize  : 20}}>First Name</Text>
         <TextInput value={this.state.fname} onChangeText={(text) => this.setState({ fname: text })}  autoCapitalize = 'none' style = {styles.textInput}/>
         <Text style = {{fontSize  : 20}}>Last Name</Text>
         <TextInput value={this.state.lname} onChangeText={(text) => this.setState({ lname: text })}autoCapitalize = 'none' style = {styles.textInput}/>
         <Text style = {{fontSize  : 20}}>Email-Id</Text>
         <TextInput value={this.state.email} onChangeText={(text) => this.setState({ email: text })}autoCapitalize = 'none' style = {styles.textInput}/>
         <Text style = {{fontSize  : 20}}>Password</Text>
         <TextInput value={this.state.pword} onChangeText={(text) => this.setState({ pword: text })}autoCapitalize = 'none' secureTextEntry={true} style = {styles.textInput}/>
         <Text style = {{fontSize  : 20}}>Confirm Password</Text>
         <TextInput value={this.state.cpword} onChangeText={(text) => this.setState({ cpword: text })}autoCapitalize = 'none'secureTextEntry={true} style = {styles.textInput}/>
         </View>
         <TouchableOpacity style={styles.book} onPress={()=> {this.validate()}}>
             <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> {this.props.navigation.navigate('Login')}} style ={{alignItems : 'center', margin : 10}}>
             <Text style={{color : "rgba(103,58,183, 1)",}}>Already have an Account ?</Text>
          </TouchableOpacity>
       </View>
     </SafeAreaView>
    );
  }
}

							
var styles = StyleSheet.create({
   
  book : {
      borderRadius :100,
      borderWidth : 1,
      borderColor : "rgba(103,58,183, 1)",
      backgroundColor : "rgba(103,58,183, 1)",
      width : 200,
      alignItems : 'center',
      alignSelf : 'center'
  },
  buttonText: {
    fontSize: 17,
    color: "white",
    padding  : 10,
    },
    textInput: {
      padding : 10, 
      height : 40, 
      width : 100,
      borderWidth : 1,
      borderRadius : 10,
      margin :10, 
      width : width/2-20,
      

    }
});

function mapDispatchToProps(dispatch){
  return{
    registerUser : (data)=>dispatch(registerUser(data)),
  }
}

function mapStateToProps(state){
  const userReducer = state.userReducer;
  return{
    registered:userReducer.registered,
  }
}

export default Register = connect(mapStateToProps, mapDispatchToProps)(Register)