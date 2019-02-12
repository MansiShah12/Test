import React, { Component } from "react";
import {connect} from 'react-redux'
import { SafeAreaView, TouchableOpacity, View, Text, TextInput,Dimensions, StyleSheet} from 'react-native'
import {loginUser} from '../../Actions/users'
import styles from './styles'

var _this;
 class changePassword extends Component {
  constructor(props) {
    super(props);
    _this = this;
    _this.state={
      error :'',
      email : '',
      pword : '' ,
      wrongPass : false
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
    email: this.props.email,
    password: this.state.pword,
  }
  console.log("loginData isisisiis", loginData)
//   this.props.loginUser(loginData)
//   this.setState({error:"",  pword  :"", email : ""}) 

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
              <Text style = {{fontSize  : 30, color : "rgba(103,58,183, 1)"}}>Change Password</Text>
            </View>
            <View style = {{alignItems : 'center', marginTop : 20}}>
              <Text style = {{fontSize  : 20, color : "red"}}>{this.state.error}</Text>
            </View>
            {
                this.state.wrongPass ? 
                <View>
                <View style = {{margin : 5}}>
                <Text style = {{fontSize  : 20}}>New Password</Text>
                <TextInput value={this.state.email} autoCapitalize = 'none' onChangeText={(text) => this.setState({ email: text })} style = {styles.textInput}/>
                <Text style = {{fontSize  : 20}}>Confirm Password</Text>
                <TextInput value={this.state.pword} autoCapitalize = 'none' onChangeText={(text) => this.setState({ pword: text })} secureTextEntry={true} style = {styles.textInput}/>
              </View>
              <TouchableOpacity style={styles.book} onPress={()=> {this.validate()}}>
                <Text style={styles.buttonText}>Change</Text>
              </TouchableOpacity>
              </View> : 
                <View>
                <View style = {{margin : 5}}>
              <Text style = {{fontSize  : 20}}>Enter Old Password</Text>
              <TextInput value={this.state.pword} autoCapitalize = 'none' onChangeText={(text) => this.setState({ pword: text })} secureTextEntry={true} style = {styles.textInput}/>
              </View>
            <TouchableOpacity style={styles.book} onPress={()=> {this.save()}}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            </View>
            }
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

export default changePassword = connect(mapStateToProps, mapDispatchToProps)(changePassword)
