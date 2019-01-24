import React, {Component} from 'react'
import {View, Text, ImageBackground, Animated, Easing } from 'react-native'
import scale from '../../utils/scale'
//import * as Actions  from '../../Actions/movies'
import {connect } from 'react-redux'
import {fetchMovies} from '../../Actions/movies'
 class Home extends Component {
 constructor(props){
     super(props);
     this.animatedValue = new Animated.Value(0)
     this.spinValue = new Animated.Value(0)
 }
componentDidMount(){
  this.spin()
  //this.animate()
  this.props.fetchMovies();
 
   
}
 animate () {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }
    ).start()
  }
  spin () {
    this.animate()
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear
      }
    ).start(()=>{ this.props.navigation.navigate('Register')})
  }

    render(){
      //console.log("in splash", this.props.movies)

        const fontSize = this.animatedValue.interpolate({
            inputRange: [0, 0.6 ],
            outputRange: [0, scale(33)]
          })
          const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
          })
        
        return(
           <ImageBackground source={require("../../../assets/Images/bgImage.png")} style={{width: '100%', height: '100%', flex:1, justifyContent : 'center', alignItems : 'center'}}>
              <View style={{padding : 5}}>
                <Animated.Text style = {{fontFamily : 'Heather', fontSize, transform: [{rotate: spin}] , justifyContent : 'center', alignItems : 'center'}}> Transactions </Animated.Text>
               </View>  
           </ImageBackground>
        )
    }
}

function mapDispatchToProps(dispatch){
  return {
    fetchMovies : () => dispatch(fetchMovies()) ,
   
  }
}

function mapStateToProps(state){
  const{MoviesReducer}=state;
  return{
    movies:MoviesReducer.data,
  }
}

export default Splash =  connect(mapStateToProps, mapDispatchToProps)(Home)