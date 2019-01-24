import  {createStackNavigator} from 'react-navigation'
import Splash from './source/components/Splash'
import Movies from './source/components/Movies'
import Register from './source/components/Register'
import Login from './source/components/Login'

export default stackNavigation = createStackNavigator({
     Splash : {screen : Splash},
     Movies : {screen : Movies},
    Register : {screen : Register},
    Login : {screen : Login},

}, navigationOptions ={
    headerMode : 'none'
})



