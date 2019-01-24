import React, { Component } from 'react'
import { View, Text, SafeAreaView, ScrollView , Animated, Easing} from 'react-native'
import { connect } from 'react-redux'
import ShowMovies from './showMovies'
import MovieDetails from './MovieDetails'

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: this.props.movies,
            openDetailView : false,
            selectedMovie : null
        }
}

    openDetailView(open, selectedMovie){
        this.setState({openDetailView : open, selectedMovie : selectedMovie})

    }
    closeDetailView(){
        console.log("i8n Closeseseeseseeeees")
        this.setState({openDetailView : false})
    }
    render() {
         console.log("in in rendererereerererereerrere",this.state.openDetailView, this.state.selectedMovie )

        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <ScrollView style={{flex: 1}}>
                        <ShowMovies movies={this.state.movies} openDetailView= {(open, selectedMovie) => this.openDetailView(open, selectedMovie)}/>
                    </ScrollView>
                </View>
               { this.state.openDetailView ? 
                 <MovieDetails selectedMovie = {this.state.selectedMovie} open = {this.state.openDetailView } closeDetailView= {() => this.closeDetailView()}/>
                   : <View />
                    }  
            </SafeAreaView>
        )
    }
}

function mapStatetoProps(state) {
    const { MoviesReducer } = state
    return {
        movies : MoviesReducer.data
    }
}
export default Movie = connect(mapStatetoProps, null)(Movies)

