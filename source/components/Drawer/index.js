import React from 'react';
import { connect } from 'react-redux';
import { Image, TouchableOpacity, ImageBackground, View, Text, ScrollView, Dimensions } from 'react-native';
import { logoutUser } from '../../Actions/users'
import {styles} from './styles'

const { width, height } = Dimensions.get('window');
const routes = ['Home', 'Register', 'Login'];
class DrawerNavigator extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props){
    super(props);
    this.state={
      modalVisible:false
    }
  }

  routeName(name){
    console.log("in routeName", name)
    if (name === 'Home') {
      this.props.navigation.navigate('Movies');
      this.props.navigation.closeDrawer("Movies");
    } else if (name === 'Register') {
      this.props.navigation.navigate('Register', forUpdate = true);
    } else if (name === 'Login') {
      this.props.navigation.navigate('Login');
    } 
    else if (name === 'Logout') {
      email = { email: this.props.user.email };
        this.props.logoutUser(email);
    }else if (name === 'changePassword') {
      this.props.navigation.navigate('changePassword');
    }
  }
  

  render() {
    //console.log("this.props.userrrrr", this.props.user)
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
      <View style= {{margin : 20}}>
          <TouchableOpacity>
            <Text style={styles.textStyle} onPress = {()=>this.routeName(Register)}>My Bookings</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textStyle}>History</Text>
          </TouchableOpacity>
           <TouchableOpacity>
          <Text style={styles.textStyle} onPress = {()=>this.routeName("Register")}>Profile</Text>
            </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textStyle} onPress = {()=>this.routeName("changePassword")}>Password</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textStyle} onPress = {()=>this.routeName("Logout")}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {  userReducer } = state
return {
    user: userReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: (email) => dispatch(logoutUser(email)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerNavigator);
