// import {View, TextInput, TouchableOpacity, Text } from 'react-native'
// import React, {Component} from 'react'
// import stripe from "tipsi-stripe";
// import scale, {verticalScale} from '../../utils/scale'
// import 'intl';
// import 'intl/locale-data/jsonp/en';

// stripe.setOptions({
//     publishableKey: 'pk_test_Ctm1J9hKhZncj8J8ZublOXL7',
//   });

// export default class Home extends Component {
// constructor(props){
//     super(props);
//     this.state = {
//      amount : 0,
//      converted : 0
//     }
// }
// getformattedCurrency(value) {
//     const formatter = new Intl.NumberFormat('en-IN', {
//        style: 'currency',
//        currency: 'INR',
//        minimumFractionDigits: 0,
//        maximumFractionDigits: 0,
//     });
//     this.setState({converted : formatter.format(value)})
//     return formatter.format(value);
//  }
//  requestPayment = () => {
//     return stripe
//       .paymentRequestWithCardForm()
//       .then(stripeTokenInfo => {
//         console.warn('Token created', { stripeTokenInfo });
//       })
//       .catch(error => {
//         console.warn('Payment failed', { error });
//       });
//   };


// render(){
//     return (
        
//         <View style={{flex:1, backgroundColor : 'blue' , alignContent : 'center', justifyContent : 'center', padding : 10}}>
//          <TextInput
//             placeholder="Enter the Amount"
//            style={{height: verticalScale(55),
//                 width: scale(315),
//                 padding: 12,
//                 borderWidth: 0.5,
//                 borderRadius: 29,
//                 fontSize: scale(21)}}
//             keyboardType="numeric"
//             onChangeText={text => this.setState({ amount: text })}
//           />
//           <TouchableOpacity
//           style={{alignItems : 'center', justifyContent : "center", padding : 10}}
//           onPress = {()=>this.requestPayment()}>
//               <Text style = {{fontSize : 30}}> Make a payment" </Text>
//           </TouchableOpacity>
//          <Text>{this.state.converted}</Text>
//         </View>
       
//     )
// }

// } 