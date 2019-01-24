import {Dimensions} from 'react-native'

const {height , width } = Dimensions.get('window')
const SCREEN_HEIGHT = 667;
const SCREEN_WIDTH = 375; 

export default function (units = 1){
    return width/SCREEN_WIDTH * units
}

const verticalScale = size => height / SCREEN_HEIGHT * size;

export { verticalScale };