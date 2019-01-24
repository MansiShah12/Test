import React, {Component} from 'react'
import {View, Text, SafeAreaView,FlatList, Image,  Dimensions, TouchableOpacity} from 'react-native'
const {height,width} = Dimensions.get('window');

 export default class ShowMovies extends Component {
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
         <View style = {{}}>
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