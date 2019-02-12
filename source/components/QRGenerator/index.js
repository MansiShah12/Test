import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import QRCode from 'react-native-qrcode'
import {
    StyleSheet,
    View,
    SafeAreaView,
    Text
} from 'react-native'

class QRCodeGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: JSON.stringify(this.props.navigation.state.params),
            fname: this.props.user.firstName,
            lname: this.props.user.lastName,
        }
    }
    render() {
        console.log("code issss=============", this.props.navigation.state.params)
        const details = this.props.navigation.state.params.code
        if (details.day == 'Today') {
            details.day = moment().add(0, 'days').format('ddd, MMM D')
            console.log("detils.daeeeee", details.day)
        } else if (details.day == 'Tomorrow') {
            details.day = moment().add(1, 'days').format('ddd, MMM D')
            console.log("detils.daeeeee", details.day)
        }
        console.log("code issss=============", details)
        return (
            <SafeAreaView>
                <View style={{ alignItems: 'center', margin: 10 }}>
                    <Text style={{ fontSize: 30, margin: 10 }}>THANK YOU</Text>
                    <View style={{ alignSelf: 'stretch', margin: 10 }}>
                        <Text style={{ fontSize: 20 }}>Dear {this.state.fname} {this.state.lname},</Text>
                        <Text style={{ fontSize: 18, marginHorizontal: 15 }}>Your Booking has been Confirmed!!!</Text>
                    </View>
                    <View style = {{margin : 20}}>
                    <QRCode
                        value={this.state.text}
                        size={150}
                        bgColor='rgba(103,58,183, 1)'
                        fgColor='white' />
                        </View>
                    {/* <View style={{ alignSelf: 'stretch', margin: 20 }}> */}
                        <View style={styles.detailView}>
                            <Text style={styles.detailText}>Movie : </Text>
                            <Text style={styles.detailText}>{details.movie} </Text>
                        </View>
                        <View style={styles.detailView}>
                            <Text style={styles.detailText}>Day : </Text>
                            <Text style={styles.detailText}>{details.day} </Text>
                        </View> 
                        <View style={styles.detailView}>
                            <Text style={styles.detailText}>Time : </Text>
                            <Text style={styles.detailText}>{details.time} </Text>
                        </View> 
                        <View style={styles.detailView}>
                            <Text style={styles.detailText}>Booking Id : </Text>
                            <Text style={styles.detailText}>{details.code} </Text>
                        </View>

                    </View>
                {/* </View> */}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    detailText: {
        fontSize: 20,
        margin: 10
    },
    detailView : {
        alignSelf: 'stretch', 
        margin: 5, 
        flexDirection: 'row'
    }
});

// function mapDispatchToProps(dispatch) {
//     return {
//       registerUser: (data) => dispatch(registerUser(data)),
//       updateUser: (Updatedata) => dispatch(updateUser(Updatedata)),

//     }
//   }

function mapStateToProps(state) {
    const userReducer = state.userReducer;
    return {
        user: userReducer,
    }
}

export default QRCodeGenerator = connect(mapStateToProps, null)(QRCodeGenerator)