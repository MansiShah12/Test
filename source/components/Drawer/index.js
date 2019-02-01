import React from 'react';
import { connect } from 'react-redux';
import { Image, TouchableOpacity, ImageBackground, View, Text, ScrollView, Dimensions } from 'react-native';
import {styles} from './styles'

// import {
//   Text,
//   Container,
//   List,
//   ListItem,
//   Content,
// } from 'native-base';

// import { signingOut } from '../../services/authentication';
// import { signOut, removeMessages } from '../../actions/user';
// import { fetchMessageList, removeChatListListener } from '../../actions/fetchMessage'

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
    // else if (name === 'Logout') {
    //   signingOut(this.props.user.auth_token, this.props.user.email)
    //     .then(
    //       response => response.json(),
    //       error => error
    //     )
    //     .then(json => {
    //       if(json.success === true){
    //         this.props.loggingOutUser(true);
    //         this.props.removeMessages()
    //         this.props.navigation.navigate("Home");
    //         this.props.navigation.closeDrawer("Home");
    //       }else{
    //         this.props.loggingOutUser(true);
    //         // remove chat listener
    //         this.props.removeChatListListener(this.props.user)
    //         alert("Logout failed", json)
    //         console.log('TODO: show error messages on failed');
    //         console.log(json);
    //         //TODO: show error messages on failed
    //       }
    //     });
    // }
  }
  

  render() {
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
            <Text style={styles.textStyle}>Password</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textStyle}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loggingOutUser: (success, errorMsg='') => dispatch(signOut(success, errorMsg)),
    removeChatListListener: (user) => dispatch(removeChatListListener(user)),
    removeMessages: () => dispatch(removeMessages()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerNavigator);
