import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthStackNavigator from './AuthStackNavigator'
import { LoginScreen } from '../screens/LoginScreen'

const AuthSwitchNavigator = createSwitchNavigator(
    {
        Auth: AuthStackNavigator,
        Login: LoginScreen,
    },

    {
        initialRouteName: 'Auth',
    }
);


export default createAppContainer(AuthSwitchNavigator);