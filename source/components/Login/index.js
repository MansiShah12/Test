import React, { Component } from "react";
import PropTypes from 'prop-types';

import { NavigationActions } from 'react-navigation'
import { SafeAreaView, TouchableOpacity, View, Text, TextInput,Dimensions, StyleSheet} from 'react-native'
// import styles from "./styles";
const {height, width} = Dimensions

var _this;
export default class Login extends Component {
  constructor(props) {
    super(props);
    _this = this;
    _this.state={
      error :'',
      email : '',
      pword : '' ,
      
    }
  }

  // signUp(values, dispatch){
  //   this.setState({isLoading:true})
  //   let email = values.email.toLowerCase().trim();
  //   let password = values.password;
  //   let lowerCaseValues = { email:email,password: password }
  //   return registering(values)
  //     .then(
  //       response => response.json(),
  //       error => error
  //     )
  //     .then(json => {
  //       this.setState({isLoading:false})
  //       console.log('json----', json)
  //       if(json.success === true){
  //         dispatch(setUser({email: values.email}));
  //         return signIn.login(lowerCaseValues,dispatch)
          
  //       }else{
  //         _this.setState({error:json.errors[0]})
         
  //     }
  //   })
  // }
 
save(){
  const data = {
   
   email: this.state.email,
    password: this.state.pword,
  }

  console.log("dadadadadaddada", JSON.stringify(data))

  fetch(`http://127.0.0.1:3000/v1/login.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res=>{
    console.log("resssssssssssssss", res)
  }).catch(err=>{
    console.log("ererererere", err)
  });


}
  validate(){
    console.log("in Validateeeeeeeeeeeeeee")
    const {fname, lname, email, pword, cpword}= this.state
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

    if(fname==''|| lname==''||email==''||pword==''){
      _this.setState({error:"Please enter all details"})
      } else if(email.trim()==""){
      _this.setState({error:"Please enter valid details"})
   } else if(reg.test(email) === false){
      _this.setState({error:"Please enter valid email"})

    } else
   { 
    this.save();
  //   _this.setState({error:"",  pword  :'', email : ""}) 
  //  alert("Logged In ")
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
         <TextInput value={this.state.email} onChangeText={(text) => this.setState({ email: text })}autoCapitalize = 'none' style = {styles.textInput}/>
         <Text style = {{fontSize  : 20}}>Password</Text>
         <TextInput value={this.state.pword} onChangeText={(text) => this.setState({ pword: text })}autoCapitalize = 'none' secureTextEntry={true} style = {styles.textInput}/>
         </View>
         <TouchableOpacity style={styles.book} onPress={()=> {this.validate()}}>
             <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> {this.props.navigation.goBack()}} style ={{alignItems : 'center', margin : 10}}>
             <Text style={{color : "rgba(103,58,183, 1)",}}>Sorry I missed, I want to Create an Account</Text>
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


// const registerSwag = reduxForm(
//   {
//     form: 'registerForm',
//   },
// )(Register);
// registerSwag.navigationOptions = {
//   header: null
// };
// export default registerSwag;
