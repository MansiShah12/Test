import React, { Component } from 'react'
import { View, Text, TouchableHighlight,StyleSheet,TouchableOpacity, Image, FlatList } from 'react-native'
import { connect } from 'react-redux'
import Modal from 'react-native-modal'

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open,
            selectedMovie: props.selectedMovie.item,
            buttonText: "Show Subview",
            selectedDay: null,
            selectedTime: null,
            codeObj: {}
        }
    }
closeModal(){
    this.setState({
        open: false
    });
    this.props.closeDetailView()
}
_toggleSubview() {
    if(this.state.selectedDay==null){
        alert("Please select a day")
    }else if(this.state.selectedTime==null){
        alert("Please select a Time")
}else
   { code = Math.random().toString(36).substring(6).toUpperCase(),
    codeObj = {
        code: code,
        movie: this.state.selectedMovie.title,
        day: this.state.selectedDay,
        time: this.state.selectedTime,
    }
    setTimeout(() => {
        this.setState({
            open: false,
            codeObj : codeObj
        }, ()=>{this.props.navigation.navigate("QRCode", {code:this.state.codeObj})
        this.props.closeDetailView()});  
         }, 500);
     }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            this.setState({
                open: nextProps.openDetailView,
                selectedMovie: nextProps.selectedMovie
            })
        }
    }

    render() {
       //console.log("this.propssss", this.props)
        const movieDetail = this.state.selectedMovie
        const days = movieDetail.days
        const times = movieDetail.times
        return (
            <Modal isVisible={this.state.open}
                animationType='slide'
                backdropColor="white"
                backdropOpacity={1}
            >

                <View style={{ justifyContent: 'center', flex: 1 }}>
                    <TouchableOpacity style={styles.book} onPress={() => { this.closeModal() }}>
                        <Text style={styles.buttonText}>Cross</Text>
                    </TouchableOpacity>

                    <Image
                        style={{ padding: 10, marginVertical: 20, height: 300, width: 250, alignSelf: 'center' }}
                        source={{ uri: movieDetail.poster }} />
                        <View style={{alignItems : 'center'}}> 
                        <Text style={{textDecorationLine : 'underline',fontSize : 30, fontFamily : 'Heather', color :'rgba(103,58,183, 1)' }}>{movieDetail.title}</Text>
                        </View>
                        <Text style={{ margin: 5 }}>Day</Text>
                    <View style={{ height: 40 }}>
                        <FlatList
                            data={days}
                            keyExtractor={item => item}
                            extraData={this.state}
                            horizontal={true}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity style={{ marginHorizontal: 5 }}
                                        onPress={() => {
                                            //console.log("qwertyuio", item);
                                            this.setState({ selectedDay: item })
                                        }}>
                                        <View style={{ paddingVertical: 5, alignItems: 'center', borderWidth: 1, borderRadius: 10, paddingHorizontal: 20, borderColor: 'rgba(103,58,183, 1)', marginRight: 5, backgroundColor: this.state.selectedDay == item ? 'rgba(103,58,183, 1)' : 'white' }}>
                                            <Text style={{ color: (this.state.selectedDay == item) ? 'white' : 'rgba(103,58,183, 1)' }} >{item}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </View>
                    <Text style={{ margin: 5 }}>Time</Text>

                    <View style={{ height: 40 }}>
                        <FlatList
                            data={times}
                            keyExtractor={item => item}
                            extraData={this.state}
                            horizontal={true}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity style={{ marginHorizontal: 5 }}
                                        onPress={() => {
                                            console.log("qwertyuio", item);
                                            this.setState({ selectedTime: item })
                                        }}
                                    >
                                        <View style={{ paddingVertical: 5, alignItems: 'center', borderWidth: 1, borderRadius: 10, paddingHorizontal: 20, borderColor: 'rgba(103,58,183, 1)', marginRight: 5, backgroundColor: this.state.selectedTime == item ? 'rgba(103,58,183, 1)' : 'white' }}>
                                            <Text style={{ color: (this.state.selectedTime == item) ? 'white' : 'rgba(103,58,183, 1)' }}>{item}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </View>
                    <TouchableHighlight style={styles.book} onPress={() => { this._toggleSubview() }}>
                        <Text style={styles.buttonText}>BOOK</Text>
                    </TouchableHighlight>
                </View>
            </Modal>
        )
    }
}

var styles = StyleSheet.create({

    button: {
        //  backgroundColor : 'red',
        padding: 8,
        alignContent: 'flex-end'
    },
    buttonText: {
        fontSize: 17,
        color: "white",
        padding: 10,
    },

    buttonText1: {
        fontSize: 17,
        color: "blue",
        padding: 10
    },

    book: {
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "rgba(103,58,183, 1)",
        backgroundColor: "rgba(103,58,183, 1)",
        width: 200,
        alignItems: 'center',
        alignSelf: 'center'
    }
});

function mapStatetoProps(state) {
    const { MoviesReducer } = state
    return (
        movies = MoviesReducer.data
    )
}
export default MovieDetails = connect(mapStatetoProps, null)(Details)