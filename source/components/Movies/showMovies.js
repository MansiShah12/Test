import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text, SafeAreaView,FlatList, Image,  Dimensions, TouchableOpacity} from 'react-native'
import {logoutUser} from '../../Actions/users'
const {width} = Dimensions.get('window');
 export class DisplayMovies extends Component {
   constructor(props){
       super(props);
       this.state = {
           movies : this.props.movies,
       }
   }
   
renderImage = item => (
    <TouchableOpacity 
     onPress={()=> {
            this.props.openDetailView(true, item)
     }}>
     <View style={{ padding  : 5, width: width/2, margin : 2, alignItems: 'center'}}>
         <Image
            style={{height: 250,width: width/2-20,borderRadius: 10 }}
            source={{ uri: item.item.poster }}
          />
          <Text numberOfLines={1} style={{maxWidth: 100}}>{item.item.title}</Text>
          
    </View>
    </TouchableOpacity>
  )
  
 render(){
     return(
         <View>
         <FlatList
                style={{width}}
                data = {this.props.movies.movies}
                keyExtractor={item => item._id}
                renderItem = {this.renderImage}
                numColumns={2}
                />
            </View>
      )
 }
}

function mapDispatchToProps(dispatch){
    return {
      logoutUser : (email) => dispatch(logoutUser(email)) ,
    }
  }
  export default ShowMovies =  connect(null, mapDispatchToProps)(DisplayMovies)