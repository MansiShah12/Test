import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export default (style = StyleSheet.create({
    book : {
        borderRadius :100,
        borderWidth : 1,
        borderColor : "rgba(103,58,183, 1)",
        backgroundColor : "rgba(103,58,183, 1)",
        width : 200,
        alignItems : 'center',
        alignSelf : 'center'
    },
    buttonText: {
      fontSize: 17,
      color: "white",
      padding  : 10,
      },
      textInput: {
        padding : 10, 
        height : 40, 
        width : 100,
        borderWidth : 1,
        borderRadius : 10,
        margin :10, 
        width : width-20,
      }
}));

