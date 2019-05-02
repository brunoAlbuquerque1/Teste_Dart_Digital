import { LoginScreen, } from '../screens/LoginScreen'
import { HomeScreen } from '../screens/HomeScreen'

import { createStackNavigator, createAppContainer } from 'react-navigation';

const AuthStackNavigator = createStackNavigator(
    {

        LoginScreen: {
            screen: LoginScreen,
            navigationOptions: {
                headerTransparent: true,

            },
        },

        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: {
                title: 'Lista de repositorios',
                headerBackTitle: null,


            },
        },

    },

    {
        initialRouteName: 'LoginScreen',
        navigationOptions: {

        }
    }
);




export default createAppContainer(AuthStackNavigator);









