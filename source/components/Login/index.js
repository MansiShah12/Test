import React, { Component } from "react";
import {connect} from 'react-redux'
import { SafeAreaView, TouchableOpacity, View, Text, TextInput,Dimensions, StyleSheet} from 'react-native'
import {loginUser} from '../../Actions/users'
import styles from './styles'

var _this;
 class LoginUser extends Component {
  constructor(props) {
    super(props);
    _this = this;
    _this.state={
      error :'',
      email : '',
      pword : '' ,
    }
  }

  componentWillReceiveProps(nextProps){
    console.log("nextPropsssss",nextProps.loggedIn )
    if(nextProps.loggedIn){
     this.props.navigation.navigate('Movies')
    }
  }
 
save(){
  const loginData = {
    email: this.state.email,
    password: this.state.pword,
  }
  this.props.loginUser(loginData)
  this.setState({error:"",  pword  :"", email : ""}) 

}
validate(){
    const {fname, lname, email, pword, cpword}= this.state
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

    if(fname==''|| lname==''||email==''||pword==''){
      _this.setState({error:"Please enter all details"})
      }else if(email.trim()==""){
      _this.setState({error:"Please enter valid details"})
      }else if(reg.test(email) === false){
      _this.setState({error:"Please enter valid email"})
      } else{ 
      this.save();
    }
  }

  render() {
    return (
     <SafeAreaView>
        <View style = {{justifyContent : 'center'}}>
            <View style = {{alignItems : 'center', marginTop : 20}}>
              <Text style = {{fontSize  : 30, color : "rgba(103,58,183, 1)"}}>Login</Text>
            </View>
            <View style = {{alignItems : 'center', marginTop : 20}}>
              <Text style = {{fontSize  : 20, color : "red"}}>{this.state.error}</Text>
            </View>
            <View style = {{margin : 5}}>
              <Text style = {{fontSize  : 20}}>Email-Id</Text>
              <TextInput value={this.state.email} autoCapitalize = 'none' onChangeText={(text) => this.setState({ email: text })} style = {styles.textInput}/>
              <Text style = {{fontSize  : 20}}>Password</Text>
              <TextInput value={this.state.pword} autoCapitalize = 'none' onChangeText={(text) => this.setState({ pword: text })} secureTextEntry={true} style = {styles.textInput}/>
            </View>
            <TouchableOpacity style={styles.book} onPress={()=> {this.validate()}}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {this.props.navigation.navigate("Register")}} style ={{alignItems : 'center', margin : 10}}>
              <Text style={{color : "rgba(103,58,183, 1)"}}> Create an Account</Text>
            </TouchableOpacity>
        </View>
     </SafeAreaView>
    );
  }
}

function mapDispatchToProps(dispatch){
  return{
    loginUser : (loginData)=>dispatch(loginUser(loginData)),
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

export default Login = connect(mapStateToProps, mapDispatchToProps)(LoginUser)
