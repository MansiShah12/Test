import React, { Component } from 'react'
import { View, Text, SafeAreaView, ScrollView, Animated, Easing, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { logoutUser } from '../../Actions/users'
import ShowMovies from './showMovies'
import MovieDetails from './MovieDetails'
import Drawer from 'react-native-drawer'
import DrawerComponent from './../Drawer'

const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
    main: {paddingLeft: 3},
  }
class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: this.props.movies,
            openDetailView: false,
            selectedMovie: null
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            if (nextProps.LoginData !== this.props.LoginData && !nextProps.LoginData.loggedIn) {
                alert("Logged Out")
                this.props.navigation.navigate('Login')
            }
        }
    }
    openDetailView(open, selectedMovie) {
        this.setState({ openDetailView: open, selectedMovie: selectedMovie })
    }
    closeDetailView() {
        this.setState({ openDetailView: false })
    }
    logout() {
        email = { email: this.props.LoginData.email };
        this.props.logoutUser(email);
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Drawer
                    ref={(ref) => this._drawer = ref}
                    type="overlay"
                    content={<DrawerComponent navigation ={ this.props.navigation}/>}
                    tapToClose={true}
                    openDrawerOffset={0.4} // 20% gap on the right side of drawer
                    panCloseMask={0.2}
                    closedDrawerOffset={-3}
                    styles={drawerStyles}
                    
                >
                    <View style={{ padding: 5, justifyContent: "space-between", flexDirection: "row", height: 40, backgroundColor: "rgba(103,58,183, 1)" }}>
                        <TouchableOpacity style={{ alignItems: 'flex-end', justifyContent: 'center' }} onPress={()=>this._drawer.open()}>
                            <Text style={{ color: 'white', fontSize: 20 }}>Settings</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'flex-end', justifyContent: 'center' }} onPress={() => this.logout()}>
                            <Text style={{ color: 'white', fontSize: 20 }}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <ScrollView style={{ flex: 1 }}>
                            <ShowMovies movies={this.state.movies} openDetailView={(open, selectedMovie) => this.openDetailView(open, selectedMovie)} />
                        </ScrollView>
                    </View>
                    {this.state.openDetailView ?
                        <MovieDetails selectedMovie={this.state.selectedMovie} open={this.state.openDetailView} closeDetailView={() => this.closeDetailView()} navigation = {this.props.navigation} />
                        : <View />
                    }
                </Drawer>
            </SafeAreaView>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logoutUser: (email) => dispatch(logoutUser(email)),
    }
}

function mapStatetoProps(state) {
    const { MoviesReducer, userReducer } = state
    return {
        movies: MoviesReducer.data,
        LoginData: userReducer
    }
}
export default Movie = connect(mapStatetoProps, mapDispatchToProps)(Movies)

