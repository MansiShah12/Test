import React, { Component } from "react";
import PropTypes from 'prop-types';
import registerUser from '../../Actions/users'
import {connect} from 'react-redux'
import { SafeAreaView, TouchableOpacity, View, Text, TextInput,Dimensions, StyleSheet, AsyncStorage} from 'react-native'
import styles from './styles'

var _this;
 class Register extends Component {
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
  if(nextProps.loggedIn){
   userObj = {
      accessToken: nextProps.accessToken,
      email: nextProps.email
    }
    this.props.navigation.navigate('Movies')
  }
}
 
saveUser(){
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
    this.saveUser();
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
          <TextInput value={this.state.fname} onChangeText={(text) => this.setState({ fname: text })}  style = {styles.textInput}/>
          <Text style = {{fontSize  : 20}}>Last Name</Text>
          <TextInput value={this.state.lname} onChangeText={(text) => this.setState({ lname: text })} style = {styles.textInput}/>
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

function mapDispatchToProps(dispatch){
  return{
    registerUser : (data)=>dispatch(registerUser(data)),
  }
}

function mapStateToProps(state){
  const userReducer = state.userReducer;
  return{
    loggedIn:userReducer.loggedIn,
    email: userReducer.email,
    accessToken: userReducer.accessToken
  }
}

export default Register = connect(mapStateToProps, mapDispatchToProps)(Register)