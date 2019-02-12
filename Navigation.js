import  {createStackNavigator} from 'react-navigation'
import Splash from './source/components/Splash'
import Movies from './source/components/Movies'
import Register from './source/components/Register'
import Login from './source/components/Login'
import QRCode from './source/components/QRGenerator'
import changePassword from './source/components/changePassword'
export default stackNavigation = createStackNavigator({
    Splash : {screen : Splash},
    Movies : {screen : Movies},
    Register : {screen : Register},
    Login : {screen : Login},
    QRCode : {screen : QRCode},
    changePassword : {screen : changePassword},
 }, navigationOptions ={
    headerMode : 'none'
})

